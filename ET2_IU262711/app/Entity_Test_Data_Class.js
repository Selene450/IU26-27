/**
 * clase para poder refactorizar los metodos que se considere adecuados manteniendo la definición de los mismos y para inclusión de nuevos métodos
 */

class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
        this.dom = new entity_dom_fields();
    }

    data_test_data(){
        const contenedorOriginal = document.getElementById('contenedor_IU_form');
        if (!contenedorOriginal?.parentNode){
            throw new Error('No se encontró el contenedor del formulario para ejecutar los tests.');
        }

        const contenedorPruebas = document.createElement('div');
        contenedorPruebas.id = 'contenedor_IU_form';
        contenedorPruebas.hidden = true;
        contenedorOriginal.parentNode.insertBefore(contenedorPruebas, contenedorOriginal);

        try {
            this.dom = this.entidad.dom;
            const resultados = super.data_test_data();
            const traduccionExito = window.traduccion.text_test_validation_success;
            return resultados.map(resultado => resultado.resultadoprueba === true
                ? {...resultado, traduccionError: traduccionExito}
                : resultado
            );
        } finally {
            contenedorPruebas.remove();
        }
    }

    data_test_class(){
        const ventana = window.open('', '_blank');
        if (!ventana){
            window.alert(window.traduccion.text_test_ventana_bloqueada);
            return false;
        }

        const resultados = this.data_test_data();
        const columnas = resultados.length > 0 ? Object.keys(resultados[0]) : [];
        const correctos = resultados.filter(resultado => resultado.pruebastatus === 'CORRECTO').length;
        const incorrectos = resultados.length - correctos;
        const documento = ventana.document;

        documento.title = `${window.traduccion.text_test_resultados_titulo} - ${this.entidad.nombreentidad}`;
        documento.head.innerHTML = '';
        documento.body.innerHTML = '';

        const titulo = documento.createElement('h1');
        titulo.textContent = `${window.traduccion.text_test_resultados_titulo}: ${this.entidad.nombreentidad}`;
        documento.body.append(titulo);

        const resumen = documento.createElement('p');
        resumen.textContent = `${window.traduccion.text_test_total}: ${resultados.length} | ${window.traduccion.text_test_correctos}: ${correctos} | ${window.traduccion.text_test_incorrectos}: ${incorrectos}`;
        documento.body.append(resumen);

        if (columnas.length === 0){
            const sinResultados = documento.createElement('p');
            sinResultados.textContent = window.traduccion.text_test_sin_pruebas;
            documento.body.append(sinResultados);
            return true;
        }

        const tabla = documento.createElement('table');
        const cabecera = documento.createElement('thead');
        const filaCabecera = documento.createElement('tr');
        columnas.forEach(columna => {
            const celda = documento.createElement('th');
            celda.textContent = columna;
            filaCabecera.append(celda);
        });
        cabecera.append(filaCabecera);
        tabla.append(cabecera);

        const cuerpo = documento.createElement('tbody');
        resultados.forEach(resultado => {
            const fila = documento.createElement('tr');
            columnas.forEach(columna => {
                const celda = documento.createElement('td');
                const valor = resultado[columna];
                celda.textContent = valor === null || valor === undefined
                    ? ''
                    : String(valor).replace(/<br\s*\/?>/gi, '\n');
                fila.append(celda);
            });
            cuerpo.append(fila);
        });
        tabla.append(cuerpo);
        documento.body.append(tabla);

        return true;
    }
}
