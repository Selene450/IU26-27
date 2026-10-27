class funcionalidad extends AbstractEntidad{
    constructor(esTest = null){
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'funcionalidad';
        this.columnasamostrar = ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'];
        this.mostrarespecial = [];
        this.claves = ['id_funcionalidad'];
        this.reglasValidacion = {
            id_funcionalidad: {min: 1, max: 11, formato: '^\\d+$'},
            nombre_funcionalidad: {min: 5, max: 48, formato: '^[A-Za-zñÑ]*$'},
            descrip_funcionalidad: {min: 5, max: 200, formato: '^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ .,;:!?¡¿()\\-]*$'}
        };

        if (esTest !== 'test'){
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_funcionalidad');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation(){
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

    manual_forma_creation(){return this.manual_form_creation();}
    ADD_id_funcionalidad_validation(){return this.validarCampo('id_funcionalidad', 'ADD');}
    EDIT_id_funcionalidad_validation(){return this.validarCampo('id_funcionalidad', 'EDIT');}
    SEARCH_id_funcionalidad_validation(){return this.validarCampo('id_funcionalidad', 'SEARCH');}
    ADD_nombre_funcionalidad_validation(){return this.validarCampo('nombre_funcionalidad', 'ADD');}
    EDIT_nombre_funcionalidad_validation(){return this.validarCampo('nombre_funcionalidad', 'EDIT');}
    SEARCH_nombre_funcionalidad_validation(){return this.validarCampo('nombre_funcionalidad', 'SEARCH');}
    ADD_descrip_funcionalidad_validation(){return this.validarCampo('descrip_funcionalidad', 'ADD');}
    EDIT_descrip_funcionalidad_validation(){return this.validarCampo('descrip_funcionalidad', 'EDIT');}
    SEARCH_descrip_funcionalidad_validation(){return this.validarCampo('descrip_funcionalidad', 'SEARCH');}

    validarCampo(campo, accion){
        const valor = document.getElementById(campo).value;
        const reglas = this.reglasValidacion[campo];
        let error = null;
        if (accion === 'SEARCH' && valor.trim() === ''){
            this.dom.mostrar_exito_campo(campo);
            return true;
        }
        const validacionMinimo = this.validations.min_size(campo, reglas.min);
        const cumpleMinimo = validacionMinimo === undefined ? valor.length >= reglas.min : validacionMinimo;
        const validacionMaximo = this.validations.max_size(campo, reglas.max);
        const cumpleMaximo = validacionMaximo === undefined ? valor.length <= reglas.max : validacionMaximo;
        if (accion !== 'SEARCH' && !cumpleMinimo && valor.length === 0) error = `${campo}_min_size_KO`;
        const formatoValido = this.validations.format(campo, reglas.formato);
        if (!error && !cumpleMaximo && formatoValido) error = `${campo}_max_size_KO`;
        else if (!error && !formatoValido) error = `${campo}_format_KO`;
        else if (!error && accion !== 'SEARCH' && !cumpleMinimo) error = `${campo}_min_size_KO`;
        if (error){
            this.dom.mostrar_error_campo(campo, error);
            return error;
        }
        this.dom.mostrar_exito_campo(campo);
        return true;
    }

    ADD_submit_funcionalidad(){return this.validarFormulario('ADD');}
    EDIT_submit_funcionalidad(){return this.validarFormulario('EDIT');}
    SEARCH_submit_funcionalidad(){return this.validarFormulario('SEARCH');}
    validarFormulario(accion){
        const resultado = {};
        for (const campo of this.columnasamostrar) resultado[campo] = this[`${accion}_${campo}_validation`]();
        return Object.values(resultado).every(valor => valor === true) ? true : resultado;
    }

    prepararFormulario(accion){
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', `text_contenido_titulo_form_${this.nombreentidad}_${accion}`);
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form');
    }
    createForm_ADD(){
        this.prepararFormulario('ADD');
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.ADD_submit_funcionalidad())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }
    createForm_EDIT(fila){
        this.prepararFormulario('EDIT');
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.EDIT_submit_funcionalidad())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('id_funcionalidad', 'readonly', 'true');
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.colocarboton('EDIT');
        setLang();
    }
    createForm_DELETE(fila){
        this.prepararFormulario('DELETE');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }
    createForm_SHOWCURRENT(fila){
        this.prepararFormulario('SHOWCURRENT');
        this.dom.rellenarvaloresform(fila);
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }
    createForm_SEARCH(){
        this.prepararFormulario('SEARCH');
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.SEARCH_submit_funcionalidad())');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }
}
