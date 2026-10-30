/* global ValidateFieldsForm */

class EntityForm {
    constructor(name, fields) {
        this.name = name;
        this.fields = fields;
        this.forms = new Map();
    }

    createFields(action) {
        const container = document.createElement('div');
        container.className = 'entity-fields';
        this.forms.clear();

        for (const [fieldName, definition] of Object.entries(this.fields)) {
            const form = new ValidateFieldsForm(definition, '', fieldName);
            this.forms.set(fieldName, form);
            const wrapper = document.createElement('div');
            wrapper.className = 'field';
            wrapper.innerHTML = form.createField();
            container.appendChild(wrapper);
        }

        container.dataset.action = action;
        return container;
    }

    validate(action) {
        const results = [];
        for (const form of this.forms.values()) {
            results.push(form.validateField(action));
        }
        return results;
    }

    getValues() {
        return Object.fromEntries(
            [...this.forms.entries()].map(([name, form]) => [name, form.getValue()])
        );
    }
}

const textField = (min, max, pattern) => ({
    html: { tag: 'input', type: 'text' },
    rules: {
        validations: {
            ADD: { min_size: min, max_size: max, exp_reg: pattern },
            EDIT: { min_size: min, max_size: max, exp_reg: pattern },
            SEARCH: { max_size: max, exp_reg: pattern }
        }
    }
});

const integerField = () => textField(1, 11, '^\\d+$');
const nameField = () => textField(5, 48, '^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$');
const descriptionField = () => ({
    html: { tag: 'textarea' },
    rules: {
        validations: {
            ADD: {
                min_size: 5,
                max_size: 200,
                exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;:/()¿?¡!º-]+$'
            },
            EDIT: {
                min_size: 5,
                max_size: 200,
                exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;:/()¿?¡!º-]+$'
            },
            SEARCH: {
                max_size: 200,
                exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 .,;:/()¿?¡!º-]+$'
            }
        }
    }
});

class Usuario extends EntityForm {
    constructor() {
        super('usuario', {
            dni: textField(9, 9, '^\\d{8}[A-HJ-NP-TV-Z]$'),
            usuario: textField(5, 45, '^[A-Za-z]+$'),
            contrasena: {
                ...textField(8, 45, '^[A-Za-z]+$'),
                html: { tag: 'input', type: 'password' }
            },
            id_rol: integerField()
        });
    }
}

class Rol extends EntityForm {
    constructor() {
        super('rol', {
            id_rol: integerField(),
            rol_name: nameField(),
            rol_description: descriptionField()
        });
    }
}

class Accion extends EntityForm {
    constructor() {
        super('accion', {
            id_accion: integerField(),
            nombre_accion: nameField(),
            descrip_accion: descriptionField()
        });
    }
}

class Funcionalidad extends EntityForm {
    constructor() {
        super('funcionalidad', {
            id_funcionalidad: integerField(),
            nombre_funcionalidad: nameField(),
            descrip_funcionalidad: descriptionField()
        });
    }
}

class FuncionalidadAccion extends EntityForm {
    constructor() {
        super('funcionalidad_accion', {
            id_funcionalidad: integerField(),
            id_accion: integerField()
        });
    }
}

class RolAccionFuncionalidad extends EntityForm {
    constructor() {
        super('rolaccionfuncionalidad', {
            id_rol: integerField(),
            id_accion: integerField(),
            id_funcionalidad: integerField()
        });
    }
}

const entityClasses = {
    usuario: Usuario,
    rol: Rol,
    accion: Accion,
    funcionalidad: Funcionalidad,
    funcionalidad_accion: FuncionalidadAccion,
    rolaccionfuncionalidad: RolAccionFuncionalidad
};

if (typeof window !== 'undefined') {
    window.entityClasses = entityClasses;
}
