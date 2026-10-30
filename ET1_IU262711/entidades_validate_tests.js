const ValidateFieldsForm = typeof require === 'function'
    ? require('./ValidateFieldsForm')
    : window.ValidateFieldsForm;

const texto = (min, max, exp_reg) => ({
    html: { tag: 'input', type: 'text' },
    rules: { validations: {
        ADD: { min_size: min, max_size: max, exp_reg },
        EDIT: { min_size: min, max_size: max, exp_reg },
        SEARCH: { max_size: max, exp_reg }
    }}
});

const entero = () => texto(1, 11, '^\\d+$');
const entidad = {};

entidad.persona = {
    dni: Object.assign(texto(9, 9, '^\\d{8}[A-HJ-NP-TV-Z]$'), { rules: { validations: {
        ADD: { min_size: 9, max_size: 9, dni: true },
        EDIT: { min_size: 9, max_size: 9, dni: true },
        SEARCH: { max_size: 9, dni: true }
    }}}),
    nombre_persona: texto(2, 45, "^[\\p{L} .'-]+$".replace('\\p{L}', 'A-Za-zÁÉÍÓÚáéíóúÑñ')),
    apellidos_persona: texto(3, 100, "^[\\p{L} .'-]+$".replace('\\p{L}', 'A-Za-zÁÉÍÓÚáéíóúÑñ')),
    fechaNacimiento_persona: Object.assign(texto(10, 10, '^\\d{2}/\\d{2}/\\d{4}$'), { rules: { validations: {
        ADD: { min_size: 10, max_size: 10, valid_date: true },
        EDIT: { min_size: 10, max_size: 10, valid_date: true },
        SEARCH: { max_size: 10, valid_date: true }
    }}}),
    direccion_persona: texto(10, 200, "^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;:/()'¿?¡!º-]+$"),
    telefono_persona: Object.assign(texto(9, 9, '^[6789]\\d{8}$'), { rules: { validations: {
        ADD: { min_size: 9, max_size: 9, phone: true },
        EDIT: { min_size: 9, max_size: 9, phone: true },
        SEARCH: { max_size: 9, phone: true }
    }}}),
    email_persona: { html: { tag: 'input', type: 'email' }, rules: { validations: {
        ADD: { email: true }, EDIT: { email: true }, SEARCH: { email: true }
    }}}
};

entidad.usuario = {
    dni: entidad.persona.dni,
    usuario: texto(5, 45, '^[A-Za-z]+$'),
    contrasena: texto(8, 45, '^[A-Za-z]+$'),
    id_rol: entero()
};
entidad.rol = { id_rol: entero(), rol_name: texto(5, 48, '^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$'), rol_description: texto(5, 200, '^[\\wÁÉÍÓÚáéíóúÑñ .,;:/()¿?¡!º-]+$') };
entidad.accion = { id_accion: entero(), nombre_accion: entidad.rol.rol_name, descrip_accion: entidad.rol.rol_description };
entidad.funcionalidad = { id_funcionalidad: entero(), nombre_funcionalidad: entidad.rol.rol_name, descrip_funcionalidad: entidad.rol.rol_description };
entidad.funcionalidad_accion = { id_funcionalidad: entero(), id_accion: entero() };
entidad.rolaccionfuncionalidad = { id_rol: entero(), id_accion: entero(), id_funcionalidad: entero() };

const valoresValidos = {
    dni: '12345678Z', nombre_persona: 'Ana', apellidos_persona: 'García López',
    fechaNacimiento_persona: '01/01/2000', direccion_persona: 'Calle Mayor 1',
    telefono_persona: '612345678', email_persona: 'ana@example.com',
    usuario: 'usuario', contrasena: 'secretos', rol_name: 'Administrador',
    nombre_accion: 'Consultar', nombre_funcionalidad: 'Gestionar',
    rol_description: 'Descripción válida.', descrip_accion: 'Descripción válida.',
    descrip_funcionalidad: 'Descripción válida.', id_rol: '123',
    id_accion: '123', id_funcionalidad: '123'
};

const valoresInvalidos = {
    dni: '12345678A', fechaNacimiento_persona: '31/02/2000',
    telefono_persona: '123', email_persona: 'correo-invalido',
    usuario: '@@@', contrasena: 'abc', id_rol: 'abc',
    id_accion: 'abc', id_funcionalidad: 'abc'
};

function runEntityTests() {
    const results = [];
    let failures = 0;
    for (const [entityName, fields] of Object.entries(entidad)) {
        for (const [fieldName, definition] of Object.entries(fields)) {
            const form = new ValidateFieldsForm(definition, valoresValidos[fieldName], fieldName);
            const validResult = form.validateField('ADD');
            results.push({ entityName, fieldName, case: 'válido', ...validResult });
            if (!validResult.isValid) failures++;

            form.setValue(valoresInvalidos[fieldName] || '@@@');
            const invalidResult = form.validateField('ADD');
            results.push({ entityName, fieldName, case: 'inválido', ...invalidResult });
            if (invalidResult.isValid) failures++;
        }
    }
    console.log(`Pruebas ejecutadas: ${results.length}`);
    console.log(`Pruebas con error: ${failures}`);
    return { results, failed: results.filter(result => result.isValid === (result.case === 'inválido')) };
}

if (typeof module !== 'undefined') module.exports = { entidad, runEntityTests };
if (typeof require !== 'undefined' && require.main === module) {
    const { failed } = runEntityTests();
    if (failed.length) process.exitCode = 1;
}
