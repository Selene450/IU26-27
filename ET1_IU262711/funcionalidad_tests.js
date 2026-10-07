var funcionalidad_def_tests = [
    //id funcionalidad
    //ADD
    ['funcionalidad', 'id_funcionalidad', 'input', 1, 'Validar min_size de id_funcionalidad en  ADD', 'min_size', 'ADD', 'id_funcionalidad_min_size_KO', 'El campo id_funcionalidad debe tener al menos 1 caracter'],
    ['funcionalidad', 'id_funcionalidad', 'input', 2, 'Validar max_size de id_funcionalidad en  ADD', 'max_size', 'ADD', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['funcionalidad', 'id_funcionalidad', 'input', 3, 'Validar format de id_funcionalidad en  ADD', 'format', 'ADD', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['funcionalidad', 'id_funcionalidad', 'input', 4, 'Validar id_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'id_funcionalidad correcto'],
    //EDIT
    ['funcionalidad', 'id_funcionalidad', 'input', 5, 'Validar min_size de id_funcionalidad en  EDIT', 'min_size', 'EDIT', 'id_funcionalidad_min_size_KO', 'El campo id_funcionalidad debe tener al menos 1 caracter'],
    ['funcionalidad', 'id_funcionalidad', 'input', 6, 'Validar max_size de id_funcionalidad en  EDIT', 'max_size', 'EDIT', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['funcionalidad', 'id_funcionalidad', 'input', 7, 'Validar format de id_funcionalidad en  EDIT', 'format', 'EDIT', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['funcionalidad', 'id_funcionalidad', 'input', 8, 'Validar id_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'id_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad', 'id_funcionalidad', 'input', 9, 'Validar max_size de id_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['funcionalidad', 'id_funcionalidad', 'input', 10, 'Validar format de id_funcionalidad en  SEARCH', 'format', 'SEARCH', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['funcionalidad', 'id_funcionalidad', 'input', 11, 'Validar id_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'id_funcionalidad correcto'],
    //nombre_funcionalidad
    //ADD
    ['funcionalidad', 'nombre_funcionalidad', 'input', 12, 'Validar min_size de nombre_funcionalidad en  ADD', 'min_size', 'ADD', 'nombre_funcionalidad_min_size_KO', 'El campo nombre_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 13, 'Validar max_size de nombre_funcionalidad en  ADD', 'max_size', 'ADD', 'nombre_funcionalidad_max_size_KO', 'El campo nombre_funcionalidad debe tener como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 14, 'Validar format de nombre_funcionalidad en  ADD', 'format', 'ADD', 'nombre_funcionalidad_format_KO', 'El campo nombre_funcionalidad debe ser alfabetico con ñ'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 15, 'Validar nombre_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'nombre_funcionalidad correcto'],
    //EDIT
    ['funcionalidad', 'nombre_funcionalidad', 'input', 16, 'Validar min_size de nombre_funcionalidad en  EDIT', 'min_size', 'EDIT', 'nombre_funcionalidad_min_size_KO', 'El campo nombre_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 17, 'Validar max_size de nombre_funcionalidad en  EDIT', 'max_size', 'EDIT', 'nombre_funcionalidad_max_size_KO', 'El campo nombre_funcionalidad debe tener como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 18, 'Validar format de nombre_funcionalidad en  EDIT', 'format', 'EDIT', 'nombre_funcionalidad_format_KO', 'El campo nombre_funcionalidad debe ser alfabetico con ñ'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 19, 'Validar nombre_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'nombre_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad', 'nombre_funcionalidad', 'input', 20, 'Validar max_size de nombre_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'nombre_funcionalidad_max_size_KO', 'El campo nombre_funcionalidad debe tener como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 21, 'Validar format de nombre_funcionalidad en  SEARCH', 'format', 'SEARCH', 'nombre_funcionalidad_format_KO', 'El campo nombre_funcionalidad debe ser alfabetico con ñ'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 22, 'Validar nombre_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_funcionalidad correcto'],
    //descrip_funcionalidad
    //ADD
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 23, 'Validar min_size de descrip_funcionalidad en  ADD', 'min_size', 'ADD', 'descrip_funcionalidad_min_size_KO', 'El campo descrip_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 24, 'Validar max_size de descrip_funcionalidad en  ADD', 'max_size', 'ADD', 'descrip_funcionalidad_max_size_KO', 'El campo descrip_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 25, 'Validar format de descrip_funcionalidad en  ADD', 'format', 'ADD', 'descrip_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 26, 'Validar descrip_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'descrip_funcionalidad correcto'],
    //EDIT
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 27, 'Validar min_size de descrip_funcionalidad en  EDIT', 'min_size', 'EDIT', 'descrip_funcionalidad_min_size_KO', 'El campo descrip_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 28, 'Validar max_size de descrip_funcionalidad en  EDIT', 'max_size', 'EDIT', 'descrip_funcionalidad_max_size_KO', 'El campo descrip_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 29, 'Validar format de descrip_funcionalidad en  EDIT', 'format', 'EDIT', 'descrip_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 30, 'Validar descrip_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'descrip_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 31, 'Validar max_size de descrip_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'descrip_funcionalidad_max_size_KO', 'El campo descrip_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 32, 'Validar format de descrip_funcionalidad en  SEARCH', 'format', 'SEARCH', 'descrip_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 33, 'Validar descrip_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'descrip_funcionalidad correcto']
];

var funcionalidad_pruebas = [
    //id_funcionalidad
    //ADD
    ['funcionalidad', 'id_funcionalidad', 1, 1, 'ADD', { 'id_funcionalidad': '' }, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 1, 2, 'ADD', {}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 2, 3, 'ADD', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 4, 'ADD', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 5, 'ADD', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 6, 'ADD', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 7, 'ADD', { 'id_funcionalidad': ' ' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 4, 8, 'ADD', { 'id_funcionalidad': '1' }, true],
    ['funcionalidad', 'id_funcionalidad', 4, 9, 'ADD', { 'id_funcionalidad': '12345678901' }, true],
    ['funcionalidad', 'id_funcionalidad', 4, 10, 'ADD', { 'id_funcionalidad': '1234' }, true],
    //EDIT
    ['funcionalidad', 'id_funcionalidad', 5, 11, 'EDIT', { 'id_funcionalidad': '' }, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 5, 12, 'EDIT', {}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 6, 13, 'EDIT', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 14, 'EDIT', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 15, 'EDIT', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 16, 'EDIT', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 17, 'EDIT', { 'id_funcionalidad': ' 1' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 8, 18, 'EDIT', { 'id_funcionalidad': '1' }, true],
    ['funcionalidad', 'id_funcionalidad', 8, 19, 'EDIT', { 'id_funcionalidad': '12345678901' }, true],
    ['funcionalidad', 'id_funcionalidad', 8, 20, 'EDIT', { 'id_funcionalidad': '1234' }, true],
    //SEARCH
    ['funcionalidad', 'id_funcionalidad', 9, 21, 'SEARCH', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 22, 'SEARCH', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 23, 'SEARCH', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 24, 'SEARCH', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 11, 25, 'SEARCH', {}, true],
    ['funcionalidad', 'id_funcionalidad', 11, 26, 'SEARCH', {'id_funcionalidad': ''}, true],
    ['funcionalidad', 'id_funcionalidad', 11, 27, 'SEARCH', {'id_funcionalidad': ' '}, true],
    ['funcionalidad', 'id_funcionalidad', 11, 28, 'SEARCH', { 'id_funcionalidad': '1' }, true],
    ['funcionalidad', 'id_funcionalidad', 11, 29, 'SEARCH', { 'id_funcionalidad': '12345678901' }, true],
    ['funcionalidad', 'id_funcionalidad', 11, 30, 'SEARCH', { 'id_funcionalidad': '1234' }, true],

    //nombre_funcionalidad
    //ADD
    ['funcionalidad', 'nombre_funcionalidad', 12, 31, 'ADD', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 12, 32, 'ADD', {}, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 12, 33, 'ADD', { 'nombre_funcionalidad': '' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 34, 'ADD', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 35, 'ADD', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 36, 'ADD', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 15, 37, 'ADD', { 'nombre_funcionalidad': 'Abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 15, 38, 'ADD', { 'nombre_funcionalidad': 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 15, 39, 'ADD', { 'nombre_funcionalidad': 'Funcioñ' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 15, 40, 'ADD', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    //EDIT
    ['funcionalidad', 'nombre_funcionalidad', 16, 41, 'EDIT', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 16, 42, 'EDIT', {}, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 16, 43, 'EDIT', { 'nombre_funcionalidad': '' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 17, 44, 'EDIT', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 45, 'EDIT', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 46, 'EDIT', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 19, 47, 'EDIT', { 'nombre_funcionalidad': 'Abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 19, 48, 'EDIT', { 'nombre_funcionalidad': 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 19, 49, 'EDIT', { 'nombre_funcionalidad': 'Funcioñ' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 19, 50, 'EDIT', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    //SEARCH
    ['funcionalidad', 'nombre_funcionalidad', 20, 51, 'SEARCH', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 52, 'SEARCH', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 53, 'SEARCH', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 22, 54, 'SEARCH', {}, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 55, 'SEARCH', {'nombre_funcionalidad': ''}, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 56, 'SEARCH', { 'nombre_funcionalidad': 'Abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 57, 'SEARCH', { 'nombre_funcionalidad': 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 58, 'SEARCH', { 'nombre_funcionalidad': 'Funcioñ' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 59, 'SEARCH', { 'nombre_funcionalidad': 'Funcionalidad' }, true],

    //descrip_funcionalidad
    //ADD
    ['funcionalidad', 'descrip_funcionalidad', 23, 60, 'ADD', { 'descrip_funcionalidad': 'abc' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 23, 61, 'ADD', {}, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 23, 62, 'ADD', { 'descrip_funcionalidad': '' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 24, 63, 'ADD', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 64, 'ADD', { 'descrip_funcionalidad': 'a1234444' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 65, 'ADD', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 26, 66, 'ADD', { 'descrip_funcionalidad': 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 26, 67, 'ADD', { 'descrip_funcionalidad': 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 26, 68, 'ADD', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true],
    //EDIT
    ['funcionalidad', 'descrip_funcionalidad', 27, 69, 'EDIT', { 'descrip_funcionalidad': 'abc' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 27, 70, 'EDIT', {}, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 27, 71, 'EDIT', { 'descrip_funcionalidad': '' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 28, 72, 'EDIT', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 73, 'EDIT', { 'descrip_funcionalidad': '123,.' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 74, 'EDIT', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 30, 75, 'EDIT', { 'descrip_funcionalidad': 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 30, 76, 'EDIT', { 'descrip_funcionalidad': 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 30, 77, 'EDIT', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true],
    //SEARCH
    ['funcionalidad', 'descrip_funcionalidad', 31, 78, 'SEARCH', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 79, 'SEARCH', { 'descrip_funcionalidad': 'a123' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 80, 'SEARCH', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 33, 81, 'SEARCH', {}, true],
    ['funcionalidad', 'descrip_funcionalidad', 33, 82, 'SEARCH', {'descrip_funcionalidad': ''}, true],
    ['funcionalidad', 'descrip_funcionalidad', 33, 83, 'SEARCH', { 'descrip_funcionalidad': 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 33, 84, 'SEARCH', { 'descrip_funcionalidad': 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 33, 85, 'SEARCH', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true]
];
