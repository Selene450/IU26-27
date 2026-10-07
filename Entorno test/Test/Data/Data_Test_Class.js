class Data_Test {

    constructor(entityName, definitions, cases) {
        this.entityName = entityName;
        this.definitions = definitions;
        this.cases = cases;
        this.definitionById = new Map();
        this.definitionIssues = [];

        this.validateDefinitions();
        this.renderReport();
    }

    validateDefinitions() {
        const allowedTypes = ['input', 'textarea', 'select', 'file'];
        const allowedActions = ['ADD', 'EDIT', 'SEARCH'];
        const allowedRules = [
            'min_size',
            'max_size',
            'format',
            'valid',
            'exist_file',
            'min_name_file',
            'max_name_file',
            'format_name_file',
            'max_size_file'
        ];

        this.definitions.forEach((definition, index) => {
            const number = definition[3];
            const issues = [];

            if (definition.length < 9) {
                issues.push('La definición no contiene todos los campos requeridos');
            }
            if (definition[0] !== this.entityName) {
                issues.push(`La entidad debería ser "${this.entityName}"`);
            }
            if (!definition[1]) {
                issues.push('La definición no indica un campo');
            }
            if (!allowedTypes.includes(definition[2])) {
                issues.push(`Tipo de control no reconocido: "${definition[2]}"`);
            }
            if (!Number.isInteger(number)) {
                issues.push('El número de definición debe ser un entero');
            } else if (this.definitionById.has(number)) {
                issues.push(`Número de definición duplicado: ${number}`);
            } else {
                this.definitionById.set(number, definition);
            }
            if (!allowedRules.includes(definition[5])) {
                issues.push(`Regla de validación no reconocida: "${definition[5]}"`);
            }
            if (!allowedActions.includes(definition[6])) {
                issues.push(`Acción no reconocida: "${definition[6]}"`);
            }

            if (issues.length > 0) {
                this.definitionIssues.push({
                    definitionNumber: Number.isInteger(number) ? number : index + 1,
                    field: definition[1] || '',
                    issues
                });
            }
        });
    }

    validateCase(testCase, index, testNumbers, referencedDefinitions) {
        const definition = this.definitionById.get(testCase[2]);
        const issues = [];
        const testNumber = testCase[3];

        if (testCase.length < 7) {
            issues.push('La prueba no contiene todos los campos requeridos');
        }
        if (testCase[0] !== this.entityName) {
            issues.push(`La entidad debería ser "${this.entityName}"`);
        }
        if (!Number.isInteger(testNumber)) {
            issues.push('El número de prueba debe ser un entero');
        } else if (testNumbers.has(testNumber)) {
            issues.push(`Número de prueba duplicado: ${testNumber}`);
        } else {
            testNumbers.add(testNumber);
        }

        if (!definition) {
            issues.push(`No existe la definición ${testCase[2]}`);
        } else {
            referencedDefinitions.add(testCase[2]);

            if (testCase[0] !== definition[0]) {
                issues.push('La entidad no coincide con la definición');
            }
            if (testCase[1] !== definition[1]) {
                issues.push(`El campo "${testCase[1]}" no coincide con "${definition[1]}"`);
            }
            if (testCase[4] !== definition[6]) {
                issues.push(`La acción "${testCase[4]}" no coincide con "${definition[6]}"`);
            }
            if (testCase[6] !== true && testCase[6] !== definition[7]) {
                issues.push(`El resultado esperado "${testCase[6]}" no coincide con el error "${definition[7]}"`);
            }
        }

        return {
            entity: testCase[0] || '',
            field: testCase[1] || '',
            definitionNumber: testCase[2],
            testNumber: Number.isInteger(testNumber) ? testNumber : index + 1,
            action: testCase[4] || '',
            value: this.formatValue(testCase[5]),
            expected: this.formatValue(testCase[6]),
            status: issues.length === 0 ? 'CORRECTO' : 'INCORRECTO',
            issues: issues.join('; ')
        };
    }

    formatValue(value) {
        if (typeof value === 'string') {
            return value;
        }
        if (value === undefined) {
            return '';
        }
        return JSON.stringify(value);
    }

    renderReport() {
        const results = [];
        const testNumbers = new Set();
        const referencedDefinitions = new Set();

        this.cases.forEach((testCase, index) => {
            results.push(this.validateCase(testCase, index, testNumbers, referencedDefinitions));
        });

        this.definitions.forEach((definition, index) => {
            if (!this.definitionById.has(definition[3]) || referencedDefinitions.has(definition[3])) {
                return;
            }
            results.push({
                entity: this.entityName,
                field: definition[1] || '',
                definitionNumber: definition[3] || index + 1,
                testNumber: '-',
                action: definition[6] || '',
                value: '',
                expected: '',
                status: 'INCORRECTO',
                issues: `La definición ${definition[3]} no tiene ninguna prueba asociada`
            });
        });

        this.definitionIssues.forEach(issue => {
            results.push({
                entity: this.entityName,
                field: issue.field,
                definitionNumber: issue.definitionNumber,
                testNumber: '-',
                action: '',
                value: '',
                expected: '',
                status: 'INCORRECTO',
                issues: issue.issues.join('; ')
            });
        });

        const passed = results.filter(result => result.status === 'CORRECTO').length;
        const failed = results.length - passed;
        const report = document.getElementById('IU_Test_result');
        report.replaceChildren();

        const summary = document.createElement('p');
        summary.textContent = `Entidad: ${this.entityName}. Casos revisados: ${this.cases.length}. ` +
            `Correspondencias correctas: ${passed}. Inconsistencias: ${failed}.`;
        report.append(summary);

        const notice = document.createElement('p');
        notice.textContent = 'Este informe comprueba definiciones y correspondencia de datos; no ejecuta validaciones de entidad.';
        report.append(notice);

        const table = document.createElement('table');
        const headers = [
            'Entidad',
            'Campo',
            'N.º definición',
            'N.º prueba',
            'Acción',
            'Valor de prueba',
            'Esperado',
            'Estado',
            'Detalle'
        ];
        const head = table.createTHead().insertRow();
        headers.forEach(header => {
            const cell = document.createElement('th');
            cell.textContent = header;
            head.append(cell);
        });

        const body = table.createTBody();
        results.forEach(result => {
            const row = body.insertRow();
            [
                result.entity,
                result.field,
                result.definitionNumber,
                result.testNumber,
                result.action,
                result.value,
                result.expected,
                result.status,
                result.issues
            ].forEach(value => {
                const cell = row.insertCell();
                cell.textContent = value;
                if (result.status === 'INCORRECTO') {
                    cell.classList.add('test-failed');
                }
            });
        });

        report.append(table);
    }
}
