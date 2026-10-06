var funcionalidad_accion_def_tests = [

    //id_funcionalidad
    //ADD
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 1, 'Validar min_size de id_funcionalidad en  ADD', 'min_size', 'ADD', 'id_funcionalidad_min_size_KO', 'El campo id_funcionalidad debe tener al menos 1 caracter'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 2, 'Validar max_size de id_funcionalidad en  ADD', 'max_size', 'ADD', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 3, 'Validar formato de id_funcionalidad en  ADD', 'format', 'ADD', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un numero entero'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 4, 'Validar id_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'id_funcionalidad correcto'],
    //EDIT
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 5, 'Validar min_size de id_funcionalidad en  EDIT', 'min_size', 'EDIT', 'id_funcionalidad_min_size_KO', 'El campo id_funcionalidad debe tener al menos 1 caracter'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 6, 'Validar max_size de id_funcionalidad en  EDIT', 'max_size', 'EDIT', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 7, 'Validar formato de id_funcionalidad en  EDIT', 'format', 'EDIT', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un numero entero'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 8, 'Validar id_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'id_funcionalidad correcto'],
    //SEARCH
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 9, 'Validar max_size de id_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad tiene como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 10, 'Validar formato de id_funcionalidad en  SEARCH', 'format', 'SEARCH', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un numero entero'],
    ['funcionalidad_accion', 'id_funcionalidad', 'input', 11, 'Validar id_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'id_funcionalidad correcto'],

    //id_accion
    //ADD
    ['funcionalidad_accion', 'id_accion', 'input', 12, 'Validar min_size de id_accion en  ADD', 'min_size', 'ADD', 'id_accion_min_size_KO', 'El campo id_accion debe tener al menos 1 caracter'],
    ['funcionalidad_accion', 'id_accion', 'input', 13, 'Validar max_size de id_accion en  ADD', 'max_size', 'ADD', 'id_accion_max_size_KO', 'El campo id_accion debe tener como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_accion', 'input', 14, 'Validar formato de id_accion en  ADD', 'format', 'ADD', 'id_accion_format_KO', 'El campo id_accion debe ser un numero entero'],
    ['funcionalidad_accion', 'id_accion', 'input', 15, 'Validar id_accion correcto en ADD', 'valid', 'ADD', true, 'id_accion correcto'],
    //EDIT
    ['funcionalidad_accion', 'id_accion', 'input', 16, 'Validar min_size de id_accion en  EDIT', 'min_size', 'EDIT', 'id_accion_min_size_KO', 'El campo id_accion debe tener al menos 1 caracter'],
    ['funcionalidad_accion', 'id_accion', 'input', 17, 'Validar max_size de id_accion en  EDIT', 'max_size', 'EDIT', 'id_accion_max_size_KO', 'El campo id_accion debe tener como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_accion', 'input', 18, 'Validar formato de id_accion en  EDIT', 'format', 'EDIT', 'id_accion_format_KO', 'El campo id_accion debe ser un numero entero'],
    ['funcionalidad_accion', 'id_accion', 'input', 19, 'Validar id_accion correcto en EDIT', 'valid', 'EDIT', true, 'id_accion correcto'],
    //SEARCH
    ['funcionalidad_accion', 'id_accion', 'input', 20, 'Validar max_size de id_accion en  SEARCH', 'max_size', 'SEARCH', 'id_accion_max_size_KO', 'El campo id_accion tiene como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_accion', 'input', 21, 'Validar formato de id_accion en  SEARCH', 'format', 'SEARCH', 'id_accion_format_KO', 'El campo id_accion debe ser un numero entero'],
    ['funcionalidad_accion', 'id_accion', 'input', 22, 'Validar id_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'id_accion correcto']
];
var funcionalidad_accion_pruebas = [

    //id_funcionalidad
    //ADD
    ['funcionalidad_accion', 'id_funcionalidad', 1, 1, 'ADD', {'id_funcionalidad': ''}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 1, 2, 'ADD', {}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 2, 3, 'ADD', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 4, 'ADD', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 5, 'ADD', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 6, 'ADD', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 7, 'ADD', {'id_funcionalidad': ' '}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 4, 8, 'ADD', {'id_funcionalidad': '1'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 4, 9, 'ADD', {'id_funcionalidad': '12345678901'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 4, 10, 'ADD', {'id_funcionalidad': '123'}, true],
    //EDIT
    ['funcionalidad_accion', 'id_funcionalidad', 5, 11, 'EDIT', {'id_funcionalidad': ''}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 5, 12, 'EDIT', {}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 6, 13, 'EDIT', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 7, 14, 'EDIT', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 7, 15, 'EDIT', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 7, 16, 'EDIT', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 7, 17, 'EDIT', {'id_funcionalidad': ' 1'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 8, 18, 'EDIT', {'id_funcionalidad': '1'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 8, 19, 'EDIT', {'id_funcionalidad': '12345678901'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 8, 20, 'EDIT', {'id_funcionalidad': '123'}, true],
    //SEARCH
    ['funcionalidad_accion', 'id_funcionalidad', 9, 21, 'SEARCH', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 22, 'SEARCH', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 23, 'SEARCH', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 24, 'SEARCH', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 25, 'SEARCH', {}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 26, 'SEARCH', {'id_funcionalidad': ''}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 27, 'SEARCH', {'id_funcionalidad': ' '}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 28, 'SEARCH', {'id_funcionalidad': '1'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 29, 'SEARCH', {'id_funcionalidad': '12345678901'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 30, 'SEARCH', {'id_funcionalidad': '123'}, true],

    //id_accion
    //ADD
    ['funcionalidad_accion', 'id_accion', 12, 31, 'ADD', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['funcionalidad_accion', 'id_accion', 12, 32, 'ADD', {}, 'id_accion_min_size_KO'],
    ['funcionalidad_accion', 'id_accion', 13, 33, 'ADD', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 14, 34, 'ADD', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 14, 35, 'ADD', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 14, 36, 'ADD', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 14, 37, 'ADD', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 15, 38, 'ADD', {'id_accion': '1'}, true],
    ['funcionalidad_accion', 'id_accion', 15, 39, 'ADD', {'id_accion': '12345678901'}, true],
    ['funcionalidad_accion', 'id_accion', 15, 40, 'ADD', {'id_accion': '123'}, true],
    //EDIT
    ['funcionalidad_accion', 'id_accion', 16, 41, 'EDIT', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['funcionalidad_accion', 'id_accion', 16, 42, 'EDIT', {}, 'id_accion_min_size_KO'],
    ['funcionalidad_accion', 'id_accion', 17, 43, 'EDIT', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 18, 44, 'EDIT', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 18, 45, 'EDIT', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 18, 46, 'EDIT', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 18, 47, 'EDIT', {'id_accion': '1 '}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 19, 48, 'EDIT', {'id_accion': '1'}, true],
    ['funcionalidad_accion', 'id_accion', 19, 49, 'EDIT', {'id_accion': '12345678901'}, true],
    ['funcionalidad_accion', 'id_accion', 19, 50, 'EDIT', {'id_accion': '123'}, true],
    //SEARCH
    ['funcionalidad_accion', 'id_accion', 20, 51, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 52, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 53, 'SEARCH', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 54, 'SEARCH', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 55, 'SEARCH', {}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 56, 'SEARCH', {'id_accion': ''}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 57, 'SEARCH', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 22, 58, 'SEARCH', {'id_accion': '1'}, true],
    ['funcionalidad_accion', 'id_accion', 22, 59, 'SEARCH', {'id_accion': '12345678901'}, true],
    ['funcionalidad_accion', 'id_accion', 22, 60, 'SEARCH', {'id_accion': '123'}, true]
];
