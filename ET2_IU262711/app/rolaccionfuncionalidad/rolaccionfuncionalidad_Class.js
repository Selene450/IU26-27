class rolaccionfuncionalidad extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'rolaccionfuncionalidad';
        this.columnasamostrar = ['id_rol', 'id_accion', 'id_funcionalidad'];
        this.mostrarespecial = [];
        this.claves = ['id_rol', 'id_accion', 'id_funcionalidad'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').className = 'text_titulo_page_rolaccionfuncionalidad';
            document.getElementById('add_search_columns').style.display = '';
            this.ocultarBotonesNoAplicables();
            document.getElementById('contenedor_IU_form').innerHTML = '';
            document.getElementById('IU_manage_table').innerHTML = this.manual_form_creation();
            this.dom.hide_element('Div_IU_form');
            setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
            this.inicializarVista();
        }
    }

    manual_form_creation() {
        return `
            <section class="relacion-matriz">
                <div class="selector_rol">
                    <label class="text_selector_rol" for="id_rol">Rol:</label>
                    <select id="id_rol" name="id_rol" aria-label="Rol"></select>
                </div>
                <div class="contenedor_matriz">
                    <table id="tabla_permisos" class="tabla_matriz">
                        <thead id="thead_acciones"></thead>
                        <tbody id="tbody_funcionalidades"></tbody>
                    </table>
                </div>
                <p class="text_guardado_automatico" style="margin:8px 0"></p>
                <p id="estado_matriz" role="status" style="margin:8px 0"></p>
            </section>`;
    }

    async inicializarVista() {
        try {
            const [respuestaRoles, acciones, funcionalidades] = await Promise.all([
                this.buscarRegistros('rol'),
                this.buscarRegistros('accion'),
                this.buscarRegistros('funcionalidad')
            ]);
            this.acciones = acciones;
            this.funcionalidades = funcionalidades;

            const selectRol = document.getElementById('id_rol');
            respuestaRoles.forEach(rol => {
                const option = document.createElement('option');
                option.value = rol.id_rol;
                option.textContent = rol.nombre_rol || rol.rol_name || rol.id_rol;
                selectRol.appendChild(option);
            });
            selectRol.addEventListener('change', () => this.cargarMatrizPermisos(selectRol.value));

            if (respuestaRoles.length === 0) {
                this.mostrarEstado(window.traduccion.text_sin_roles);
                return;
            }

            selectRol.value = respuestaRoles[0].id_rol;
            await this.cargarMatrizPermisos(selectRol.value);
        } catch (error) {
            this.mostrarError(error);
        }
    }

    async buscarRegistros(entidad, filtros = {}) {
        const respuesta = await this.access_functions.peticionBackGeneral('', entidad, 'SEARCH', filtros);
        if (respuesta.code === 'RECORDSET_VACIO') {
            return [];
        }
        if (respuesta.code !== 'RECORDSET_DATOS' || !Array.isArray(respuesta.resource)) {
            throw new Error(respuesta.code || 'text_error_cargar_datos');
        }
        return respuesta.resource;
    }

    async cargarMatrizPermisos(idRol) {
        const selector = document.getElementById('id_rol');
        const tabla = document.getElementById('tabla_permisos');
        if (!idRol) {
            tabla.querySelector('thead').innerHTML = '';
            tabla.querySelector('tbody').innerHTML = '';
            this.mostrarEstado(window.traduccion.text_seleccione_rol);
            return;
        }

        selector.disabled = true;
        this.mostrarEstado(window.traduccion.text_cargando_permisos);
        try {
            const todosLosPermisos = await this.buscarRegistros('rolaccionfuncionalidad', { id_rol: idRol });
            const permisos = todosLosPermisos.filter(permiso =>
                String(this.obtenerIdRelacionado(permiso.id_rol, 'id_rol')) === String(idRol)
            );
            this.renderizarMatriz(idRol, permisos);
            this.mostrarEstado('');
        } catch (error) {
            this.mostrarError(error);
        } finally {
            selector.disabled = false;
        }
    }

    renderizarMatriz(idRol, permisos) {
        const cabecera = document.getElementById('thead_acciones');
        const cuerpo = document.getElementById('tbody_funcionalidades');
        cabecera.replaceChildren();
        cuerpo.replaceChildren();

        const filaCabecera = document.createElement('tr');
        const tituloFuncionalidad = document.createElement('th');
        tituloFuncionalidad.scope = 'col';
        tituloFuncionalidad.classList.add('text_matriz_funcionalidad');
        tituloFuncionalidad.textContent = window.traduccion.text_matriz_funcionalidad;
        this.estilizarCelda(tituloFuncionalidad, true, true);
        filaCabecera.appendChild(tituloFuncionalidad);
        this.acciones.forEach(accion => {
            const celda = document.createElement('th');
            celda.scope = 'col';
            celda.textContent = accion.nombre_accion || accion.id_accion;
            this.estilizarCelda(celda, true);
            filaCabecera.appendChild(celda);
        });
        cabecera.appendChild(filaCabecera);
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

        this.funcionalidades.forEach(funcionalidad => {
            const fila = document.createElement('tr');
            const titulo = document.createElement('th');
            titulo.scope = 'row';
            titulo.textContent = funcionalidad.nombre_funcionalidad || funcionalidad.id_funcionalidad;
            this.estilizarCelda(titulo, false, true);
            fila.appendChild(titulo);

            this.acciones.forEach(accion => {
                const celda = document.createElement('td');
                this.estilizarCelda(celda);
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.dataset.funcionalidad = funcionalidad.id_funcionalidad;
                checkbox.dataset.accion = accion.id_accion;
                checkbox.checked = permisos.some(permiso =>
                    String(this.obtenerIdRelacionado(permiso.id_funcionalidad, 'id_funcionalidad')) ===
                        String(funcionalidad.id_funcionalidad) &&
                    String(this.obtenerIdRelacionado(permiso.id_accion, 'id_accion')) ===
                        String(accion.id_accion)
                );
                checkbox.setAttribute(
                    'aria-label',
                    `${accion.nombre_accion || accion.id_accion} - ${funcionalidad.nombre_funcionalidad || funcionalidad.id_funcionalidad}`
                );
                checkbox.addEventListener('change', () => this.gestionarCambioPermiso(checkbox, idRol));
                celda.appendChild(checkbox);
                fila.appendChild(celda);
            });
            cuerpo.appendChild(fila);
        });
    }

    obtenerIdRelacionado(valor, clave) {
        return valor && typeof valor === 'object' ? valor[clave] : valor;
    }

    async gestionarCambioPermiso(checkbox, idRol) {
        checkbox.disabled = true;
        this.mostrarEstado(window.traduccion.text_guardando_cambio);
        const datos = {
            id_rol: idRol,
            id_funcionalidad: checkbox.dataset.funcionalidad,
            id_accion: checkbox.dataset.accion
        };
        try {
            const respuesta = await this.access_functions.peticionBackGeneral(
                '',
                'rolaccionfuncionalidad',
                checkbox.checked ? 'ADD' : 'DELETE',
                datos
            );
            if (!respuesta || !respuesta.ok) {
                checkbox.checked = !checkbox.checked;
                this.mostrarError(new Error(respuesta?.code || window.traduccion.text_error_guardar_cambio));
                return;
            }
            this.mostrarEstado(window.traduccion.text_cambios_guardados);
        } catch (error) {
            checkbox.checked = !checkbox.checked;
            this.mostrarError(error);
        } finally {
            checkbox.disabled = false;
        }
    }

    mostrarEstado(mensaje) {
        document.getElementById('estado_matriz').textContent = mensaje;
    }

    mostrarError(error) {
        const mensaje = error.status
            ? `${window.traduccion.text_error_conexion} (${error.status})`
            : (window.traduccion[error.message] || error.message || window.traduccion.text_error_cargar_permisos);
        this.mostrarEstado(mensaje);
        document.getElementById('error_action_msg').textContent = mensaje;
        this.dom.abrirModalError(mensaje);
    }

    estilizarCelda(celda, cabecera = false, primeraColumna = false) {
        if (cabecera) {
            celda.classList.add('matriz-cabecera');
        }
        if (primeraColumna) {
            celda.classList.add('matriz-primera-columna');
        }
    }

    // en la matriz solo se muestra el icono TEST; se ocultan ADD, SEARCH y la seleccion de columnas
    ocultarBotonesNoAplicables() {
        document.querySelectorAll('#add_search_columns > *').forEach(elemento => {
            const esTest = elemento.tagName === 'IMG' && (elemento.getAttribute('src') || '').includes('TEST');
            elemento.style.display = esTest ? '' : 'none';
        });
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
        if (document.getElementById('id_rol').value.trim() !== '' && !this.validations.format('id_rol', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_KO');
            return 'id_rol_format_KO';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }

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
        if (document.getElementById('id_accion').value.trim() !== '' && !this.validations.format('id_accion', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_KO');
            return 'id_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }

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
}
