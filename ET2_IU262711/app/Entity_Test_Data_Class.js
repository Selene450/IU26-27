/**
 * clase para poder refactorizar los metodos que se considere adecuados manteniendo la definición de los mismos y para inclusión de nuevos métodos
 */

class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
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

        const estilo = documento.createElement('style');
        estilo.textContent = `
            :root {
                --color-primario: #244a73;
                --color-texto: #253247;
                --color-borde: #d7e0eb;
            }
            body { margin: 24px; background: #f5f7fb; color: var(--color-texto); font: 14px/1.5 Arial, Helvetica, sans-serif; }
            h1 { margin: 0 0 8px; color: var(--color-primario); font-size: 22px; }
            .resumen { margin: 0 0 16px; color: #64748b; }
            .tabla-contenedor { overflow: auto; background: white; border: 1px solid var(--color-borde); border-radius: 7px; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid var(--color-borde); padding: 8px 10px; text-align: left; vertical-align: top; }
            th { position: sticky; top: 0; background: #eaf0f7; color: var(--color-primario); }
            tr.correcto { background: #e8f5ed; }
            tr.incorrecto { background: #fdeceb; }
            .valor-prueba { white-space: pre-line; }
        `;
        documento.head.append(estilo);

        const titulo = documento.createElement('h1');
        titulo.textContent = `Resultados de tests: ${this.entidad.nombreentidad}`;
        documento.body.append(titulo);

        const resumen = documento.createElement('p');
        resumen.className = 'resumen';
        resumen.textContent = `Total: ${resultados.length} | Correctos: ${correctos} | Incorrectos: ${incorrectos}`;
        documento.body.append(resumen);

        if (columnas.length === 0){
            const sinResultados = documento.createElement('p');
            sinResultados.textContent = 'No hay pruebas definidas para esta entidad.';
            documento.body.append(sinResultados);
            return true;
        }

        const contenedor = documento.createElement('div');
        contenedor.className = 'tabla-contenedor';
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
            fila.className = resultado.pruebastatus === 'CORRECTO' ? 'correcto' : 'incorrecto';

            columnas.forEach(columna => {
                const celda = documento.createElement('td');
                const valor = resultado[columna];
                celda.textContent = valor === null || valor === undefined
                    ? ''
                    : String(valor).replace(/<br\s*\/?>/gi, '\n');
                if (columna === 'valorprueba'){
                    celda.className = 'valor-prueba';
                }
                fila.append(celda);
            });
            cuerpo.append(fila);
        });
        tabla.append(cuerpo);
        contenedor.append(tabla);
        documento.body.append(contenedor);

        return true;
    }

}