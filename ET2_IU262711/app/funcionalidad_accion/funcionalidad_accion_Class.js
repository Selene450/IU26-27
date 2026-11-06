/**
 * Gestión de la entidad débil `funcionalidad_accion` como matriz de checkboxes funcionalidad × acción. Solo muestra SEARCH y TEST.
 * @extends AbstractEntidad
 */
class funcionalidad_accion extends AbstractEntidad {
    /**
     * Crea la gestión de la entidad `funcionalidad_accion`. Si `esTest` es distinto de `'test'`, monta también la interfaz.
     * @param {string|null} [esTest=null] `'test'` para instanciar sin montar la interfaz
     */
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new entity_validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'funcionalidad_accion';
        this.columnasamostrar = ['id_funcionalidad', 'id_accion'];
        this.mostrarespecial = [];
        this.claves = ['id_funcionalidad', 'id_accion'];
        this.relaciones = [];
        this.acciones = [];
        this.funcionalidades = [];
        this.datosBusquedaCargados = false;

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').className = 'text_titulo_page_funcionalidad_accion';
            document.getElementById('add_search_columns').style.display = '';
            this.ocultarBotonesNoAplicables();
            document.getElementById('contenedor_IU_form').innerHTML = '';
            document.getElementById('IU_manage_table').className = '';
            document.getElementById('IU_manage_table').innerHTML = this.manual_form_creation();
            this.dom.hide_element('Div_IU_form');
            setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
            this.cargaInicial = this.inicializarVista();
        }
    }

    /**
     * Devuelve el HTML de los campos del formulario de la entidad.
     * @returns {string}
     */
    manual_form_creation() {
        return `
            <section class="relacion-matriz">
                <div class="contenedor_matriz">
                    <table id="tabla_funcionalidad_accion" class="tabla_matriz">
                        <thead id="thead_acciones"></thead>
                        <tbody id="tbody_funcionalidades"></tbody>
                    </table>
                </div>
                <p class="text_guardado_automatico" style="margin:8px 0"></p>
                <p id="estado_matriz" role="status" style="margin:8px 0"></p>
            </section>`;
    }

    /**
     * Carga acciones, funcionalidades y relaciones del back y renderiza la matriz.
     * @returns {Promise<void>}
     */
    async inicializarVista() {
        try {
            const [acciones, funcionalidades, relaciones] = await Promise.all([
                this.buscarRegistros('accion'),
                this.buscarRegistros('funcionalidad'),
                this.buscarRegistros('funcionalidad_accion')
            ]);
            this.acciones = acciones;
            this.funcionalidades = funcionalidades;
            this.relaciones = relaciones;
            this.datosBusquedaCargados = true;
            this.renderizarMatriz(relaciones);
            this.mostrarEstado('');
        } catch (error) {
            this.mostrarError(error);
        }
    }

    /**
     * Consulta una entidad en el back y devuelve sus registros.
     * @param {string} entidad Nombre de la entidad a consultar
     * @returns {Promise<Array<Object>>}
     */
    async buscarRegistros(entidad) {
        const respuesta = await this.access_functions.peticionBackGeneral('', entidad, 'SEARCH');
        if (respuesta.code === 'RECORDSET_VACIO') {
            return [];
        }
        if (respuesta.code !== 'RECORDSET_DATOS' || !Array.isArray(respuesta.resource)) {
            throw new Error(respuesta.code || 'text_error_cargar_datos');
        }
        return respuesta.resource;
    }

    /**
     * Dibuja la matriz de checkboxes funcionalidad × acción marcando las relaciones existentes.
     * @param {Array<Object>} relaciones Relaciones funcionalidad_accion a marcar
     * @param {Array<Object>} [funcionalidades=this.funcionalidades] Funcionalidades a mostrar como filas
     * @param {Array<Object>} [acciones=this.acciones] Acciones a mostrar como columnas
     * @returns {void}
     */
    renderizarMatriz(relaciones, funcionalidades = this.funcionalidades, acciones = this.acciones) {
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
                checkbox.checked = relaciones.some(relacion =>
                    String(this.obtenerIdRelacionado(relacion.id_funcionalidad, 'id_funcionalidad')) ===
                        String(funcionalidad.id_funcionalidad) &&
                    String(this.obtenerIdRelacionado(relacion.id_accion, 'id_accion')) ===
                        String(accion.id_accion)
                );
                checkbox.setAttribute(
                    'aria-label',
                    `${accion.nombre_accion || accion.id_accion} - ${funcionalidad.nombre_funcionalidad || funcionalidad.id_funcionalidad}`
                );
                checkbox.addEventListener('change', () => this.gestionarCambioRelacion(checkbox));
                celda.appendChild(checkbox);
                fila.appendChild(celda);
            });
            cuerpo.appendChild(fila);
        });
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Obtiene el identificador de un valor que puede venir como objeto o como escalar.
     * @param {*} valor Valor de la celda o del registro
     * @param {string} clave Propiedad a leer si el valor es un objeto
     * @returns {*}
     */
    obtenerIdRelacionado(valor, clave) {
        return valor && typeof valor === 'object' ? valor[clave] : valor;
    }

    /**
     * Borra en rolaccionfuncionalidad los permisos que dependen de una relación que se desmarca.
     * @param {Object} datos Relación {id_funcionalidad, id_accion}
     * @returns {Promise<number>} Número de permisos eliminados.
     */
    async eliminarPermisosDependientes(datos) {
        let permisosEliminados = 0;
        try {
            const permisos = await this.buscarRegistros('rolaccionfuncionalidad', {
                id_funcionalidad: datos.id_funcionalidad,
                id_accion: datos.id_accion
            });
            const permisosRelacionados = permisos.filter(permiso =>
                String(this.obtenerIdRelacionado(permiso.id_funcionalidad, 'id_funcionalidad')) ===
                    String(datos.id_funcionalidad) &&
                String(this.obtenerIdRelacionado(permiso.id_accion, 'id_accion')) ===
                    String(datos.id_accion)
            );
            const rolesEliminados = new Set();

            for (const permiso of permisosRelacionados) {
                const idRol = this.obtenerIdRelacionado(permiso.id_rol, 'id_rol');
                if (idRol === undefined || idRol === null || idRol === '') {
                    throw new Error(window.traduccion.text_error_permiso_sin_rol);
                }
                if (rolesEliminados.has(String(idRol))) {
                    continue;
                }

                const respuesta = await this.access_functions.peticionBackGeneral(
                    '',
                    'rolaccionfuncionalidad',
                    'DELETE',
                    {
                        id_rol: idRol,
                        id_funcionalidad: datos.id_funcionalidad,
                        id_accion: datos.id_accion
                    }
                );
                if (!respuesta || !respuesta.ok) {
                    throw new Error(respuesta?.code || window.traduccion.text_error_guardar_cambio);
                }
                rolesEliminados.add(String(idRol));
                permisosEliminados++;
            }

            return permisosEliminados;
        } catch (error) {
            if (permisosEliminados > 0) {
                const detalle = window.traduccion.text_permisos_eliminados_antes_error
                    .replace('{count}', String(permisosEliminados));
                throw new Error(`${error.message || error}${detalle}`);
            }
            throw error;
        }
    }

    /**
     * Gestiona el cambio de un checkbox: ADD si se marca, DELETE si se desmarca.
     * @param {HTMLInputElement} checkbox Checkbox de la matriz que cambió
     * @returns {Promise<void>}
     */
    async gestionarCambioRelacion(checkbox) {
        checkbox.disabled = true;
        this.mostrarEstado(window.traduccion.text_guardando_cambio);
        const datos = {
            id_funcionalidad: checkbox.dataset.funcionalidad,
            id_accion: checkbox.dataset.accion
        };
        let permisosEliminados = 0;
        try {
            if (!checkbox.checked) {
                permisosEliminados = await this.eliminarPermisosDependientes(datos);
            }
            const respuesta = await this.access_functions.peticionBackGeneral(
                '',
                'funcionalidad_accion',
                checkbox.checked ? 'ADD' : 'DELETE',
                datos
            );
            if (!respuesta || !respuesta.ok) {
                let mensaje = respuesta?.code || window.traduccion.text_error_guardar_cambio;
                if (permisosEliminados > 0) {
                    mensaje += window.traduccion.text_permisos_eliminados_antes_error
                        .replace('{count}', String(permisosEliminados));
                }
                throw new Error(mensaje);
            }
            const mensajeGuardado = permisosEliminados > 0
                ? window.traduccion.text_cambio_guardado_con_permisos
                    .replace('{count}', String(permisosEliminados))
                : window.traduccion.text_cambios_guardados;
            this.relaciones = checkbox.checked
                ? [...this.relaciones, datos]
                : this.relaciones.filter(relacion =>
                    String(this.obtenerIdRelacionado(relacion.id_funcionalidad, 'id_funcionalidad')) !==
                        String(datos.id_funcionalidad) ||
                    String(this.obtenerIdRelacionado(relacion.id_accion, 'id_accion')) !==
                        String(datos.id_accion)
                );
            this.mostrarEstado(mensajeGuardado);
        } catch (error) {
            checkbox.checked = !checkbox.checked;
            this.mostrarError(error);
        } finally {
            checkbox.disabled = false;
        }
    }

    /**
     * Muestra un mensaje de estado sobre la matriz.
     * @param {string} mensaje Texto o código de traducción
     * @returns {void}
     */
    mostrarEstado(mensaje) {
        document.getElementById('estado_matriz').textContent = mensaje;
    }

    /**
     * Muestra un error de carga o de guardado sobre la matriz.
     * @param {Error|string} error Error recibido
     * @returns {void}
     */
    mostrarError(error) {
        const mensaje = error.status
            ? `${window.traduccion.text_error_conexion} (${error.status})`
            : (window.traduccion[error.message] || error.message || window.traduccion.text_error_cargar_relaciones);
        this.mostrarEstado(mensaje);
        document.getElementById('error_action_msg').textContent = mensaje;
        this.dom.abrirModalError(mensaje);
    }

    /**
     * Aplica el estilo de cabecera, primera columna o celda normal.
     * @param {HTMLElement} celda Celda a estilizar
     * @param {boolean} [cabecera=false] Si es celda de cabecera
     * @param {boolean} [primeraColumna=false] Si es la primera columna
     * @returns {void}
     */
    estilizarCelda(celda, cabecera = false, primeraColumna = false) {
        if (cabecera) {
            celda.classList.add('matriz-cabecera');
        }
        if (primeraColumna) {
            celda.classList.add('matriz-primera-columna');
        }
    }

    // La matriz admite búsqueda, pero no altas manuales ni selección de columnas.
    /**
     * Oculta los iconos de ADD, EDIT, DELETE y SHOWCURRENT, que no aplican a las entidades débiles; deja visible SEARCH y TEST.
     * @returns {void}
     */
    ocultarBotonesNoAplicables() {
        document.querySelectorAll('#add_search_columns > *').forEach(elemento => {
            const src = elemento.tagName === 'IMG' ? elemento.getAttribute('src') || '' : '';
            elemento.style.display = src.includes('TEST') || src.includes('SEARCH') ? '' : 'none';
        });
    }

    /**
     * Prepara el formulario modal de la acción `SEARCH`.
     * @returns {void}
     */
    async createForm_SEARCH() {
        await this.cargaInicial;
        if (!this.datosBusquedaCargados) {
            return;
        }
        document.getElementById('class_contenido_titulo_form').className =
            'text_contenido_titulo_form_funcionalidad_accion_SEARCH';
        document.getElementById('contenedor_IU_form').innerHTML = `
            <form id="form_iu">
                <label class="label_id_funcionalidad" for="id_funcionalidad"></label>
                <select id="id_funcionalidad" name="id_funcionalidad">
                    <option value=""></option>
                </select>
                <label class="label_id_accion" for="id_accion"></label>
                <select id="id_accion" name="id_accion">
                    <option value=""></option>
                </select>
                <button id="submit_button" type="submit"><img src="./iconos/SEARCH.png" alt=""></button>
            </form>`;
        this.funcionalidades.forEach(funcionalidad => {
            const opcion = document.createElement('option');
            opcion.value = funcionalidad.id_funcionalidad;
            opcion.textContent = funcionalidad.nombre_funcionalidad || funcionalidad.id_funcionalidad;
            document.getElementById('id_funcionalidad').appendChild(opcion);
        });
        this.acciones.forEach(accion => {
            const opcion = document.createElement('option');
            opcion.value = accion.id_accion;
            opcion.textContent = accion.nombre_accion || accion.id_accion;
            document.getElementById('id_accion').appendChild(opcion);
        });
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.assign_property_value(
            'form_iu',
            'onsubmit',
            'entidad.SEARCH(); return false;'
        );
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    /**
     * Aplica el filtro de búsqueda y renderiza la matriz con las relaciones coincidentes.
     * @returns {void}
     */
    SEARCH() {
        const filtros = ['id_funcionalidad', 'id_accion'].reduce((resultado, campo) => {
            const valor = document.getElementById(campo)?.value.trim();
            if (valor) {
                resultado[campo] = valor;
            }
            return resultado;
        }, {});
        const funcionalidades = this.funcionalidades.filter(funcionalidad =>
            !filtros.id_funcionalidad ||
            String(funcionalidad.id_funcionalidad).includes(filtros.id_funcionalidad)
        );
        const acciones = this.acciones.filter(accion =>
            !filtros.id_accion || String(accion.id_accion).includes(filtros.id_accion)
        );
        this.dom.hide_element('Div_IU_form');
        this.renderizarMatriz(this.relaciones, funcionalidades, acciones);
        this.mostrarEstado(
            funcionalidades.length && acciones.length ? '' : window.traduccion.text_matriz_sin_resultados
        );
    }
}
