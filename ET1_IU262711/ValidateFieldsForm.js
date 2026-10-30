/**
 * Motor reutilizable para crear y validar campos de formularios.
 * Funciona en navegador y en Node.js sin dependencias externas.
 */
class ValidateFieldsForm {
    constructor(fieldDefinition, value = '', fieldName = '') {
        this.field = fieldDefinition || {};
        this.fieldName = fieldName || this.field.name || 'default';
        this.elementId = `field_${this.fieldName}`;
        this.value = value;
        this.html = this.field.html || {};
        this.db = this.field.db || {};
        this.rules = this.field.rules || {};
        this.field.name = this.fieldName;
        this.field.type = this.html.tag || 'input';
        this.field.options = this.html.options || [];
        this.field.validations = this.rules.validations || {};
    }

    createField() {
        const tag = this.html.tag || 'input';
        const value = this.escape(this.value == null ? '' : this.value);

        if (tag === 'textarea') {
            return `<label for="${this.elementId}">${this.fieldName}</label>` +
                `<textarea id="${this.elementId}" data-field-name="${this.fieldName}">${value}</textarea>`;
        }
        if (tag === 'select') {
            const options = this.html.options || [];
            const html = options.map(option =>
                `<option value="${this.escape(option)}"${option === this.value ? ' selected' : ''}>` +
                `${this.escape(option)}</option>`).join('');
            return `<label for="${this.elementId}">${this.fieldName}</label>` +
                `<select id="${this.elementId}" data-field-name="${this.fieldName}">` +
                `<option value="">-- Seleccionar --</option>${html}</select>`;
        }
        if (tag === 'file' || this.html.type === 'file') {
            return `<label for="${this.elementId}">${this.fieldName}</label>` +
                `<input type="file" id="${this.elementId}" data-field-name="${this.fieldName}">`;
        }
        return `<label for="${this.elementId}">${this.fieldName}</label>` +
            `<input type="${this.html.type || 'text'}" id="${this.elementId}" ` +
            `value="${value}" data-field-name="${this.fieldName}">`;
    }

    getValue() {
        if (typeof document !== 'undefined') {
            const element = document.getElementById(this.elementId);
            if (element) {
                if (element.type === 'file') {
                    return element.files && element.files.length ? element.files[0] : null;
                }
                return element.value;
            }
        }
        return this.value;
    }

    setValue(value) {
        this.value = value;
        if (typeof document !== 'undefined') {
            const element = document.getElementById(this.elementId);
            if (element && element.type !== 'file') element.value = value || '';
        }
    }

    clear() {
        this.setValue('');
    }

    getElementId() {
        return this.elementId;
    }

    validateField(action = 'ADD', entityClass = null) {
        const validations = this.fieldValidations(action);
        const result = { fieldName: this.fieldName, isValid: true, errors: [], warnings: [] };
        const value = this.getValue();
        const empty = value === null || value === undefined || String(value).trim() === '';
        const nullable = this.isNullable(action);
        const isFile = this.html.tag === 'file' || this.html.type === 'file';

        if (empty) {
            if (!nullable && ['ADD', 'EDIT'].includes(action)) {
                result.isValid = false;
                result.errors.push({
                    rule: 'required',
                    message: isFile ? 'No se ha seleccionado ningún fichero' : 'Campo requerido'
                });
                return result;
            }
            if (isFile) return result;
        }

        for (const validation of validations) {
            const error = this.executeValidation(validation, entityClass, value);
            if (error) {
                result.isValid = false;
                result.errors.push({ rule: validation.rule, message: error });
            }
        }
        return result;
    }

    fieldValidations(action) {
        const actionRules = this.rules.validations && this.rules.validations[action];
        if (!actionRules) return [];
        if (Array.isArray(actionRules)) return actionRules;
        return this.convertValidationsFormat(actionRules);
    }

    convertValidationsFormat(rules) {
        const result = [];
        if (rules.min_size !== undefined) result.push({ rule: 'minSize', params: { size: rules.min_size } });
        if (rules.max_size !== undefined) result.push({ rule: 'maxSize', params: { size: rules.max_size } });
        if (rules.exp_reg) result.push({ rule: 'format', params: { pattern: rules.exp_reg } });
        if (rules.valid_date) result.push({ rule: 'validDate' });
        if (rules.integer) result.push({ rule: 'integer' });
        if (rules.email) result.push({ rule: 'email' });
        if (rules.phone) result.push({ rule: 'phone' });
        if (rules.dni) result.push({ rule: 'dni' });
        if (rules.type_file) {
            const types = Array.isArray(rules.type_file) ? rules.type_file : [rules.type_file];
            result.push({ rule: 'fileType', params: { types } });
        }
        if (rules.max_size_file !== undefined) {
            result.push({ rule: 'maxSizeFile', params: { maxSize: rules.max_size_file } });
        }
        if (rules.format_name_file) {
            result.push({ rule: 'formatNameFile', params: { pattern: rules.format_name_file } });
        }
        if (rules.personalized) result.push({ rule: 'personalized', personalize: true });
        return result;
    }

    executeValidation(validation, entityClass, value) {
        const params = validation.params || {};
        switch (validation.rule) {
            case 'minSize':
                return String(value).length >= params.size ? null : `Debe tener al menos ${params.size} caracteres`;
            case 'maxSize':
                return String(value).length <= params.size ? null : `Debe tener como máximo ${params.size} caracteres`;
            case 'integer':
                return /^\d+$/.test(String(value)) ? null : 'Debe ser un número entero';
            case 'format':
                return new RegExp(params.pattern).test(String(value)) ? null : 'Formato no válido';
            case 'validDate':
                return this.validDate(value) ? null : 'Fecha no válida';
            case 'dni':
                return this.validDni(value) ? null : 'DNI no válido';
            case 'email':
                return /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(String(value)) ? null : 'Email no válido';
            case 'phone':
                return /^[6789]\d{8}$/.test(String(value)) ? null : 'Teléfono no válido';
            case 'fileType':
                return params.types.includes(value.type) ? null : 'Tipo de fichero no válido';
            case 'maxSizeFile':
                return value.size <= params.maxSize ? null : 'Tamaño de fichero excesivo';
            case 'formatNameFile':
                return new RegExp(params.pattern).test(value.name) ? null : 'Nombre de fichero no válido';
            case 'personalized':
                return entityClass && typeof entityClass[`${this.fieldName}_personalized_validation`] === 'function'
                    ? entityClass[`${this.fieldName}_personalized_validation`](value, { [this.fieldName]: value })
                    : null;
            default:
                return null;
        }
    }

    isNullable(action) {
        const definition = this.db.is_null || {};
        return definition[action] === true;
    }

    validDate(value) {
        const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(String(value));
        if (!match) return false;
        const date = new Date(`${match[3]}-${match[2]}-${match[1]}T00:00:00`);
        return date.getFullYear() === Number(match[3]) &&
            date.getMonth() + 1 === Number(match[2]) &&
            date.getDate() === Number(match[1]);
    }

    validDni(value) {
        if (!/^\d{8}[A-HJ-NP-TV-Z]$/.test(String(value))) return false;
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        return String(value)[8] === letters[Number(String(value).slice(0, 8)) % 23];
    }

    escape(value) {
        return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
}

if (typeof module !== 'undefined') module.exports = ValidateFieldsForm;
if (typeof window !== 'undefined') window.ValidateFieldsForm = ValidateFieldsForm;
