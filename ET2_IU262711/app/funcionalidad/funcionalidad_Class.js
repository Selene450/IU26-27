class funcionalidad extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.instalarLimpiezaMensajesError();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'funcionalidad';
        this.columnasamostrar = ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'];
        this.mostrarespecial = [];
        this.claves = ['id_funcionalidad'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('add_search_columns').style.display = 'block';
            this.dom.mostrarControlesEntidad();
            document.getElementById('text_title_page').className = 'text_titulo_page_funcionalidad';
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    instalarLimpiezaMensajesError() {
        const mostrarError = this.dom.mostrar_error_campo.bind(this.dom);
        this.dom.mostrar_error_campo = (id, codigoError) => {
            document.getElementById('error_' + id)?.removeAttribute('class');
            mostrarError(id, codigoError);
        };
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
        if (document.getElementById('id_funcionalidad').value.trim() !== '' && !this.validations.format('id_funcionalidad', '^[0-9]+$')) {
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
        if (document.getElementById('nombre_funcionalidad').value.trim() !== '' && !this.validations.format('nombre_funcionalidad', '^[A-Za-zñÑ]+$')) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_format_KO');
            return 'nombre_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre_funcionalidad');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE DESCRIP_FUNCIONALIDAD
    // ==========================================
    ADD_descrip_funcionalidad_validation() {
        const descripcion = document.getElementById('descrip_funcionalidad').value;
        if (descripcion.length < 5) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_min_size_KO');
            return 'descrip_funcionalidad_min_size_KO';
        }
        if (descripcion.length > 200) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_max_size_KO');
            return 'descrip_funcionalidad_max_size_KO';
        }
        if (!this.validations.format('descrip_funcionalidad', '^[A-Za-záéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_format_KO');
            return 'descrip_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('descrip_funcionalidad');
        return true;
    }

    EDIT_descrip_funcionalidad_validation() {
        return this.ADD_descrip_funcionalidad_validation();
    }

    SEARCH_descrip_funcionalidad_validation() {
        const descripcion = document.getElementById('descrip_funcionalidad').value;
        if (descripcion.length > 200) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_max_size_KO');
            return 'descrip_funcionalidad_max_size_KO';
        }
        if (document.getElementById('descrip_funcionalidad').value.trim() !== '' &&
            !this.validations.format('descrip_funcionalidad', '^[A-Za-záéíóúÁÉÍÓÚñÑ.,\\-\\s]+$')) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_format_KO');
            return 'descrip_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('descrip_funcionalidad');
        return true;
    }

    ADD_submit_funcionalidad() {
        const resultado = {
            id_funcionalidad: this.ADD_id_funcionalidad_validation(),
            nombre_funcionalidad: this.ADD_nombre_funcionalidad_validation(),
            descrip_funcionalidad: this.ADD_descrip_funcionalidad_validation()
        };
        return Object.values(resultado).every(valor => valor === true) ? true : resultado;
    }

    EDIT_submit_funcionalidad() {
        const resultado = {
            nombre_funcionalidad: this.EDIT_nombre_funcionalidad_validation(),
            descrip_funcionalidad: this.EDIT_descrip_funcionalidad_validation()
        };
        return Object.values(resultado).every(valor => valor === true) ? true : resultado;
    }

    SEARCH_submit_funcionalidad() {
        const resultado = {
            id_funcionalidad: this.SEARCH_id_funcionalidad_validation(),
            nombre_funcionalidad: this.SEARCH_nombre_funcionalidad_validation(),
            descrip_funcionalidad: this.SEARCH_descrip_funcionalidad_validation()
        };
        return Object.values(resultado).every(valor => valor === true) ? true : resultado;
    }

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

    createForm_ADD() {
        this.dom.assign_property_value(
            'class_contenido_titulo_form',
            'class',
            'text_contenido_titulo_form_funcionalidad_ADD'
        );
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.assign_property_value(
            'form_iu',
            'onsubmit',
            'return entidad.dom.validarsubmit(entidad.ADD_submit_funcionalidad())'
        );
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    createForm_SEARCH() {
        this.dom.assign_property_value(
            'class_contenido_titulo_form',
            'class',
            'text_contenido_titulo_form_funcionalidad_SEARCH'
        );
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.assign_property_value(
            'form_iu',
            'onsubmit',
            'return entidad.dom.validarsubmit(entidad.SEARCH_submit_funcionalidad())'
        );
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    createForm_EDIT(fila) {
        this.dom.assign_property_value(
            'class_contenido_titulo_form',
            'class',
            'text_contenido_titulo_form_funcionalidad_EDIT'
        );
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.assign_property_value(
            'form_iu',
            'onsubmit',
            'return entidad.dom.validarsubmit(entidad.EDIT_submit_funcionalidad())'
        );
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('id_funcionalidad', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    createForm_DELETE(fila) {
        this.dom.assign_property_value(
            'class_contenido_titulo_form',
            'class',
            'text_contenido_titulo_form_funcionalidad_DELETE'
        );
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        this.dom.assign_property_value('form_iu', 'onsubmit', 'entidad.DELETE(); return false;');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    createForm_SHOWCURRENT(fila) {
        this.dom.assign_property_value(
            'class_contenido_titulo_form',
            'class',
            'text_contenido_titulo_form_funcionalidad_SHOWCURRENT'
        );
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    cambiarmostrarespecial(columna, valor) {
        return valor;
    }
}
