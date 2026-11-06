/**
 * Definiciones de test de `funcionalidad`. Fila: [entidad, campo, tipo de campo, id, descripción, test, acción, código de error o `true`, mensaje mostrado].
 * @type {Array<Array<string|number|boolean>>}
 */
var funcionalidad_def_tests = [
    //SEARCH
    ['funcionalidad', 'id_funcionalidad', 'input', 1, 'Validar max_size de id_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['funcionalidad', 'id_funcionalidad', 'input', 2, 'Validar format de id_funcionalidad en  SEARCH', 'format', 'SEARCH', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['funcionalidad', 'id_funcionalidad', 'input', 3, 'Validar id_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'id_funcionalidad correcto'],
    //nombre_funcionalidad
    //ADD
    ['funcionalidad', 'nombre_funcionalidad', 'input', 4, 'Validar min_size de nombre_funcionalidad en  ADD', 'min_size', 'ADD', 'nombre_funcionalidad_min_size_KO', 'El campo nombre_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 5, 'Validar max_size de nombre_funcionalidad en  ADD', 'max_size', 'ADD', 'nombre_funcionalidad_max_size_KO', 'El campo nombre_funcionalidad debe tener como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 6, 'Validar format de nombre_funcionalidad en  ADD', 'format', 'ADD', 'nombre_funcionalidad_format_KO', 'El campo nombre_funcionalidad debe ser alfabetico con ñ'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 7, 'Validar nombre_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'nombre_funcionalidad correcto'],
    //EDIT
    ['funcionalidad', 'nombre_funcionalidad', 'input', 8, 'Validar min_size de nombre_funcionalidad en  EDIT', 'min_size', 'EDIT', 'nombre_funcionalidad_min_size_KO', 'El campo nombre_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 9, 'Validar max_size de nombre_funcionalidad en  EDIT', 'max_size', 'EDIT', 'nombre_funcionalidad_max_size_KO', 'El campo nombre_funcionalidad debe tener como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 10, 'Validar format de nombre_funcionalidad en  EDIT', 'format', 'EDIT', 'nombre_funcionalidad_format_KO', 'El campo nombre_funcionalidad debe ser alfabetico con ñ'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 11, 'Validar nombre_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'nombre_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad', 'nombre_funcionalidad', 'input', 12, 'Validar max_size de nombre_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'nombre_funcionalidad_max_size_KO', 'El campo nombre_funcionalidad debe tener como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 13, 'Validar format de nombre_funcionalidad en  SEARCH', 'format', 'SEARCH', 'nombre_funcionalidad_format_KO', 'El campo nombre_funcionalidad debe ser alfabetico con ñ'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 14, 'Validar nombre_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_funcionalidad correcto'],
    //descrip_funcionalidad
    //ADD
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 15, 'Validar min_size de descrip_funcionalidad en  ADD', 'min_size', 'ADD', 'descrip_funcionalidad_min_size_KO', 'El campo descrip_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 16, 'Validar max_size de descrip_funcionalidad en  ADD', 'max_size', 'ADD', 'descrip_funcionalidad_max_size_KO', 'El campo descrip_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 17, 'Validar format de descrip_funcionalidad en  ADD', 'format', 'ADD', 'descrip_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 18, 'Validar descrip_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'descrip_funcionalidad correcto'],
    //EDIT
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 19, 'Validar min_size de descrip_funcionalidad en  EDIT', 'min_size', 'EDIT', 'descrip_funcionalidad_min_size_KO', 'El campo descrip_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 20, 'Validar max_size de descrip_funcionalidad en  EDIT', 'max_size', 'EDIT', 'descrip_funcionalidad_max_size_KO', 'El campo descrip_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 21, 'Validar format de descrip_funcionalidad en  EDIT', 'format', 'EDIT', 'descrip_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 22, 'Validar descrip_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'descrip_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 23, 'Validar max_size de descrip_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'descrip_funcionalidad_max_size_KO', 'El campo descrip_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 24, 'Validar format de descrip_funcionalidad en  SEARCH', 'format', 'SEARCH', 'descrip_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 25, 'Validar descrip_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'descrip_funcionalidad correcto']
];

/**
 * Pruebas de `funcionalidad`. Fila: [entidad, campo, id de la definición, id de la prueba, acción, datos de entrada, resultado esperado].
 * @type {Array<Array<string|number|boolean|Object>>}
 */
var funcionalidad_pruebas = [
    //SEARCH
    ['funcionalidad', 'id_funcionalidad', 1, 1, 'SEARCH', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 2, 2, 'SEARCH', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 2, 3, 'SEARCH', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 2, 4, 'SEARCH', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 5, 'SEARCH', {'id_funcionalidad': ''}, true],
    ['funcionalidad', 'id_funcionalidad', 3, 6, 'SEARCH', {'id_funcionalidad': ' '}, true],
    ['funcionalidad', 'id_funcionalidad', 3, 7, 'SEARCH', { 'id_funcionalidad': '1' }, true],
    ['funcionalidad', 'id_funcionalidad', 3, 8, 'SEARCH', { 'id_funcionalidad': '12345678901' }, true],
    ['funcionalidad', 'id_funcionalidad', 3, 9, 'SEARCH', { 'id_funcionalidad': '1234' }, true],

    //nombre_funcionalidad
    //ADD
    ['funcionalidad', 'nombre_funcionalidad', 4, 10, 'ADD', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 4, 11, 'ADD', { 'nombre_funcionalidad': '' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 5, 12, 'ADD', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 6, 13, 'ADD', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 6, 14, 'ADD', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 7, 15, 'ADD', { 'nombre_funcionalidad': 'Abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 7, 16, 'ADD', { 'nombre_funcionalidad': 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 7, 17, 'ADD', { 'nombre_funcionalidad': 'Funcioñ' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 7, 18, 'ADD', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    //EDIT
    ['funcionalidad', 'nombre_funcionalidad', 8, 19, 'EDIT', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 8, 20, 'EDIT', { 'nombre_funcionalidad': '' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 9, 21, 'EDIT', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 10, 22, 'EDIT', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 10, 23, 'EDIT', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 11, 24, 'EDIT', { 'nombre_funcionalidad': 'Abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 11, 25, 'EDIT', { 'nombre_funcionalidad': 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 11, 26, 'EDIT', { 'nombre_funcionalidad': 'Funcioñ' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 11, 27, 'EDIT', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    //SEARCH
    ['funcionalidad', 'nombre_funcionalidad', 12, 28, 'SEARCH', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 29, 'SEARCH', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 30, 'SEARCH', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 31, 'SEARCH', {'nombre_funcionalidad': ''}, true],
    ['funcionalidad', 'nombre_funcionalidad', 14, 32, 'SEARCH', { 'nombre_funcionalidad': 'Abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 14, 33, 'SEARCH', { 'nombre_funcionalidad': 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 14, 34, 'SEARCH', { 'nombre_funcionalidad': 'Funcioñ' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 14, 35, 'SEARCH', { 'nombre_funcionalidad': 'Funcionalidad' }, true],

    //descrip_funcionalidad
    //ADD
    ['funcionalidad', 'descrip_funcionalidad', 15, 36, 'ADD', { 'descrip_funcionalidad': 'abc' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 15, 37, 'ADD', { 'descrip_funcionalidad': '' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 16, 38, 'ADD', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 17, 39, 'ADD', { 'descrip_funcionalidad': 'a1234444' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 17, 40, 'ADD', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 18, 41, 'ADD', { 'descrip_funcionalidad': 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 18, 42, 'ADD', { 'descrip_funcionalidad': 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 18, 43, 'ADD', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true],
    //EDIT
    ['funcionalidad', 'descrip_funcionalidad', 19, 44, 'EDIT', { 'descrip_funcionalidad': 'abc' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 19, 45, 'EDIT', { 'descrip_funcionalidad': '' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 20, 46, 'EDIT', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 21, 47, 'EDIT', { 'descrip_funcionalidad': '123,.' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 21, 48, 'EDIT', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 22, 49, 'EDIT', { 'descrip_funcionalidad': 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 22, 50, 'EDIT', { 'descrip_funcionalidad': 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 22, 51, 'EDIT', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true],
    //SEARCH
    ['funcionalidad', 'descrip_funcionalidad', 23, 52, 'SEARCH', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 24, 53, 'SEARCH', { 'descrip_funcionalidad': 'a123' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 24, 54, 'SEARCH', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 55, 'SEARCH', {'descrip_funcionalidad': ''}, true],
    ['funcionalidad', 'descrip_funcionalidad', 25, 56, 'SEARCH', { 'descrip_funcionalidad': 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 25, 57, 'SEARCH', { 'descrip_funcionalidad': 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 25, 58, 'SEARCH', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true]
];
