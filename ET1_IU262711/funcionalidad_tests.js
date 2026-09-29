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
    //descripc_funcionalidad
    //ADD
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 23, 'Validar min_size de descripc_funcionalidad en  ADD', 'min_size', 'ADD', 'descripc_funcionalidad_min_size_KO', 'El campo descripc_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 24, 'Validar max_size de descripc_funcionalidad en  ADD', 'max_size', 'ADD', 'descripc_funcionalidad_max_size_KO', 'El campo descripc_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 25, 'Validar format de descripc_funcionalidad en  ADD', 'format', 'ADD', 'descripc_funcionalidad_format_KO', 'El campo descripc_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 26, 'Validar descripc_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'descripc_funcionalidad correcto'],
    //EDIT
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 27, 'Validar min_size de descripc_funcionalidad en  EDIT', 'min_size', 'EDIT', 'descripc_funcionalidad_min_size_KO', 'El campo descripc_funcionalidad debe tener al menos 5 caracteres'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 28, 'Validar max_size de descripc_funcionalidad en  EDIT', 'max_size', 'EDIT', 'descripc_funcionalidad_max_size_KO', 'El campo descripc_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 29, 'Validar format de descripc_funcionalidad en  EDIT', 'format', 'EDIT', 'descripc_funcionalidad_format_KO', 'El campo descripc_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 30, 'Validar descripc_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'descripc_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 31, 'Validar max_size de descripc_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'descripc_funcionalidad_max_size_KO', 'El campo descripc_funcionalidad debe tener como máximo 200 caracteres'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 32, 'Validar format de descripc_funcionalidad en  SEARCH', 'format', 'SEARCH', 'descripc_funcionalidad_format_KO', 'El campo descripc_funcionalidad debe ser alfabetico con ñ y signos de puntuación'],
    ['funcionalidad', 'descripc_funcionalidad', 'textarea', 33, 'Validar descripc_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'descripc_funcionalidad correcto'],
]

var funcionalidad_pruebas = [
    //id_funcionalidad
    ['funcionalidad', 'id_funcionalidad', 1, 1, 'ADD', { 'id_funcionalidad': '' }, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 2, 2, 'ADD', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 3, 'ADD', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 3, 4, 'ADD', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 4, 5, 'ADD', { 'id_funcionalidad': '1234' }, true],
    ['funcionalidad', 'id_funcionalidad', 5, 6, 'EDIT', { 'id_funcionalidad': '' }, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 6, 7, 'EDIT', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 8, 'EDIT', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 7, 9, 'EDIT', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 8, 10, 'EDIT', { 'id_funcionalidad': '1234' }, true],
    ['funcionalidad', 'id_funcionalidad', 9, 11, 'SEARCH', { 'id_funcionalidad': '123456789012' }, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 12, 'SEARCH', { 'id_funcionalidad': 'abc' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 10, 13, 'SEARCH', { 'id_funcionalidad': '12,3' }, 'id_funcionalidad_format_KO'],
    ['funcionalidad', 'id_funcionalidad', 11, 14, 'SEARCH', { 'id_funcionalidad': '1234' }, true],
    //nombre_funcionalidad
    ['funcionalidad', 'nombre_funcionalidad', 12, 15, 'ADD', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 16, 'ADD', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 17, 'ADD', { 'nombre_funcionalidad': 'abcñ123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 15, 18, 'ADD', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 16, 19, 'EDIT', { 'nombre_funcionalidad': 'abc' }, 'nombre_funcionalidad_min_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 17, 20, 'EDIT', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 21, 'EDIT', { 'nombre_funcionalidad': 'abcñ123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 19, 22, 'EDIT', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 20, 23, 'SEARCH', { 'nombre_funcionalidad': 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 24, 'SEARCH', { 'nombre_funcionalidad': 'abcñ123' }, 'nombre_funcionalidad_format_KO'],
    ['funcionalidad', 'nombre_funcionalidad', 22, 25, 'SEARCH', { 'nombre_funcionalidad': 'Funcionalidad' }, true],
    //descripc_funcionalidad
    ['funcionalidad', 'descripc_funcionalidad', 23, 26, 'ADD', { 'descripc_funcionalidad': 'abc' }, 'descripc_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 24, 27, 'ADD', { 'descripc_funcionalidad': 'a'.repeat(201) }, 'descripc_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 25, 28, 'ADD', { 'descripc_funcionalidad': 'a123,.' }, 'descripc_funcionalidad_format_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 25, 29, 'ADD', { 'descripc_funcionalidad': '@@@###' }, 'descripc_funcionalidad_format_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 26, 30, 'ADD', { 'descripc_funcionalidad': 'Descripción de la funcionalidad' }, true],
    ['funcionalidad', 'descripc_funcionalidad', 27, 31, 'EDIT', { 'descripc_funcionalidad': 'abc' }, 'descripc_funcionalidad_min_size_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 28, 32, 'EDIT', { 'descripc_funcionalidad': 'a'.repeat(201) }, 'descripc_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 29, 33, 'EDIT', { 'descripc_funcionalidad': '123,.' }, 'descripc_funcionalidad_format_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 29, 33, 'EDIT', { 'descripc_funcionalidad': '@@@###' }, 'descripc_funcionalidad_format_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 30, 34, 'EDIT', { 'descripc_funcionalidad': 'Descripción de la funcionalidad' }, true],
    ['funcionalidad', 'descripc_funcionalidad', 31, 35, 'SEARCH', { 'descripc_funcionalidad': 'a'.repeat(201) }, 'descripc_funcionalidad_max_size_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 32, 36, 'SEARCH', { 'descripc_funcionalidad': 'a123,.' }, 'descripc_funcionalidad_format_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 32, 37, 'SEARCH', { 'descripc_funcionalidad': '@@@###' }, 'descripc_funcionalidad_format_KO'],
    ['funcionalidad', 'descripc_funcionalidad', 33, 38, 'SEARCH', { 'descripc_funcionalidad': 'Descripción de la funcionalidad' }, true],
]
