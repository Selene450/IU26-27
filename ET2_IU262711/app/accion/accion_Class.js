/**
 * Gestión de la entidad `accion`: formularios ADD, EDIT, SEARCH, DELETE y SHOWCURRENT, con sus validaciones.
 * @extends AbstractEntidad
 */
class accion extends AbstractEntidad {
    /**
     * Crea la gestión de la entidad `accion`. Si `esTest` es distinto de `'test'`, monta también la interfaz.
     * @param {string|null} [esTest=null] `'test'` para instanciar sin montar la interfaz
     */
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.instalarLimpiezaMensajesError();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'accion';
        this.columnasamostrar = ['id_accion', 'nombre_accion', 'descrip_accion'];
        this.mostrarespecial = [];
        this.claves = ['id_accion'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('add_search_columns').style.display = 'block';
            this.dom.mostrarControlesEntidad();
            document.getElementById('text_title_page').className = 'text_titulo_page_accion';
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    /**
     * Envuelve `dom.mostrar_error_campo` para quitar la clase de error del campo antes de mostrar uno nuevo.
     * @returns {void}
     */
    instalarLimpiezaMensajesError() {
        const mostrarError = this.dom.mostrar_error_campo.bind(this.dom);
        this.dom.mostrar_error_campo = (id, codigoError) => {
            document.getElementById('error_' + id)?.removeAttribute('class');
            mostrarError(id, codigoError);
        };
    }

    /**
     * Devuelve el HTML de los campos del formulario de la entidad.
     * @param {boolean} [incluirId=true] Incluir el campo id en el formulario
     * @returns {string}
     */
    manual_form_creation(incluirId = true) {
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                ${incluirId ? `
                <label class="label_id_accion" for="id_accion">ID de acción</label>
                <input type="text" id="id_accion" name="id_accion">
                <span id="span_error_id_accion"><a id="error_id_accion"></a></span>
                <br>
                ` : ''}

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
    /**
     * Valida el campo `id_accion` en la acción `ADD`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
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

    /**
     * Valida el campo `id_accion` en la acción `EDIT`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }

    /**
     * Valida el campo `id_accion` en la acción `SEARCH`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    SEARCH_id_accion_validation() {
        if (!this.validations.max_size('id_accion', 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_KO');
            return 'id_accion_max_size_KO';
        }
        if (document.getElementById('id_accion').value.trim() !== '' && !this.validations.format('id_accion', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_KO');
            return 'id_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE NOMBRE_ACCION
    // ==========================================
    /**
     * Valida el campo `nombre_accion` en la acción `ADD`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
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

    /**
     * Valida el campo `nombre_accion` en la acción `EDIT`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    EDIT_nombre_accion_validation() {
        return this.ADD_nombre_accion_validation();
    }

    /**
     * Valida el campo `nombre_accion` en la acción `SEARCH`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    SEARCH_nombre_accion_validation() {
        if (!this.validations.max_size('nombre_accion', 48)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_max_size_KO');
            return 'nombre_accion_max_size_KO';
        }
        if (document.getElementById('nombre_accion').value.trim() !== '' && !this.validations.format('nombre_accion', '^[A-Za-zñÑ]+$')) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_format_KO');
            return 'nombre_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre_accion');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE DESCRIP_ACCION
    // ==========================================
    /**
     * Valida el campo `descrip_accion` en la acción `ADD`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    ADD_descrip_accion_validation() {
        const descripcion = document.getElementById('descrip_accion').value;
        if (descripcion.length < 5) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_min_size_KO');
            return 'descrip_accion_min_size_KO';
        }
        if (descripcion.length > 200) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_KO');
            return 'descrip_accion_max_size_KO';
        }
        if (!this.validations.format('descrip_accion', '^[A-Za-záéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_KO');
            return 'descrip_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('descrip_accion');
        return true;
    }

    /**
     * Valida el campo `descrip_accion` en la acción `EDIT`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    EDIT_descrip_accion_validation() {
        return this.ADD_descrip_accion_validation();
    }

    /**
     * Valida el campo `descrip_accion` en la acción `SEARCH`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    SEARCH_descrip_accion_validation() {
        const descripcion = document.getElementById('descrip_accion').value;
        if (descripcion.length > 200) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_KO');
            return 'descrip_accion_max_size_KO';
        }
        if (document.getElementById('descrip_accion').value.trim() !== '' && !this.validations.format('descrip_accion', '^[A-Za-záéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_KO');
            return 'descrip_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('descrip_accion');
        return true;
    }

    // ==========================================
    // MÉTODOS DE SUBMIT
    // ==========================================
    /**
     * Comprueba todos los campos de la acción `ADD` antes de enviarla al back.
     * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
     */
    ADD_submit_accion() {
        var set_result = {};
        set_result.nombre_accion = this.ADD_nombre_accion_validation();
        set_result.descrip_accion = this.ADD_descrip_accion_validation();

        let result = (
            (set_result.nombre_accion) &
            (set_result.descrip_accion)
        );
        return Boolean(result) === true ? true : set_result;
    }

    /**
     * Comprueba todos los campos de la acción `EDIT` antes de enviarla al back.
     * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
     */
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

    /**
     * Comprueba todos los campos de la acción `SEARCH` antes de enviarla al back.
     * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
     */
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

    /**
     * Consulta la entidad en el back y muestra las tuplas que cumplen el filtro.
     * @returns {Promise<void>}
     */
    async SEARCH() {
        const respuesta = await this.access_functions.peticionBackGeneral('', this.nombreentidad, 'SEARCH');
        let registros;
        if (respuesta.code === 'RECORDSET_VACIO') {
            registros = [];
        } else if (respuesta.code === 'RECORDSET_DATOS' && Array.isArray(respuesta.resource)) {
            registros = respuesta.resource;
        } else {
            throw new Error(respuesta.code || 'text_error_buscar');
        }

        const formulario = document.getElementById('form_iu');
        const filtros = formulario
            ? Array.from(formulario.elements)
                .filter(campo => campo.name && campo.value.trim() !== '')
                .map(campo => [campo.name, campo.value.trim().toLocaleLowerCase()])
            : [];
        const resultados = registros.filter(registro => filtros.every(([campo, consulta]) => {
            const valor = registro[campo];
            const valores = valor && typeof valor === 'object' ? Object.values(valor) : [valor];
            return valores.some(elemento =>
                String(elemento ?? '').toLocaleLowerCase().includes(consulta)
            );
        }));

        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.hide_element('Div_IU_form');
        if (resultados.length > 0) {
            this.datos = resultados;
            this.atributos = Object.keys(resultados[0]);
            this.dom.show_element('IU_manage_entity');
            this.crearTablaDatos(this.datos, this.mostrarespecial);
        } else {
            document.getElementById('IU_manage_table').style.display = 'block';
            document.getElementById('IU_manage_table').innerHTML = window.traduccion.RECORDSET_VACIO;
            document.getElementById('IU_manage_table').className = 'RECORDSET_VACIO';
        }
        setLang();
    }

    // ==========================================
    // FORMULARIOS DE ACCIÓN ESPECÍFICOS
    // ==========================================
    /**
     * Prepara el formulario modal de la acción `EDIT` sobre la fila indicada.
     * @param {Object} fila Tupla de la fila pulsada
     * @returns {void}
     */
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
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Prepara el formulario modal de la acción `DELETE` sobre la fila indicada.
     * @param {Object} fila Tupla de la fila pulsada
     * @returns {void}
     */
    createForm_DELETE(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_DELETE');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        this.dom.assign_property_value('form_iu', 'onsubmit', 'entidad.DELETE(); return false;');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Prepara el formulario modal de la acción `SHOWCURRENT` sobre la fila indicada.
     * @param {Object} fila Tupla de la fila pulsada
     * @returns {void}
     */
    createForm_SHOWCURRENT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_SHOWCURRENT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Prepara el formulario modal de la acción `ADD`.
     * @returns {void}
     */
    createForm_ADD() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_ADD');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation(false);
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.ADD_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Prepara el formulario modal de la acción `SEARCH`.
     * @returns {void}
     */
    createForm_SEARCH() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_accion_SEARCH');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.SEARCH_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Devuelve el valor a mostrar en la tabla para una columna de `mostrarespecial`, en lugar del valor real de la tupla.
     * @param {string} columna Nombre de la columna
     * @param {*} valor Valor real de la tupla
     * @returns {*}
     */
    cambiarmostrarespecial(columna, valor) {
        return valor;
    }
}