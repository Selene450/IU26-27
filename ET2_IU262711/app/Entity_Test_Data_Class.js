/**
 * clase para poder refactorizar los metodos que se considere adecuados manteniendo la definición de los mismos y para inclusión de nuevos métodos
 */

class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
    }

    data_test_data(){
        const resultados = super.data_test_data();
        const traduccionExito = window.traduccion.text_test_validation_success;
        return resultados.map(resultado => resultado.resultadoprueba === true
            ? {...resultado, traduccionError: traduccionExito}
            : resultado
        );
    }

    data_test_class(){
        const ventana = window.open('', '_blank');
        if (!ventana){
            window.alert('No se pudo abrir la ventana de resultados. Permite las ventanas emergentes para ejecutar los tests.');
            return false;
        }

        const resultados = this.data_test_data();
        const columnas = resultados.length > 0 ? Object.keys(resultados[0]) : [];
        const correctos = resultados.filter(resultado => resultado.pruebastatus === 'CORRECTO').length;
        const incorrectos = resultados.length - correctos;
        const documento = ventana.document;

        documento.title = `Resultados de tests - ${this.entidad.nombreentidad}`;
        documento.head.innerHTML = '';
        documento.body.innerHTML = '';

        const titulo = documento.createElement('h1');
        titulo.textContent = `Resultados de tests: ${this.entidad.nombreentidad}`;
        documento.body.append(titulo);

        const resumen = documento.createElement('p');
        resumen.textContent = `Total: ${resultados.length} | Correctos: ${correctos} | Incorrectos: ${incorrectos}`;
        documento.body.append(resumen);

        if (columnas.length === 0){
            const sinResultados = documento.createElement('p');
            sinResultados.textContent = 'No hay pruebas definidas para esta entidad.';
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
