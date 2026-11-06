/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definición y para inclusión de nuevos métodos
 */
class entity_dom_fields extends dom_fields{
    constructor(){
        super();
    }

    mostrarControlesEntidad(){
        document.querySelectorAll('#add_search_columns > *').forEach(elemento => {
            elemento.style.display = '';
        });
    }

    /**
     * abre el modal de error. Si el mensaje es un codigo de traduccion se pone como class para que setLang() lo traduzca
     * @param {string} errorMsg codigo de error o texto
     */
    abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
        const mensaje = document.getElementById('error_action_msg');
        mensaje.removeAttribute('class');
        mensaje.textContent = errorMsg || '';
        if (typeof errorMsg === 'string' && Object.prototype.hasOwnProperty.call(window.traduccion || {}, errorMsg)) {
            mensaje.classList.add(errorMsg);
        }
        setLang();
    }

    /**
     * igual que dom_fields.crearElementoHtml, añadiendo soporte para select y valor inicial en los elementos por defecto
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
