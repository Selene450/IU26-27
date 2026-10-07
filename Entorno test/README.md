# Contenido #

## Semana 3 ##

### Propósito ###

El entorno de revisión permite consultar las definiciones y los casos de prueba de las siete entidades del proyecto. Comprueba la correspondencia entre cada prueba y su definición (entidad, campo, acción, número y resultado esperado), y muestra inconsistencias en una tabla.

Esta revisión es estructural: no ejecuta las reglas de validación ni requiere que existan clases de entidad. Cuando se implementen dichas clases, se podrá ampliar el entorno para ejecutar los casos contra sus validadores.

### Revisión de las pruebas ###

### Data_Test ### 

La página `Test/Data/index.html` carga las definiciones y pruebas de `ET1_IU262711` para las siete entidades. Al seleccionar una entidad, `Data_Test` verifica la estructura de las definiciones, las referencias de cada prueba y la coincidencia de entidad, campo, acción y resultado esperado. Los casos se presentan en una tabla y las inconsistencias se resaltan.

Esta herramienta no instancia clases de entidad ni ejecuta validaciones; sirve para revisar que el conjunto de pruebas esté bien relacionado y definido.

### dom_table ###
En la clase dom_table, vamos a implementar un método que se llama show_data() y que se utiliza para visualizar una tabla bidimensional hecha en html a partir de los datos que se envían como parámetro de este método, junto con el contenedor en donde se va a poner la tabla y alguna configuración de marcado para hacer modificación visual en función del valor de una propiedad. 

Para crear una tabla en HTML necesitamos un objeto DOM table. El cual puede incluir 3 divs semánticos que son el thead, el tbody y el tfoot. El thead se utiliza para colocar una fila de títulos. El tbody se utiliza para colocar las filas de datos. Y el tfoot se utiliza para colocar un footer o pie de la tabla, como por ejemplo un sumatorio de cantidades que tú tengas en los datos. 

El objeto HTML para crear una fila es el objeto dom <tr>. Para crear columnas dentro de un objeto <tr> se utiliza el <th> para una celda de títulos y el <td> para una celda de datos. Las filas se pueden organizar dentro de los divs semánticos indicados antes, colocando un tr con columnas th dentro de un thead y un tr con columnas td dentro de 1 tbody o de un tfoot. 

``` html
<table>
    <thead>
        <tr>
            <th> titulo 1 </th>
            <th> titulo 2 </th>
            <th> titulo 3 </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> dato 1.1 </td>
            <td> dato 1.2 </td>
            <td> dato 1.3 </td>
        </tr>
        <tr>
            <td> dato 2.1 </td>
            <td> dato 2.2 </td>
            <td> dato 2.3 </td>
        </tr>
        .
        .
        .
    </tbody>
    <tfoot>
        <tr>
            <td colspan = 3>fin de la tabla</td>
        </tr>
    <tfoot>
</table>

```

Así pues, para evitarnos tener que construir una tabla HTML. Personalizada en cada momento a partir de los datos que queremos mostrar en la tabla, lo que hemos creado es un método. Que construye la tabla HTML a partir de los datos que le damos y con unos datos estéticos que queremos que tenga. Para ello le mandamos una estructura de información organizada en. Objetos js que a su vez dentro contienen. Un objeto js por cada fila que queremos mostrar en la tabla. En el método, una vez que llegamos, creamos el objeto table, el objeto thead, el objeto tbody y Los colocamos todos en donde corresponde, el table dentro del div indicado como parámetro, el thead y el tbody dentro del table.  

Llamamos a la función misdatos() para que dibuje las filas de títulos y de datos. En esta función para dibujar la fila de títulos, lo primero que hacemos es cogemos el objeto de datos a mostrar en la tabla, usamos la información de la primera fila para obtener las propiedades del objeto de datos de fila y esas propiedades las vamos a colocar como títulos de las columnas llamando a la función filadatos(), que devuelve el objeto tr y lo coloca en el thead. 

Después procede a crear la fila HTML de cada fila de datos que viene en mi estructura de datos a mostrar en la tabla. Este objeto de valores de fila lo pasamos a filadatos() indicando que es una columna td. Por cada fila que le pasamos, me devuelve el objeto tr correspondiente que ponemos en el tbody.  

Para crear cualquier fila tenemos otra función filadatos() a la cual le pasamos los datos de la fila, le indicamos qué tag de columna quiero que cree (título o dato) y si tiene algún tipo de marcado de estilo. Esta función lo que hace es recorre el objeto de fila, coge la propiedad, coloca el valor dentro de la celda, mira si para esa propiedad y valor hay una modificación de estilo, si es así, le coloca la modificación de estilo y en caso contrario la deja sin modificación de estilo. Esto lo hace hasta que termina todos los elementos de esa estructura de fila y cuando termina devuelve el objeto dom <tr> HTML ya creado.  