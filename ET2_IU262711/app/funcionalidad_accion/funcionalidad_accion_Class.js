class funcionalidad_accion extends AbstractEntidad {
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
            document.getElementById('IU_manage_table').innerHTML = this.manual_form_creation();
            this.dom.hide_element('Div_IU_form');
            setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
            this.cargaInicial = this.inicializarVista();
        }
    }

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

    obtenerIdRelacionado(valor, clave) {
        return valor && typeof valor === 'object' ? valor[clave] : valor;
    }

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

    mostrarEstado(mensaje) {
        document.getElementById('estado_matriz').textContent = mensaje;
    }

    mostrarError(error) {
        const mensaje = error.status
            ? `${window.traduccion.text_error_conexion} (${error.status})`
            : (window.traduccion[error.message] || error.message || window.traduccion.text_error_cargar_relaciones);
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
                <span id="span_error_id_funcionalidad" style="display:none"></span>
                <a id="error_id_funcionalidad"></a>
                <label class="label_id_accion" for="id_accion"></label>
                <select id="id_accion" name="id_accion">
                    <option value=""></option>
                </select>
                <span id="span_error_id_accion" style="display:none"></span>
                <a id="error_id_accion"></a>
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
            'return entidad.dom.validarsubmit(entidad.SEARCH_submit_funcionalidad_accion())'
        );
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
    }

    SEARCH_submit_funcionalidad_accion() {
        const resultado = {
            id_funcionalidad: this.SEARCH_id_funcionalidad_validation(),
            id_accion: this.SEARCH_id_accion_validation()
        };
        return Object.values(resultado).every(valor => valor === true) ? true : resultado;
    }

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


    SEARCH_id_funcionalidad_validation() {
        const valor = document.getElementById('id_funcionalidad').value;
        if (!this.validations.max_size(valor, 11)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_KO');
            return 'id_funcionalidad_max_size_KO';
        }
        if (valor.trim() !== '' && !this.validations.format(valor, '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_KO');
            return 'id_funcionalidad_format_KO';
        }
        this.dom.mostrar_exito_campo('id_funcionalidad');
        return true;
    }


    SEARCH_id_accion_validation() {
        const valor = document.getElementById('id_accion').value;
        if (!this.validations.max_size(valor, 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_KO');
            return 'id_accion_max_size_KO';
        }
        if (valor.trim() !== '' && !this.validations.format(valor, '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_KO');
            return 'id_accion_format_KO';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }
}
