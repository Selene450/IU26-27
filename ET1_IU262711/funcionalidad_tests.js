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
    ['funcionalidad', 'descrip_funcionalidad', 'textarea', 25, 'Validar format de descrip_funcionalidad en  ADD', 'format', 'ADD', 'descripc_funcionalidad_format_KO', 'El campo descrip_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
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
    ['funcionalidad', 'id_funcionalidad', 1, 1, 'ADD', { 'id_funcionalidad': '' }, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 2, 2, 'ADD', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 3, 'ADD', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 4, 'ADD', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 5, 'ADD', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 4, 6, 'ADD', { 'id_funcionalidad': '1234' }, true],
    ['funcionalidad', 'id_funcionalidad', 5, 7, 'EDIT', { 'id_funcionalidad': '' }, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 6, 8, 'EDIT', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 9, 'EDIT', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 10, 'EDIT', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 11, 'EDIT', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 8, 12, 'EDIT', { 'id_funcionalidad': '1234' }, true],
    ['funcionalidad', 'id_funcionalidad', 9, 13, 'SEARCH', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 14, 'SEARCH', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 15, 'SEARCH', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 16, 'SEARCH', { 'id_funcionalidad': '@@@,@,' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 11, 17, 'SEARCH', { 'id_funcionalidad': '1234' }, true],
    //nombre_funcionalidad
    ['funcionalidad', 'nombre_funcionalidad', 12, 18, 'ADD', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 19, 'ADD', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 20, 'ADD', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 21, 'ADD', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 15, 22, 'ADD', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 16, 23, 'EDIT', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 17, 24, 'EDIT', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 25, 'EDIT', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 26, 'EDIT', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 19, 27, 'EDIT', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 20, 28, 'SEARCH', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 29, 'SEARCH', { 'nombre_funcionalidad': 'abc123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 30, 'SEARCH', { 'nombre_funcionalidad': '@@@@@@@@,' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 22, 31, 'SEARCH', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    //descrip_funcionalidad
    ['funcionalidad', 'descrip_funcionalidad', 23, 32, 'ADD', { 'descrip_funcionalidad': 'abc' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 24, 33, 'ADD', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 34, 'ADD', { 'descrip_funcionalidad': 'a1234444' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 35, 'ADD', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 26, 36, 'ADD', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 27, 37, 'EDIT', { 'descrip_funcionalidad': 'abc' }, 'descrip_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 28, 38, 'EDIT', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 39, 'EDIT', { 'descrip_funcionalidad': '123,.' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 40, 'EDIT', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 30, 41, 'EDIT', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 31, 42, 'SEARCH', { 'descrip_funcionalidad': 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 43, 'SEARCH', { 'descrip_funcionalidad': 'a123' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 44, 'SEARCH', { 'descrip_funcionalidad': '@@@###' }, 'descrip_funcionalidad_format_KO'],
    ['funcionalidad', 'descrip_funcionalidad', 33, 45, 'SEARCH', { 'descrip_funcionalidad': 'Descripción de la funcionalidad' }, true]
];
