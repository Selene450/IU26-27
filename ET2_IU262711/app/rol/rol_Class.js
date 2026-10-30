class rol extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'rol';
        this.columnasamostrar = ['id_rol', 'rol_name', 'rol_description'];
        this.mostrarespecial = [];
        this.claves = ['id_rol'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_rol');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation() {
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_id_rol" for="id_rol">ID de rol</label>
                <input type="text" id="id_rol" name="id_rol">
                <span id="span_error_id_rol"><a id="error_id_rol"></a></span>
                <br>

                <label class="label_rol_name" for="rol_name">Nombre del rol</label>
                <input type="text" id="rol_name" name="rol_name">
                <span id="span_error_rol_name"><a id="error_rol_name"></a></span>
                <br>

                <label class="label_rol_description" for="rol_description">Descripción del rol</label>
                <textarea rows="5" cols="33" id="rol_description" name="rol_description"></textarea>
                <span id="span_error_rol_description"><a id="error_rol_description"></a></span>
                <br>
            </form>`;
        return forms_content;
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
    // VALIDACIONES DE ROL_NAME
    // ==========================================
    ADD_rol_name_validation() {
        if (!this.validations.min_size('rol_name', 5)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_min_size_KO');
            return 'rol_name_min_size_KO';
        }
        if (!this.validations.max_size('rol_name', 48)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_KO');
            return 'rol_name_max_size_KO';
        }
        if (!this.validations.format('rol_name', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_format_KO');
            return 'rol_name_format_KO';
        }
        this.dom.mostrar_exito_campo('rol_name');
        return true;
    }

    EDIT_rol_name_validation() {
        return this.ADD_rol_name_validation();
    }

    SEARCH_rol_name_validation() {
        if (!this.validations.max_size('rol_name', 48)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_KO');
            return 'rol_name_max_size_KO';
        }
        if (document.getElementById('rol_name').value !== '' && !this.validations.format('rol_name', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_format_KO');
            return 'rol_name_format_KO';
        }
        this.dom.mostrar_exito_campo('rol_name');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE ROL_DESCRIPTION
    // ==========================================
    ADD_rol_description_validation() {
        if (!this.validations.min_size('rol_description', 5)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_min_size_KO');
            return 'rol_description_min_size_KO';
        }
        if (!this.validations.max_size('rol_description', 200)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_KO');
            return 'rol_description_max_size_KO';
        }
        if (!this.validations.format('rol_description', '^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_format_KO');
            return 'rol_description_format_KO';
        }
        this.dom.mostrar_exito_campo('rol_description');
        return true;
    }

    EDIT_rol_description_validation() {
        return this.ADD_rol_description_validation();
    }

    SEARCH_rol_description_validation() {
        if (!this.validations.max_size('rol_description', 200)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_KO');
            return 'rol_description_max_size_KO';
        }
        if (document.getElementById('rol_description').value !== '' && !this.validations.format('rol_description', '^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_format_KO');
            return 'rol_description_format_KO';
        }
        this.dom.mostrar_exito_campo('rol_description');
        return true;
    }

    // ==========================================
    // MÉTODOS DE SUBMIT
    // ==========================================
    ADD_submit_rol() {
        var set_result = {};
        set_result.id_rol = this.ADD_id_rol_validation();
        set_result.rol_name = this.ADD_rol_name_validation();
        set_result.rol_description = this.ADD_rol_description_validation();

        let result = (
            (set_result.id_rol) &
            (set_result.rol_name) &
            (set_result.rol_description)
        );
        return Boolean(result) === true ? true : set_result;
    }

    EDIT_submit_rol() {
        var set_result = {};
        set_result.rol_name = this.EDIT_rol_name_validation();
        set_result.rol_description = this.EDIT_rol_description_validation();

        let result = (
            (set_result.rol_name) &
            (set_result.rol_description)
        );
        return Boolean(result) === true ? true : set_result;
    }

    SEARCH_submit_rol() {
        var set_result = {};
        set_result.id_rol = this.SEARCH_id_rol_validation();
        set_result.rol_name = this.SEARCH_rol_name_validation();
        set_result.rol_description = this.SEARCH_rol_description_validation();

        let result = (
            (set_result.id_rol) &
            (set_result.rol_name) &
            (set_result.rol_description)
        );
        return Boolean(result) === true ? true : set_result;
    }

    // ==========================================
    // FORMULARIOS DE ACCIÓN ESPECÍFICOS
    // ==========================================
    createForm_EDIT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_EDIT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.EDIT_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('id_rol', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_DELETE');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_SHOWCURRENT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }

    createForm_ADD() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_ADD');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.ADD_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_SEARCH');
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