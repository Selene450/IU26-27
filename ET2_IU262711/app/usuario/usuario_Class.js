class usuario extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'usuario';
        this.columnasamostrar = ['dni', 'usuario', 'contrasena', 'id_rol'];
        this.mostrarespecial = [];
        this.claves = ['dni'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_usuario');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation() {
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_dni" for="dni">DNI</label>
                <input type="text" id="dni" name="dni">
                <span id="span_error_dni"><a id="error_dni"></a></span>
                <br>

                <label class="label_usuario" for="usuario">Usuario</label>
                <input type="text" id="usuario" name="usuario">
                <span id="span_error_usuario"><a id="error_usuario"></a></span>
                <br>

                <label class="label_contrasena" for="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena">
                <span id="span_error_contrasena"><a id="error_contrasena"></a></span>
                <br>

                <label class="label_id_rol" for="id_rol">ID de rol</label>
                <input type="text" id="id_rol" name="id_rol">
                <span id="span_error_id_rol"><a id="error_id_rol"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

    // ==========================================
    // VALIDACIONES DE DNI
    // ==========================================
    ADD_dni_validation() {
        if (!this.validations.min_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_min_size_KO');
            return 'dni_min_size_KO';
        }
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');
            return 'dni_max_size_KO';
        }
        if (!this.validations.format('dni', '^[0-9]{8}[A-Z]$')) {
            this.dom.mostrar_error_campo('dni', 'dni_format_KO');
            return 'dni_format_KO';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }

    SEARCH_dni_validation() {
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');
            return 'dni_max_size_KO';
        }
        if (document.getElementById('dni').value !== '' && !this.validations.format('dni', '^[0-9]{8}[A-Z]$')) {
            this.dom.mostrar_error_campo('dni', 'dni_format_KO');
            return 'dni_format_KO';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE USUARIO
    // ==========================================
    ADD_usuario_validation() {
        if (!this.validations.min_size('usuario', 5)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_min_size_KO');
            return 'usuario_min_size_KO';
        }
        if (!this.validations.max_size('usuario', 45)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_max_size_KO');
            return 'usuario_max_size_KO';
        }
        if (!this.validations.format('usuario', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('usuario', 'usuario_format_KO');
            return 'usuario_format_KO';
        }
        this.dom.mostrar_exito_campo('usuario');
        return true;
    }

    EDIT_usuario_validation() {
        return this.ADD_usuario_validation();
    }

    SEARCH_usuario_validation() {
        if (!this.validations.max_size('usuario', 45)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_max_size_KO');
            return 'usuario_max_size_KO';
        }
        if (document.getElementById('usuario').value !== '' && !this.validations.format('usuario', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('usuario', 'usuario_format_KO');
            return 'usuario_format_KO';
        }
        this.dom.mostrar_exito_campo('usuario');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE CONTRASENA
    // ==========================================
    ADD_contrasena_validation() {
        if (!this.validations.min_size('contrasena', 8)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_min_size_KO');
            return 'contrasena_min_size_KO';
        }
        if (!this.validations.max_size('contrasena', 45)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_KO');
            return 'contrasena_max_size_KO';
        }
        if (!this.validations.format('contrasena', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_KO');
            return 'contrasena_format_KO';
        }
        this.dom.mostrar_exito_campo('contrasena');
        return true;
    }

    EDIT_contrasena_validation() {
        return this.ADD_contrasena_validation();
    }

    SEARCH_contrasena_validation() {
        if (!this.validations.max_size('contrasena', 45)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_KO');
            return 'contrasena_max_size_KO';
        }
        if (document.getElementById('contrasena').value !== '' && !this.validations.format('contrasena', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_KO');
            return 'contrasena_format_KO';
        }
        this.dom.mostrar_exito_campo('contrasena');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE ID_ROL
    // ==========================================
    ADD_id_rol_validation() {
        if (!this.validations.min_size('id_rol', 1)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_min_size_KO');
            return 'id_rol_min_size_KO';
        }
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_KO');
            return 'id_rol_max_size_KO';
        }
        if (!this.validations.format('id_rol', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_KO');
            return 'id_rol_format_KO';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }

    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }

    SEARCH_id_rol_validation() {
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_KO');
            return 'id_rol_max_size_KO';
        }
        if (document.getElementById('id_rol').value !== '' && !this.validations.format('id_rol', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_KO');
            return 'id_rol_format_KO';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }

    // ==========================================
    // MÉTODOS DE SUBMIT
    // ==========================================
    ADD_submit_usuario() {
        var set_result = {};
        set_result.dni = this.ADD_dni_validation();
        set_result.usuario = this.ADD_usuario_validation();
        set_result.contrasena = this.ADD_contrasena_validation();
        set_result.id_rol = this.ADD_id_rol_validation();

        let result = (
            (set_result.dni) &
            (set_result.usuario) &
            (set_result.contrasena) &
            (set_result.id_rol)
        );
        return Boolean(result) === true ? true : set_result;
    }

    EDIT_submit_usuario() {
        var set_result = {};
        set_result.usuario = this.EDIT_usuario_validation();
        set_result.contrasena = this.EDIT_contrasena_validation();
        set_result.id_rol = this.EDIT_id_rol_validation();

        let result = (
            (set_result.usuario) &
            (set_result.contrasena) &
            (set_result.id_rol)
        );
        return Boolean(result) === true ? true : set_result;
    }

    SEARCH_submit_usuario() {
        var set_result = {};
        set_result.dni = this.SEARCH_dni_validation();
        set_result.usuario = this.SEARCH_usuario_validation();
        set_result.contrasena = this.SEARCH_contrasena_validation();
        set_result.id_rol = this.SEARCH_id_rol_validation();

        let result = (
            (set_result.dni) &
            (set_result.usuario) &
            (set_result.contrasena) &
            (set_result.id_rol)
        );
        return Boolean(result) === true ? true : set_result;
    }

    // ==========================================
    // FORMULARIOS DE ACCIÓN ESPECÍFICOS
    // ==========================================
    createForm_EDIT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_EDIT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.EDIT_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('dni', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_DELETE');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_SHOWCURRENT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }

    createForm_ADD() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_ADD');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.ADD_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_SEARCH');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.SEARCH_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }

    cambiarmostrarespecial(columna, valor) {
        return valor;
    }
}