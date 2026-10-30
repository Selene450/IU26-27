const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ValidateFieldsForm = require('./ValidateFieldsForm');
const { runEntityTests } = require('./entidades_validate_tests');

const TEST_FILES = [
    'persona_tests.js',
    'usuario_tests.js',
    'rol_tests.js',
    'accion_tests.js',
    'funcionalidad_tests.js',
    'funcionalidad_accion_tests.js',
    'rolaccionfuncionalidad_tests.js'
];

function loadLegacyTests(fileName) {
    const source = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    const context = {};
    vm.createContext(context);
    vm.runInContext(source, context, { filename: fileName });

    const entity = fileName.replace('_tests.js', '');
    return {
        entity,
        definitions: context[`${entity}_def_tests`],
        cases: context[`${entity}_pruebas`]
    };
}

function check(condition, message, errors) {
    if (!condition) errors.push(message);
}

function validateDefinitions(suite, errors) {
    const numbers = new Set();
    check(Array.isArray(suite.definitions) && suite.definitions.length > 0,
        `${suite.entity}: no hay definiciones`, errors);

    for (const definition of suite.definitions || []) {
        check(Array.isArray(definition) && definition.length === 9,
            `${suite.entity}: definición con formato incorrecto`, errors);
        if (!Array.isArray(definition) || definition.length !== 9) continue;

        const [entity, field, htmlType, number, description, rule, action, expected, message] = definition;
        check(entity === suite.entity, `${suite.entity}: entidad incorrecta en definición ${number}`, errors);
        check(typeof field === 'string' && field.length > 0,
            `${suite.entity}: campo vacío en definición ${number}`, errors);
        check(['input', 'textarea', 'select', 'file'].includes(htmlType),
            `${suite.entity}.${field}: tipo HTML no válido`, errors);
        check(Number.isInteger(number) && number > 0,
            `${suite.entity}.${field}: número de definición no válido`, errors);
        check(!numbers.has(number), `${suite.entity}: definición duplicada ${number}`, errors);
        numbers.add(number);
        check(['min_size', 'max_size', 'format', 'valid', 'valid_date',
            'exist_file', 'min_name_file', 'max_name_file', 'format_name_file',
            'max_size_file'].includes(rule),
        `${suite.entity}.${field}: regla no reconocida ${rule}`, errors);
        check(['ADD', 'EDIT', 'SEARCH'].includes(action),
            `${suite.entity}.${field}: acción no válida ${action}`, errors);
        check(typeof description === 'string' && description.length > 0,
            `${suite.entity}.${field}: falta descripción`, errors);
        check(typeof message === 'string', `${suite.entity}.${field}: falta mensaje`, errors);
        check(typeof expected === 'boolean' || typeof expected === 'string',
            `${suite.entity}.${field}: resultado esperado no válido`, errors);
    }

    return numbers;
}

function validateCases(suite, definitionNumbers, errors) {
    const caseNumbers = new Set();
    check(Array.isArray(suite.cases) && suite.cases.length > 0,
        `${suite.entity}: no hay casos`, errors);

    for (const testCase of suite.cases || []) {
        check(Array.isArray(testCase) && testCase.length === 7,
            `${suite.entity}: caso con formato incorrecto`, errors);
        if (!Array.isArray(testCase) || testCase.length !== 7) continue;

        const [entity, field, definitionNumber, caseNumber, action, data, expected] = testCase;
        check(entity === suite.entity, `${suite.entity}: entidad incorrecta en caso ${caseNumber}`, errors);
        check(definitionNumbers.has(definitionNumber),
            `${suite.entity}: caso ${caseNumber} referencia definición inexistente ${definitionNumber}`, errors);
        check(!caseNumbers.has(caseNumber), `${suite.entity}: caso duplicado ${caseNumber}`, errors);
        caseNumbers.add(caseNumber);
        check(typeof field === 'string' && field.length > 0,
            `${suite.entity}: campo vacío en caso ${caseNumber}`, errors);
        check(['ADD', 'EDIT', 'SEARCH'].includes(action),
            `${suite.entity}.${field}: acción no válida en caso ${caseNumber}`, errors);
        check(data && typeof data === 'object' && !Array.isArray(data),
            `${suite.entity}.${field}: datos no válidos en caso ${caseNumber}`, errors);
        check(typeof expected === 'boolean' || typeof expected === 'string',
            `${suite.entity}.${field}: resultado no válido en caso ${caseNumber}`, errors);
    }

    return caseNumbers;
}

function patternFor(entity, field, rule) {
    if (rule === 'format' || rule === 'valid') {
        if (field === 'dni') return '^\\d{8}[A-Z]$';
        if (field.startsWith('id_')) return '^\\d+$';
        if (field.includes('fechaNacimiento')) return '^\\d{2}/\\d{2}/\\d{4}$';
        if (field === 'telefono_persona') return '^[6789]\\d{8}$';
        if (field === 'email_persona') return '^[\\w.%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$';
        if (field === 'usuario' || field === 'contrasena') return '^[A-Za-z]+$';
        if (field === 'nombre_persona' || field === 'apellidos_persona') {
            return "^[A-Za-zÁÉÍÓÚáéíóúÑñ .'-]+$";
        }
        if (field === 'direccion_persona') {
            return "^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;:/()'¿?¡!º-]+$";
        }
        if (field.includes('nombre') || field === 'rol_name') return '^[A-Za-zÑñ]+$';
        return '^[A-Za-zÁÉÍÓÚáéíóúÑñ .,;:/()¿?¡!º-]+$';
    }
    return null;
}

function sizeFor(field, rule) {
    const limits = {
        dni: { min_size: 9, max_size: 9 },
        usuario: { min_size: 5, max_size: 45 },
        contrasena: { min_size: 8, max_size: 45 },
        id_rol: { min_size: 1, max_size: 11 },
        id_accion: { min_size: 1, max_size: 11 },
        id_funcionalidad: { min_size: 1, max_size: 11 },
        nombre_persona: { min_size: 2, max_size: 45 },
        apellidos_persona: { min_size: 3, max_size: 100 },
        fechaNacimiento_persona: { min_size: 10, max_size: 10 },
        direccion_persona: { min_size: 10, max_size: 200 },
        telefono_persona: { min_size: 9, max_size: 9 },
        rol_name: { min_size: 5, max_size: 48 },
        nombre_accion: { min_size: 5, max_size: 48 },
        nombre_funcionalidad: { min_size: 5, max_size: 48 },
        rol_description: { min_size: 5, max_size: 200 },
        descrip_accion: { min_size: 5, max_size: 200 },
        descrip_funcionalidad: { min_size: 5, max_size: 200 }
    };
    return limits[field] && limits[field][rule];
}

function legacyToFieldDefinition(definition) {
    const [, field, htmlType, , , rule, action] = definition;
    const validation = {};
    const size = sizeFor(field, rule);

    if (rule === 'min_size' || rule === 'max_size') {
        validation[rule] = size;
    } else if (rule === 'format') {
        if (field === 'dni') validation.dni = true;
        else if (field.includes('fechaNacimiento')) validation.valid_date = true;
        else if (field === 'telefono_persona') validation.phone = true;
        else if (field === 'email_persona') validation.email = true;
        else if (htmlType === 'file') validation.type_file = ['image/jpeg', 'image/jpg'];
        else validation.exp_reg = patternFor('', field, rule);
    } else if (rule === 'valid') {
        if (htmlType === 'file') {
            return {
                html: { tag: 'file', type: 'file' },
                db: { is_null: { [action]: action !== 'ADD' } },
                rules: { validations: { [action]: {} } }
            };
        }
        if (field === 'dni') validation.dni = true;
        else if (field.includes('fechaNacimiento')) validation.valid_date = true;
        else if (field === 'telefono_persona') validation.phone = true;
        else if (field === 'email_persona') validation.email = true;
        else validation.exp_reg = patternFor('', field, rule);
    } else if (rule === 'valid_date') {
        validation.valid_date = true;
    } else if (rule === 'format_name_file') {
        validation.format_name_file = '^[A-Za-z]{3,15}\\.(jpg|jpeg)$';
    } else if (rule === 'max_size_file') {
        validation.max_size_file = 2_000_000;
        validation.format_name_file = '^[A-Za-z]{3,15}\\.(jpg|jpeg)$';
    } else if (rule === 'min_name_file') {
        validation.format_name_file = '^[A-Za-z]{3,15}\\.(jpg|jpeg)$';
    } else if (rule === 'max_name_file') {
        validation.format_name_file = '^[A-Za-z]{3,15}\\.(jpg|jpeg)$';
    }

    const nullable = htmlType === 'file' && (action === 'EDIT' || action === 'SEARCH');
    return {
        html: { tag: htmlType, type: htmlType === 'file' ? 'file' : 'text' },
        db: { is_null: { [action]: nullable } },
        rules: { validations: { [action]: validation } }
    };
}

function normalizeLegacyValue(field, data, htmlType) {
    const value = data && data[field];
    if (htmlType === 'file' && typeof value === 'string') {
        return { name: value, type: 'image/jpeg', size: 0 };
    }
    if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
    if (value.format_name_file !== undefined) {
        return {
            name: value.format_name_file,
            type: value.type_file || '',
            size: value.max_size_file || 0
        };
    }
    return value;
}

function executeLegacyCases(suite) {
    const definitions = new Map(suite.definitions.map(definition => [definition[3], definition]));
    const failures = [];
    let executed = 0;

    for (const testCase of suite.cases) {
        const [entity, field, definitionNumber, caseNumber, action, data, expected] = testCase;
        const definition = definitions.get(definitionNumber);
        if (!definition) continue;
        const form = new ValidateFieldsForm(
            legacyToFieldDefinition(definition),
            normalizeLegacyValue(field, data, definition[2]),
            field
        );
        const actual = form.validateField(action).isValid;
        const expectedValid = expected === true;
        executed++;
        if (actual !== expectedValid) {
            failures.push({
                entity,
                field,
                caseNumber,
                action,
                expected,
                actual,
                errors: form.validateField(action).errors
            });
        }
    }
    return { executed, failures };
}

function runLegacySuites() {
    let definitions = 0;
    let cases = 0;
    let executed = 0;
    const errors = [];
    const executionFailures = [];

    for (const fileName of TEST_FILES) {
        const suite = loadLegacyTests(fileName);
        const definitionNumbers = validateDefinitions(suite, errors);
        validateCases(suite, definitionNumbers, errors);
        definitions += suite.definitions.length;
        cases += suite.cases.length;
        const execution = executeLegacyCases(suite);
        executed += execution.executed;
        executionFailures.push(...execution.failures);
    }

    console.log(`Definiciones revisadas: ${definitions}`);
    console.log(`Casos revisados: ${cases}`);
    console.log(`Casos ejecutados contra ValidateFieldsForm: ${executed}`);
    console.log(`Errores estructurales: ${errors.length}`);
    console.log(`Errores de ejecución: ${executionFailures.length}`);
    errors.slice(0, 20).forEach(error => console.error(`- ${error}`));
    executionFailures.slice(0, 20).forEach(failure => console.error(
        `- ${failure.entity}.${failure.field} caso ${failure.caseNumber}: ` +
        `esperado ${String(failure.expected)}, obtenido ${String(failure.actual)}`
    ));
    if (errors.length > 20 || executionFailures.length > 20) {
        console.error(`- ... y ${errors.length - 20} errores más`);
    }
    return [...errors, ...executionFailures];
}

function main() {
    console.log('=== ValidateFieldsForm ===');
    const entitySuite = runEntityTests();
    console.log('\n=== Definiciones y pruebas heredadas ===');
    const legacyErrors = runLegacySuites();
    const failures = entitySuite.failed.length + legacyErrors.length;

    if (failures > 0) {
        console.error(`\nRESULTADO: ${failures} problemas detectados.`);
        process.exitCode = 1;
        return;
    }
    console.log('\nRESULTADO: todas las definiciones y pruebas son correctas.');
}

if (require.main === module) main();

module.exports = { loadLegacyTests, runLegacySuites };
