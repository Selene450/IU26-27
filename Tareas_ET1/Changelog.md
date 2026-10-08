# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

### Añadido
- Tests y pruebas de la entidad accion [20/09/2026]
- Tests y pruebas de la entidad persona [25/09/2026]
- Tests y pruebas parciales de la entidad usuario [28/09/2026]
- Añadidos tests y pruebas de la entidad rolaccionfuncionalidad [28/09/2026]
- Finalización de tests y pruebas de usuario [29/09/2026]
- Añadidos tests y pruebas de la entidad funcionalidad [29/09/2026]
- Añadido de tests y pruebas de la entidad funcionalidad_accion [29/09/2026]
- Añadidos tests y pruebas de la entidad rol [29/09/2026]


### Corregido
- Corrección de comillas en los true de los tests y pruebas de accion [22/09/2026]
- Añadir tests y pruebas de `min_size` y max_size` en atributos de la entidad persona [28/09/2026]
- Añadir tests y pruebas de `min_size_name_file` y `max_size` `name_file` a la entidad persona [28/09/2026]
- Añadir tests y pruebas de format_file a la entidad persona [28/09/2026]
- Correccion de `nuevo_foto_persona` y `foto_persona`: `nuevo_foto_persona` es para las pruebas de ADD y EDIT ya que son sobre el fichero y `foto_persona` es para las de SEARCH ya que solo buscamos por el nombre (ref. definición de este año y dudas resueltas de año pasado) [28/09/2026]
- Corección general de numeración como consecuencia de añadir nuevas pruebas y tests [28/09/2026]
- Correccion de errores de los tests y pruebas de usuario [29/09/2026]
- Correccion en nombre de variable en los tests de `rolaccionfuncionalidad` y `accion_funcionalidad` [29/09/2026]
- Correccion en nombre de campo `contrasena` en los tests de ` usuario` [29/09/2026]
- Corrección en los tests de tipo not_exists de `nueva_foto_persona` correspondiendo a la respuesta al correo de duda enviado esta mañana [29/09/2026] - queda pendiente corregir la numeración, ya que he detectado fallos en la numeración de los tests y pruebas de persona
- Corrección de la numeración de la entidad `persona`, a partir del test 22 en la definición de tests se pasaba al 24, pero en el array de pruebas estaba bien numerada, también se modificó el error que saltaba en la definición de test de `foto_persona` ya que el error que dá sería sobre la longitud del nombre, no del archivo. [29/09/2026]
- Corrección del nombre del atributo `descrip_funcionalidad` de la entidad `funcionalidad`, antes estaba como `descripc_funcionalidad` [29/09/2026]
- Correcciones en la entidad `rol`: `id_rol` debe ser un campo numérico, no alfabético, esto afecta a los mensajes de error y a los casos de prueba que tenían valores alfabéticos [29/09/2026]
- Corrección de comas que sobraban y añadido de puntos y comas que faltaban al final de cada array en la mayoria de clases [1/10/2026]
- Añadidos mas test de pruebas para los formatos en la entidad `accion` y la correcion de numeración en los test de prueba de la entidad `usuario` [1/10/2026]
- Añadidos mas test de pruebas para los formatos en la entidad `funcionalidad_accion` [1/10/2026]
- Añadidas más pruebas de la entidad `funcionalidad` y corregidas algunas existentes, también se corrigió la numeración a consecuencias de los cambios en el número de pruebas [1/10/2026]
- Añadimos nuevas pruebas de formato para la entidad `rol` y se corrigió la numeración acorde con el nuevo número de pruebas [1/10/2026]
- Añadimos nuevas pruebas de formato en la entidad `rolaccionfuncionalidad` y se corrigió la numeración con el nuevo número de pruebas [1/10/2026]
- Corrregimos fallos de numeración y ortograficos en `usuario_test`
- Corregimos un test `true` de formato de `dni` en la entidad `usuario`
- Añadir pruebas de casos vacios y casos limite en la entidad `usuario`
- Añadir el número de horas de cada participante a `ET1_IU262711`
- Modificaciones en `foto_persona` y `nuevo_foto_persona` para adaptarse a nueva información recibida através del foro de dudas. En concreto hacer pruebas y tests de ADD, EDIT y SEARCH de todos los campos, aunque no se usen en el formulario. En este caso aclararemos que `nuevo_foto_persona` es una imagen nueva que no está guardada en la base de datos y `foto_persona` es una referencia a una imagen existente en la base de datos ya introducida.
- Se han añadido más pruebas de limite, formatos, tamaño minimo... a todas las entidades en el proyecto, ademas de corregir y ordenar las que ya estaban en usuario [6/10/2026]
- Corregimos el tipo de campo de `id_rol` en la entidad `usuario` siguiendo criterio no odficial de Rodeiro qur dijo en el grupo IU_2 (me va a matar este hombre) [6/10/2026]
- Corrección de elementos tipo `select`par FK de entidades [7/10/2026]
- Corrección de resultado de pruebas SEARCH vacías [7/10/2026]
- Añadido entorno de pruebas [7/10/2026]
- Corrección en la tabla de tareas de Hiba para eliminar elementos sobrantes [8/10/2026]

