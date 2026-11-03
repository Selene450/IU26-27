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
            document.getElementById('add_search_columns').style.display = 'block';
            document.getElementById('text_title_page').className = 'text_titulo_page_usuario';
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
                <select id="id_rol" name="id_rol"></select>
                <span id="span_error_id_rol"><a id="error_id_rol"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

    // ==========================================
    // VALIDACIONES DE DNI
    // ==========================================
    ADD_dni_validation() {
        if (!this.personalize_dni('dni')) {
            this.dom.mostrar_error_campo('dni', 'dni_personalized_validate_dni_KO');
            return 'dni_personalized_validate_dni_KO';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }

    personalize_dni(id) {
        const dni = document.getElementById(id).value;
        if (!/^[0-9]{8}[A-Z]$/.test(dni)) {
            return false;
        }
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        return letras[dni.slice(0, 8) % 23] === dni[8];
    }

    SEARCH_dni_validation() {
        const dni = document.getElementById('dni').value;
        if (dni.trim() === '') {
            this.dom.mostrar_exito_campo('dni');
            return true;
        }
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');
            return 'dni_max_size_KO';
        }
        if (!this.personalize_dni('dni')) {
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
        if (document.getElementById('usuario').value.trim() !== '' && !this.validations.format('usuario', '^[A-Za-z]+$')) {
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
        if (document.getElementById('contrasena').value.trim() !== '' && !this.validations.format('contrasena', '^[A-Za-z]+$')) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_KO');
            return 'contrasena_format_KO';
        }
        this.dom.mostrar_exito_campo('contrasena');
        return true;
    }

    // ==========================================
    // VALIDACIONES DE ID_ROL
    // ==========================================
    async cargarRoles(idRolSeleccionado = '') {
        const selectRol = document.getElementById('id_rol');
        try {
            const respuesta = await this.access_functions.peticionBackGeneral('', 'rol', 'SEARCH');
            let roles;
            if (respuesta.code === 'RECORDSET_VACIO') {
                roles = [];
            } else if (respuesta.code === 'RECORDSET_DATOS' && Array.isArray(respuesta.resource)) {
                roles = respuesta.resource;
            } else {
                throw new Error(respuesta.code || 'No se pudieron cargar los roles.');
            }

            const opcionVacia = document.createElement('option');
            opcionVacia.value = '';
            opcionVacia.textContent = '';
            selectRol.replaceChildren(opcionVacia);
            roles.forEach(rol => {
                const opcion = document.createElement('option');
                opcion.value = rol.id_rol;
                opcion.textContent = rol.rol_name || rol.nombre_rol || rol.id_rol;
                selectRol.appendChild(opcion);
            });
            selectRol.value = idRolSeleccionado === '' ? '' : String(idRolSeleccionado);
        } catch (error) {
            this.dom.abrirModalError(error.message || 'No se pudieron cargar los roles.');
        }
    }

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
        const idRol = document.getElementById('id_rol').value;
        if (idRol.trim() !== '' && !this.validations.format('id_rol', '^[0-9]+$')) {
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
        this.cargarRoles(fila.id_rol);
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
        this.dom.assign_property_value('form_iu', 'onsubmit', 'entidad.DELETE(); return false;');
        this.dom.rellenarvaloresform(fila);
        this.cargarRoles(fila.id_rol);
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_SHOWCURRENT');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.rellenarvaloresform(fila);
        this.cargarRoles(fila.id_rol);
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
        this.cargarRoles();
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_usuario_SEARCH');
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation().replace(
            '<select id="id_rol" name="id_rol"></select>',
            '<input type="text" id="id_rol" name="id_rol">'
        );
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