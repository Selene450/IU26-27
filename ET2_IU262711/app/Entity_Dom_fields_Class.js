/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definición y para inclusión de nuevos métodos
 */
class entity_dom_fields extends dom_fields{
    /**
     * Crea la gestión de la entidad `Entity_Dom_fields_Class`. Si `esTest` es distinto de `'test'`, monta también la interfaz.
     */
    constructor(){
        super();
    }

    /**
     * Muestra todos los controles de la cabecera de la gestión de la entidad (ADD, SEARCH, TEST).
     * @returns {void}
     */
    mostrarControlesEntidad(){
        document.querySelectorAll('#add_search_columns > *').forEach(elemento => {
            elemento.style.display = '';
        });
    }

    /**
     * igual que dom_table.showData, pero quita antes la clase RECORDSET_VACIO que deja una busqueda sin resultados;
     * si no, setLang() volveria a escribir el mensaje de "sin resultados" encima de la tabla
     * @param {string} idcomponente id del contenedor donde se coloca la tabla
     * @param {object} test_result datos a mostrar
     * @param {object} marked columnas a marcar
     */
    showData(idcomponente, test_result, marked=null){
        document.getElementById(idcomponente).removeAttribute('class');
        super.showData(idcomponente, test_result, marked);
    }

    /**
     * igual que dom_form.colocarboton, pero bloquea el boton de submit en cuanto el formulario se envia
     * para que un doble clic no mande dos peticiones. Se libera al mostrarse un error del back
     * (el formulario sigue abierto) o pasados 15 segundos por seguridad.
     * @param {string} accion accion a realizar
     */
    colocarboton(accion){
        super.colocarboton(accion);
        const formulario = document.getElementById('form_iu');
        const boton = document.getElementById('submit_button');
        formulario.addEventListener('submit', evento => {
            // si la validacion del onsubmit lo ha cancelado no se envia nada; DELETE no valida y cancela porque llama a entidad.DELETE() directamente
            if (evento.defaultPrevented && accion !== 'DELETE') {
                return;
            }
            boton.disabled = true;
            setTimeout(() => { boton.disabled = false; }, 15000);
        });
    }

    /**
     * abre el modal de error. Si el mensaje es un codigo de traduccion se pone como class para que setLang() lo traduzca
     * @param {string} errorMsg codigo de error o texto
     */
    abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
        const botonEnvio = document.getElementById('submit_button');
        if (botonEnvio) {
            botonEnvio.disabled = false;
        }
        const mensaje = document.getElementById('error_action_msg');
        mensaje.removeAttribute('class');
        mensaje.textContent = errorMsg || '';
        if (typeof errorMsg === 'string' && Object.prototype.hasOwnProperty.call(window.traduccion || {}, errorMsg)) {
            mensaje.classList.add(errorMsg);
        }
        setLang();
    }

    /**
     * igual que dom_fields.crearElementoHtml, añadiendo soporte para select y date y valor inicial en los elementos por defecto
     */
    crearElementoHtml(contenedor, tag, nombrecampo, valores, extra=null){
        switch (tag){
            case 'select':
                var element = document.createElement('select');
                element.id = nombrecampo;
                element.name = nombrecampo;
                const valorSeleccionado = valores[nombrecampo] ?? '';
                const option = document.createElement('option');
                option.value = valorSeleccionado;
                option.textContent = valorSeleccionado;
                element.appendChild(option);
                element.value = valorSeleccionado;
                this.colocarelemento(element, contenedor);
                break;
            case 'date': {
                const campoFecha = this.createInput(nombrecampo, 'date');
                campoFecha.value = valores[nombrecampo] ?? '';
                this.colocarelemento(campoFecha, contenedor);
                break;
            }
            case 'input':
            case 'file':
            case 'submit':
                super.crearElementoHtml(contenedor, tag, nombrecampo, valores, extra);
                break;
            default:
                var elementoDefecto = document.createElement(tag);
                elementoDefecto.id = nombrecampo;
                const valor = Object.prototype.hasOwnProperty.call(valores, nombrecampo)
                    ? valores[nombrecampo]
                    : '';
                this.fillElementValue(elementoDefecto, valor);
                this.colocarelemento(elementoDefecto, contenedor);
                break;
        }
    }

    /**
     * igual que dom_fields.fillElementValue, pero los textarea usan .value
     */
    fillElementValue(elemento, valor){
        if (elemento.tagName === 'TEXTAREA'){
            elemento.value = valor;
        }
        else{
            super.fillElementValue(elemento, valor);
        }
    }

    /**
     * igual que dom_fields.fillElementFile, pero si el valor del fichero esta vacio deja el input sin fichero
     */
    fillElementFile(elemento, valores){
        const primero = Object.keys(valores)[0];
        if (Object.values(valores).length > 0 && valores[primero] === ''){
            elemento.files = new DataTransfer().files;
        }
        else{
            super.fillElementFile(elemento, valores);
        }
    }
}
