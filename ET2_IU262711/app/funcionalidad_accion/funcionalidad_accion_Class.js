class funcionalidad_accion extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'funcionalidad_accion';
        this.columnasamostrar = ['id_funcionalidad', 'id_accion'];
        this.mostrarespecial = [];
        this.claves = ['id_funcionalidad', 'id_accion'];

        if (esTest !== 'test') {
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').className = 'text_titulo_page_funcionalidad_accion';
            document.getElementById('add_search_columns').style.display = 'none';
            document.getElementById('contenedor_IU_form').innerHTML = '';
            document.getElementById('IU_manage_table').innerHTML = this.manual_form_creation();
            this.dom.hide_element('Div_IU_form');
            setLang();
            this.inicializarVista();
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
            throw new Error(respuesta.code || `No se pudieron cargar los datos de ${entidad}.`);
        }
        return respuesta.resource;
    }

    renderizarMatriz(relaciones) {
        const cabecera = document.getElementById('thead_acciones');
        const cuerpo = document.getElementById('tbody_funcionalidades');
        cabecera.replaceChildren();
        cuerpo.replaceChildren();

        const filaCabecera = document.createElement('tr');
        const tituloFuncionalidad = document.createElement('th');
        tituloFuncionalidad.scope = 'col';
        tituloFuncionalidad.classList.add('text_matriz_funcionalidad');
        tituloFuncionalidad.textContent = 'Funcionalidad';
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
                checkbox.checked = relaciones.some(relacion =>
                    String(relacion.id_funcionalidad) === String(funcionalidad.id_funcionalidad) &&
                    String(relacion.id_accion) === String(accion.id_accion)
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
        setLang();
    }

    async gestionarCambioRelacion(checkbox) {
        checkbox.disabled = true;
        const datos = {
            id_funcionalidad: checkbox.dataset.funcionalidad,
            id_accion: checkbox.dataset.accion
        };
        try {
            const respuesta = await this.access_functions.peticionBackGeneral(
                '',
                'funcionalidad_accion',
                checkbox.checked ? 'ADD' : 'DELETE',
                datos
            );
            if (!respuesta.ok) {
                checkbox.checked = !checkbox.checked;
                this.mostrarError(new Error(respuesta.code || 'No se pudo actualizar la relación.'));
            }
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
            ? `Error de conexión (${error.status}).`
            : error.message || 'No se pudieron cargar las relaciones.';
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
}
