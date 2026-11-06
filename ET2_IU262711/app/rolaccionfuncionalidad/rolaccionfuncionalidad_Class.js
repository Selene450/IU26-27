class rolaccionfuncionalidad extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new entity_validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'rolaccionfuncionalidad';
        this.columnasamostrar = ['id_rol', 'id_accion', 'id_funcionalidad'];
        this.mostrarespecial = [];
        this.claves = ['id_rol', 'id_accion', 'id_funcionalidad'];
        this.filtrosMatriz = {};
        this.permisos = [];
        this.roles = [];
        this.acciones = [];
        this.funcionalidades = [];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').className = 'text_titulo_page_rolaccionfuncionalidad';
            document.getElementById('add_search_columns').style.display = '';
            this.ocultarBotonesNoAplicables();
            document.getElementById('contenedor_IU_form').innerHTML = '';
            document.getElementById('IU_manage_table').innerHTML = this.manual_form_creation();
            this.dom.hide_element('Div_IU_form');
            setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
            this.cargaInicial = this.inicializarVista();
        }
    }

    manual_form_creation() {
        return `
            <section class="relacion-matriz">
                <div class="selector_rol">
                    <label class="text_selector_rol" for="selector_rol">Rol:</label>
                    <select id="selector_rol" aria-label="Rol"></select>
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
            this.roles = respuestaRoles;

            const selectRol = document.getElementById('selector_rol');
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
        const selector = document.getElementById('selector_rol');
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
            this.permisos = permisos;
            const funcionalidades = this.funcionalidades.filter(funcionalidad =>
                !this.filtrosMatriz.id_funcionalidad ||
                String(funcionalidad.id_funcionalidad).includes(this.filtrosMatriz.id_funcionalidad)
            );
            const acciones = this.acciones.filter(accion =>
                !this.filtrosMatriz.id_accion ||
                String(accion.id_accion).includes(this.filtrosMatriz.id_accion)
            );
            this.renderizarMatriz(idRol, permisos, funcionalidades, acciones);
            this.mostrarEstado('');
        } catch (error) {
            this.mostrarError(error);
        } finally {
            selector.disabled = false;
        }
    }

    renderizarMatriz(idRol, permisos, funcionalidades = this.funcionalidades, acciones = this.acciones) {
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
        acciones.forEach(accion => {
            const celda = document.createElement('th');
            celda.scope = 'col';
            celda.textContent = accion.nombre_accion || accion.id_accion;
            this.estilizarCelda(celda, true);
            filaCabecera.appendChild(celda);
        });
        cabecera.appendChild(filaCabecera);
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

        funcionalidades.forEach(funcionalidad => {
            const fila = document.createElement('tr');
            const titulo = document.createElement('th');
            titulo.scope = 'row';
            titulo.textContent = funcionalidad.nombre_funcionalidad || funcionalidad.id_funcionalidad;
            this.estilizarCelda(titulo, false, true);
            fila.appendChild(titulo);

            acciones.forEach(accion => {
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
            this.permisos = checkbox.checked
                ? [...this.permisos, datos]
                : this.permisos.filter(permiso =>
                    String(this.obtenerIdRelacionado(permiso.id_rol, 'id_rol')) !== String(datos.id_rol) ||
                    String(this.obtenerIdRelacionado(permiso.id_funcionalidad, 'id_funcionalidad')) !==
                        String(datos.id_funcionalidad) ||
                    String(this.obtenerIdRelacionado(permiso.id_accion, 'id_accion')) !== String(datos.id_accion)
                );
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

    // La matriz admite búsqueda, pero no altas manuales ni selección de columnas.
    ocultarBotonesNoAplicables() {
        document.querySelectorAll('#add_search_columns > *').forEach(elemento => {
            const src = elemento.tagName === 'IMG' ? elemento.getAttribute('src') || '' : '';
            elemento.style.display = src.includes('TEST') || src.includes('SEARCH') ? '' : 'none';
        });
    }

    async createForm_SEARCH() {
        await this.cargaInicial;
        document.getElementById('class_contenido_titulo_form').className =
            'text_contenido_titulo_form_rolaccionfuncionalidad_SEARCH';
        document.getElementById('contenedor_IU_form').innerHTML = `
            <form id="form_iu">
                <label class="label_id_rol" for="id_rol"></label>
                <select id="id_rol" name="id_rol">
                    <option value=""></option>
                </select>
                <label class="label_id_accion" for="id_accion"></label>
                <select id="id_accion" name="id_accion">
                    <option value=""></option>
                </select>
                <label class="label_id_funcionalidad" for="id_funcionalidad"></label>
                <select id="id_funcionalidad" name="id_funcionalidad">
                    <option value=""></option>
                </select>
                <button id="submit_button" type="submit"><img src="./iconos/SEARCH.png" alt=""></button>
            </form>`;
        this.roles.forEach(rol => {
            const opcion = document.createElement('option');
            opcion.value = rol.id_rol;
            opcion.textContent = rol.nombre_rol || rol.rol_name || rol.id_rol;
            document.getElementById('id_rol').appendChild(opcion);
        });
        this.acciones.forEach(accion => {
            const opcion = document.createElement('option');
            opcion.value = accion.id_accion;
            opcion.textContent = accion.nombre_accion || accion.id_accion;
            document.getElementById('id_accion').appendChild(opcion);
        });
        this.funcionalidades.forEach(funcionalidad => {
            const opcion = document.createElement('option');
            opcion.value = funcionalidad.id_funcionalidad;
            opcion.textContent = funcionalidad.nombre_funcionalidad || funcionalidad.id_funcionalidad;
            document.getElementById('id_funcionalidad').appendChild(opcion);
        });
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.assign_property_value(
            'form_iu',
            'onsubmit',
            'entidad.SEARCH(); return false;'
        );
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    async SEARCH() {
        const idRol = document.getElementById('id_rol')?.value.trim();
        const rol = idRol
            ? this.roles.find(registro => String(registro.id_rol) === idRol)
            : null;
        const selectRol = document.getElementById('selector_rol');
        this.dom.hide_element('Div_IU_form');
        if (idRol && !rol) {
            this.filtrosMatriz = {};
            this.renderizarMatriz(selectRol.value, [], [], []);
            this.mostrarEstado(window.traduccion.text_matriz_sin_resultados);
            return;
        }

        if (rol) {
            selectRol.value = String(rol.id_rol);
        }
        this.filtrosMatriz = {
            id_accion: document.getElementById('id_accion')?.value.trim() || '',
            id_funcionalidad: document.getElementById('id_funcionalidad')?.value.trim() || ''
        };
        await this.cargarMatrizPermisos(selectRol.value);
        if (!this.acciones.some(accion =>
            !this.filtrosMatriz.id_accion ||
            String(accion.id_accion).includes(this.filtrosMatriz.id_accion)
        ) || !this.funcionalidades.some(funcionalidad =>
            !this.filtrosMatriz.id_funcionalidad ||
            String(funcionalidad.id_funcionalidad).includes(this.filtrosMatriz.id_funcionalidad)
        )) {
            this.mostrarEstado(window.traduccion.text_matriz_sin_resultados);
        }
    }
}
