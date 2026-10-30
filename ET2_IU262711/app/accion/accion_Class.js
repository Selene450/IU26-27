class accion extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'accion';
        this.columnasamostrar = ['id_accion', 'nombre_accion', 'descrip_accion'];
        this.mostrarespecial = [];
        this.claves = ['id_accion'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_accion');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation() {
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_id_accion" for="id_accion">ID de acción</label>
                <input type="text" id="id_accion" name="id_accion">
                <span id="span_error_id_accion"><a id="error_id_accion"></a></span>
                <br>

                <label class="label_nombre_accion" for="nombre_accion">Nombre de acción</label>
                <input type="text" id="nombre_accion" name="nombre_accion">
                <span id="span_error_nombre_accion"><a id="error_nombre_accion"></a></span>
                <br>

                <label class="label_descrip_accion" for="descrip_accion">Descripción de acción</label>
                <textarea rows="5" cols="33" id="descrip_accion" name="descrip_accion"></textarea>
                <span id="span_error_descrip_accion"><a id="error_descrip_accion"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

    // ==========================================
    // VALIDACIONES DE ID_ACCION
    // ==========================================
    ADD_id_accion_validation() {
        if (!this.validations.min_size('id_accion', 1)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_min_size_KO');
            return 'id_accion_min_size_KO';
        }
        if (!this.validations.max_size('id_accion', 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_KO');
            return 'id_accion_max_size_KO';
        }
        if (!this.validations.format('id_accion', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_KO');
            return 'id_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }

    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }

    SEARCH_id_accion_validation() {
        if (!this.validations.max_size('id_accion', 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_KO');
            return 'id_accion_max_size_KO';
        }
        if (document.getElementById('id_accion').value !== '' && !this.validations.format('id_accion', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_KO');
            return 'id_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE NOMBRE_ACCION
    // ==========================================
    ADD_nombre_accion_validation() {
        if (!this.validations.min_size('nombre_accion', 5)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_min_size_KO');
            return 'nombre_accion_min_size_KO';
        }
        if (!this.validations.max_size('nombre_accion', 48)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_max_size_KO');
            return 'nombre_accion_max_size_KO';
        }
        if (!this.validations.format('nombre_accion', '^[A-Za-zñÑ]+$')) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_format_KO');
            return 'nombre_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre_accion');
        return true;
    }

    EDIT_nombre_accion_validation() {
        return this.ADD_nombre_accion_validation();
    }

    SEARCH_nombre_accion_validation() {
        if (!this.validations.max_size('nombre_accion', 48)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_max_size_KO');
            return 'nombre_accion_max_size_KO';
        }
        if (document.getElementById('nombre_accion').value !== '' && !this.validations.format('nombre_accion', '^[A-Za-zñÑ]+$')) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_format_KO');
            return 'nombre_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre_accion');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE DESCRIP_ACCION
    // ==========================================
    ADD_descrip_accion_validation() {
        if (!this.validations.min_size('descrip_accion', 5)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_min_size_KO');
            return 'descrip_accion_min_size_KO';
        }
        if (!this.validations.max_size('descrip_accion', 200)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_KO');
            return 'descrip_accion_max_size_KO';
        }
        if (!this.validations.format('descrip_accion', '^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_KO');
            return 'descrip_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('descrip_accion');
        return true;
    }

    EDIT_descrip_accion_validation() {
        return this.ADD_descrip_accion_validation();
    }

    SEARCH_descrip_accion_validation() {
        if (!this.validations.max_size('descrip_accion', 200)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_KO');
            return 'descrip_accion_max_size_KO';
        }
        if (document.getElementById('descrip_accion').value !== '' && !this.validations.format('descrip_accion', '^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_KO');
            return 'descrip_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('descrip_accion');
        return true;
    }

    // ==========================================
    // MÉTODOS DE SUBMIT
    // ==========================================
    ADD_submit_accion() {
        var set_result = {};
        set_result.id_accion = this.ADD_id_accion_validation();
        set_result.nombre_accion = this.ADD_nombre_accion_validation();
        set_result.descrip_accion = this.ADD_descrip_accion_validation();

        let result = (
            (set_result.id_accion) &
            (set_result.nombre_accion) &
            (set_result.descrip_accion)
        );
        return Boolean(result) === true ? true : set_result;
    }

    EDIT_submit_accion() {
        var set_result = {};
        set_result.nombre_accion = this.EDIT_nombre_accion_validation();
        set_result.descrip_accion = this.EDIT_descrip_accion_validation();

        let result = (
            (set_result.nombre_accion) &
            (set_result.descrip_accion)
        );
        return Boolean(result) === true ? true : set_result;
    }

    SEARCH_submit_accion() {
        var set_result = {};
        set_result.id_accion = this.SEARCH_id_accion_validation();
        set_result.nombre_accion = this.SEARCH_nombre_accion_validation();
        set_result.descrip_accion = this.SEARCH_descrip_accion_validation();

        let result = (
            (set_result.id_accion) &
            (set_result.nombre_accion) &
            (set_result.descrip_accion)
        );
        return Boolean(result) === true ? true : set_result;
    }

    // ==========================================
    // FORMULARIOS DE ACCIÓN ESPECÍFICOS
    // ==========================================
    createForm_EDIT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_EDIT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.EDIT_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('id_accion', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_DELETE');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_SHOWCURRENT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }

    createForm_ADD() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_ADD');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.ADD_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_SEARCH');
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