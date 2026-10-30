class funcionalidad extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'funcionalidad';
        this.columnasamostrar = ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'];
        this.mostrarespecial = [];
        this.claves = ['id_funcionalidad'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_funcionalidad');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation() {
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_id_funcionalidad" for="id_funcionalidad">ID de funcionalidad</label>
                <input type="text" id="id_funcionalidad" name="id_funcionalidad">
                <span id="span_error_id_funcionalidad"><a id="error_id_funcionalidad"></a></span>
                <br>

                <label class="label_nombre_funcionalidad" for="nombre_funcionalidad">Nombre de funcionalidad</label>
                <input type="text" id="nombre_funcionalidad" name="nombre_funcionalidad">
                <span id="span_error_nombre_funcionalidad"><a id="error_nombre_funcionalidad"></a></span>
                <br>

                <label class="label_descrip_funcionalidad" for="descrip_funcionalidad">Descripción de funcionalidad</label>
                <textarea rows="5" cols="33" id="descrip_funcionalidad" name="descrip_funcionalidad"></textarea>
                <span id="span_error_descrip_funcionalidad"><a id="error_descrip_funcionalidad"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

    // ==========================================
    // VALIDACIONES DE ID_FUNCIONALIDAD
    // ==========================================
    ADD_id_funcionalidad_validation() {
        if (!this.validations.min_size('id_funcionalidad', 1)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_min_size_KO');
            return 'id_funcionalidad_min_size_KO';
        }
        if (!this.validations.max_size('id_funcionalidad', 11)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_KO');
            return 'id_funcionalidad_max_size_KO';
        }
        if (!this.validations.format('id_funcionalidad', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_KO');
            return 'id_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('id_funcionalidad');
        return true;
    }

    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }

    SEARCH_id_funcionalidad_validation() {
        if (!this.validations.max_size('id_funcionalidad', 11)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_KO');
            return 'id_funcionalidad_max_size_KO';
        }
        if (document.getElementById('id_funcionalidad').value !== '' && !this.validations.format('id_funcionalidad', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_KO');
            return 'id_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('id_funcionalidad');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE NOMBRE_FUNCIONALIDAD
    // ==========================================
    ADD_nombre_funcionalidad_validation() {
        if (!this.validations.min_size('nombre_funcionalidad', 5)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_min_size_KO');
            return 'nombre_funcionalidad_min_size_KO';
        }
        if (!this.validations.max_size('nombre_funcionalidad', 48)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_max_size_KO');
            return 'nombre_funcionalidad_max_size_KO';
        }
        if (!this.validations.format('nombre_funcionalidad', '^[A-Za-zñÑ]+$')) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_format_KO');
            return 'nombre_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre_funcionalidad');
        return true;
    }

    EDIT_nombre_funcionalidad_validation() {
        return this.ADD_nombre_funcionalidad_validation();
    }

    SEARCH_nombre_funcionalidad_validation() {
        if (!this.validations.max_size('nombre_funcionalidad', 48)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_max_size_KO');
            return 'nombre_funcionalidad_max_size_KO';
        }
        if (document.getElementById('nombre_funcionalidad').value !== '' && !this.validations.format('nombre_funcionalidad', '^[A-Za-zñÑ]+$')) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_format_KO');
            return 'nombre_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre_funcionalidad');
        return true;
    }
}
