/**
 * Gestión de la entidad `rol`: formularios ADD, EDIT, SEARCH, DELETE y SHOWCURRENT, con sus validaciones.
 * @extends AbstractEntidad
 */
class rol extends AbstractEntidad {
    /**
     * Crea la gestión de la entidad `rol`. Si `esTest` es distinto de `'test'`, monta también la interfaz.
     * @param {string|null} [esTest=null] `'test'` para instanciar sin montar la interfaz
     */
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.instalarLimpiezaMensajesError();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'rol';
        this.columnasamostrar = ['id_rol', 'rol_name', 'rol_description'];
        this.mostrarespecial = [];
        this.claves = ['id_rol'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('add_search_columns').style.display = 'block';
            this.dom.mostrarControlesEntidad();
            document.getElementById('text_title_page').className = 'text_titulo_page_rol';
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
                <label class="label_id_rol" for="id_rol">ID de rol</label>
                <input type="text" id="id_rol" name="id_rol">
                <span id="span_error_id_rol"><a id="error_id_rol"></a></span>
                <br>
                ` : ''}

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
    /**
     * Valida el campo `id_rol` en la acción `ADD`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
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

    /**
     * Valida el campo `id_rol` en la acción `EDIT`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }

    /**
     * Valida el campo `id_rol` en la acción `SEARCH`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    SEARCH_id_rol_validation() {
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_KO');
            return 'id_rol_max_size_KO';
        }
        if (document.getElementById('id_rol').value.trim() !== '' && !this.validations.format('id_rol', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_KO');
            return 'id_rol_format_KO';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE ROL_NAME
    // ==========================================
    /**
     * Valida el campo `rol_name` en la acción `ADD`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
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

    /**
     * Valida el campo `rol_name` en la acción `EDIT`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    EDIT_rol_name_validation() {
        return this.ADD_rol_name_validation();
    }

    /**
     * Valida el campo `rol_name` en la acción `SEARCH`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    SEARCH_rol_name_validation() {
        if (!this.validations.max_size('rol_name', 48)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_KO');
            return 'rol_name_max_size_KO';
        }
        if (document.getElementById('rol_name').value.trim() !== '' && !this.validations.format('rol_name', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_format_KO');
            return 'rol_name_format_KO';
        }
        this.dom.mostrar_exito_campo('rol_name');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE ROL_DESCRIPTION
    // ==========================================
    /**
     * Valida el campo `rol_description` en la acción `ADD`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    ADD_rol_description_validation() {
        const descripcion = document.getElementById('rol_description').value;
        if (descripcion.length < 5) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_min_size_KO');
            return 'rol_description_min_size_KO';
        }
        if (descripcion.length > 200) {
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

    /**
     * Valida el campo `rol_description` en la acción `EDIT`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    EDIT_rol_description_validation() {
        return this.ADD_rol_description_validation();
    }

    /**
     * Valida el campo `rol_description` en la acción `SEARCH`.
     * @returns {true|string} `true` si es correcto; código de error si no.
     */
    SEARCH_rol_description_validation() {
        const descripcion = document.getElementById('rol_description').value;
        if (descripcion.length > 200) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_KO');
            return 'rol_description_max_size_KO';
        }
        if (document.getElementById('rol_description').value.trim() !== '' && !this.validations.format('rol_description', '^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_format_KO');
            return 'rol_description_format_KO';
        }
        this.dom.mostrar_exito_campo('rol_description');
        return true;
    }

    // ==========================================
    // MÉTODOS DE SUBMIT
    // ==========================================
    /**
     * Comprueba todos los campos de la acción `ADD` antes de enviarla al back.
     * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
     */
    ADD_submit_rol() {
        var set_result = {};
        set_result.rol_name = this.ADD_rol_name_validation();
        set_result.rol_description = this.ADD_rol_description_validation();

        let result = (
            (set_result.rol_name) &
            (set_result.rol_description)
        );
        return Boolean(result) === true ? true : set_result;
    }

    /**
     * Comprueba todos los campos de la acción `EDIT` antes de enviarla al back.
     * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
     */
    EDIT_submit_rol() {
        var set_result = {};
        set_result.id_rol = this.EDIT_id_rol_validation();
        set_result.rol_name = this.EDIT_rol_name_validation();
        set_result.rol_description = this.EDIT_rol_description_validation();

        let result = (
            (set_result.id_rol) &
            (set_result.rol_name) &
            (set_result.rol_description)
        );
        return Boolean(result) === true ? true : set_result;
    }

    /**
     * Comprueba todos los campos de la acción `SEARCH` antes de enviarla al back.
     * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
     */
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
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_EDIT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.EDIT_submit_' + this.nombreentidad + '())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('id_rol', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Envía la petición DELETE al back y actualiza la tabla si la respuesta es correcta.
     * @returns {Promise<void>}
     */
    async DELETE() {
        const respuesta = await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'DELETE');
        if (respuesta.ok) {
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.dom.hide_element('Div_IU_form');
            this.SEARCH();
        } else {
            this.dom.abrirModalError(respuesta.code);
            document.getElementById('error_action_msg').textContent = respuesta.code;
        }
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Prepara el formulario modal de la acción `DELETE` sobre la fila indicada.
     * @param {Object} fila Tupla de la fila pulsada
     * @returns {void}
     */
    createForm_DELETE(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_DELETE');
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
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_SHOWCURRENT');
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
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_ADD');
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
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_rol_SEARCH');
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