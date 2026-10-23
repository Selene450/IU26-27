var rolaccionfuncionalidad_def_tests = [
    //campo id_rol
    //ADD
    ['rolaccionfuncionalidad', 'id_rol', 'select', 1, 'Validar min_size de id_rol en  ADD', 'min_size', 'ADD', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 2, 'Validar max_size de id_rol en  ADD', 'max_size', 'ADD', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 3, 'Validar format de id_rol en  ADD', 'format', 'ADD', 'id_rol_format_KO', 'El campo id_rol debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 4, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'id_rol correcto'],
    //EDIT
    ['rolaccionfuncionalidad', 'id_rol', 'select', 5, 'Validar min_size de id_rol en  EDIT', 'min_size', 'EDIT', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 6, 'Validar max_size de id_rol en  EDIT', 'max_size', 'EDIT', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 7, 'Validar format de id_rol en  EDIT', 'format', 'EDIT', 'id_rol_format_KO', 'El campo id_rol debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 8, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'id_rol correcto'],
    //SEARCH
    ['rolaccionfuncionalidad', 'id_rol', 'input', 9, 'Validar max_size de id_rol en  SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol tiene como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_rol', 'input', 10, 'Validar format de id_rol en  SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_rol', 'input', 11, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto'],

    //campo id_accion
    //ADD
    ['rolaccionfuncionalidad', 'id_accion', 'select', 12, 'Validar min_size de id_accion en  ADD', 'min_size', 'ADD', 'id_accion_min_size_KO', 'El campo id_accion debe tener al menos 1 caracter'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 13, 'Validar max_size de id_accion en  ADD', 'max_size', 'ADD', 'id_accion_max_size_KO', 'El campo id_accion debe tener como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 14, 'Validar format de id_accion en  ADD', 'format', 'ADD', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 15, 'Validar id_accion correcto en ADD', 'valid', 'ADD', true, 'id_accion correcto'],
    //EDIT
    ['rolaccionfuncionalidad', 'id_accion', 'select', 16, 'Validar min_size de id_accion en  EDIT', 'min_size', 'EDIT', 'id_accion_min_size_KO', 'El campo id_accion debe tener al menos 1 caracter'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 17, 'Validar max_size de id_accion en  EDIT', 'max_size', 'EDIT', 'id_accion_max_size_KO', 'El campo id_accion debe tener como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 18, 'Validar format de id_accion en  EDIT', 'format', 'EDIT', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 19, 'Validar id_accion correcto en EDIT', 'valid', 'EDIT', true, 'id_accion correcto'],
    //SEARCH
    ['rolaccionfuncionalidad', 'id_accion', 'input', 20, 'Validar max_size de id_accion en  SEARCH', 'max_size', 'SEARCH', 'id_accion_max_size_KO', 'El campo id_accion tiene como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_accion', 'input', 21, 'Validar format de id_accion en  SEARCH', 'format', 'SEARCH', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_accion', 'input', 22, 'Validar id_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'id_accion correcto'],

    //campo id_funcionalidad
    //ADD
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 23, 'Validar min_size de id_funcionalidad en  ADD', 'min_size', 'ADD', 'id_funcionalidad_min_size_KO', 'El campo id_funcionalidad debe tener al menos 1 caracter'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 24, 'Validar max_size de id_funcionalidad en  ADD', 'max_size', 'ADD', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 25, 'Validar format de id_funcionalidad en  ADD', 'format', 'ADD', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 26, 'Validar id_funcionalidad correcto en ADD', 'valid', 'ADD', true, 'id_funcionalidad correcto'],
    //EDIT
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 27, 'Validar min_size de id_funcionalidad en  EDIT', 'min_size', 'EDIT', 'id_funcionalidad_min_size_KO', 'El campo id_funcionalidad debe tener al menos 1 caracter'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 28, 'Validar max_size de id_funcionalidad en  EDIT', 'max_size', 'EDIT', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad debe tener como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 29, 'Validar format de id_funcionalidad en  EDIT', 'format', 'EDIT', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 30, 'Validar id_funcionalidad correcto en EDIT', 'valid', 'EDIT', true, 'id_funcionalidad correcto'],
    //SEARCH
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'input', 31, 'Validar max_size de id_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad tiene como máximo 11 caracteres'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'input', 32, 'Validar format de id_funcionalidad en  SEARCH', 'format', 'SEARCH', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'input', 33, 'Validar id_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'id_funcionalidad correcto']
];

var rolaccionfuncionalidad_pruebas = [

    //id_rol
    //ADD
    ['rolaccionfuncionalidad', 'id_rol', 1, 1, 'ADD', {'id_rol': ''}, 'id_rol_min_size_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 2, 2, 'ADD', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 3, 3, 'ADD', {'id_rol': 'abc'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 3, 4, 'ADD', {'id_rol': '12,3'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 3, 5, 'ADD', {'id_rol': '123@'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 3, 6, 'ADD', {'id_rol': ' '}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 4, 7, 'ADD', {'id_rol': '1'}, true],
    ['rolaccionfuncionalidad', 'id_rol', 4, 8, 'ADD', {'id_rol': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_rol', 4, 9, 'ADD', {'id_rol': '123'}, true],
    //EDIT
    ['rolaccionfuncionalidad', 'id_rol', 5, 10, 'EDIT', {'id_rol': ''}, 'id_rol_min_size_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 6, 11, 'EDIT', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 7, 12, 'EDIT', {'id_rol': 'abc'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 7, 13, 'EDIT', {'id_rol': '12,3'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 7, 14, 'EDIT', {'id_rol': '123@'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 7, 15, 'EDIT', {'id_rol': '1 '}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 8, 16, 'EDIT', {'id_rol': '1'}, true],
    ['rolaccionfuncionalidad', 'id_rol', 8, 17, 'EDIT', {'id_rol': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_rol', 8, 18, 'EDIT', {'id_rol': '123'}, true],
    //SEARCH
    ['rolaccionfuncionalidad', 'id_rol', 9, 19, 'SEARCH', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 10, 20, 'SEARCH', {'id_rol': 'abc'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 10, 21, 'SEARCH', {'id_rol': '12,3'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 10, 22, 'SEARCH', {'id_rol': '123@'}, 'id_rol_format_KO'],
    ['rolaccionfuncionalidad', 'id_rol', 11, 23, 'SEARCH', {'id_rol': ''}, true],
    ['rolaccionfuncionalidad', 'id_rol', 11, 24, 'SEARCH', {'id_rol': ' '}, true],
    ['rolaccionfuncionalidad', 'id_rol', 11, 25, 'SEARCH', {'id_rol': '1'}, true],
    ['rolaccionfuncionalidad', 'id_rol', 11, 26, 'SEARCH', {'id_rol': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_rol', 11, 27, 'SEARCH', {'id_rol': '123'}, true],

    //id_accion
    //ADD
    ['rolaccionfuncionalidad', 'id_accion', 12, 28, 'ADD', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 13, 29, 'ADD', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 14, 30, 'ADD', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 14, 31, 'ADD', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 14, 32, 'ADD', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 14, 33, 'ADD', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 15, 34, 'ADD', {'id_accion': '1'}, true],
    ['rolaccionfuncionalidad', 'id_accion', 15, 35, 'ADD', {'id_accion': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_accion', 15, 36, 'ADD', {'id_accion': '123'}, true],
    //EDIT
    ['rolaccionfuncionalidad', 'id_accion', 16, 37, 'EDIT', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 17, 38, 'EDIT', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 18, 39, 'EDIT', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 18, 40, 'EDIT', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 18, 41, 'EDIT', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 18, 42, 'EDIT', {'id_accion': ' 1'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 19, 43, 'EDIT', {'id_accion': '1'}, true],
    ['rolaccionfuncionalidad', 'id_accion', 19, 44, 'EDIT', {'id_accion': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_accion', 19, 45, 'EDIT', {'id_accion': '123'}, true],
    //SEARCH
    ['rolaccionfuncionalidad', 'id_accion', 20, 46, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 21, 47, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 21, 48, 'SEARCH', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 21, 49, 'SEARCH', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['rolaccionfuncionalidad', 'id_accion', 22, 50, 'SEARCH', {'id_accion': ''}, true],
    ['rolaccionfuncionalidad', 'id_accion', 22, 51, 'SEARCH', {'id_accion': ' '}, true],
    ['rolaccionfuncionalidad', 'id_accion', 22, 52, 'SEARCH', {'id_accion': '1'}, true],
    ['rolaccionfuncionalidad', 'id_accion', 22, 53, 'SEARCH', {'id_accion': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_accion', 22, 54, 'SEARCH', {'id_accion': '123'}, true],

    //id_funcionalidad
    //ADD
    ['rolaccionfuncionalidad', 'id_funcionalidad', 23, 55, 'ADD', {'id_funcionalidad': ''}, 'id_funcionalidad_min_size_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 24, 56, 'ADD', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 25, 57, 'ADD', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 25, 58, 'ADD', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 25, 59, 'ADD', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 25, 60, 'ADD', {'id_funcionalidad': ' '}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 26, 61, 'ADD', {'id_funcionalidad': '1'}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 26, 62, 'ADD', {'id_funcionalidad': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 26, 63, 'ADD', {'id_funcionalidad': '123'}, true],
    //EDIT
    ['rolaccionfuncionalidad', 'id_funcionalidad', 27, 64, 'EDIT', {'id_funcionalidad': ''}, 'id_funcionalidad_min_size_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 28, 65, 'EDIT', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 29, 66, 'EDIT', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 29, 67, 'EDIT', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 29, 68, 'EDIT', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 29, 69, 'EDIT', {'id_funcionalidad': '1 '}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 30, 70, 'EDIT', {'id_funcionalidad': '1'}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 30, 71, 'EDIT', {'id_funcionalidad': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 30, 72, 'EDIT', {'id_funcionalidad': '123'}, true],
    //SEARCH
    ['rolaccionfuncionalidad', 'id_funcionalidad', 31, 73, 'SEARCH', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 32, 74, 'SEARCH', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 32, 75, 'SEARCH', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 32, 76, 'SEARCH', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 33, 77, 'SEARCH', {'id_funcionalidad': ''}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 33, 78, 'SEARCH', {'id_funcionalidad': ' '}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 33, 79, 'SEARCH', {'id_funcionalidad': '1'}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 33, 80, 'SEARCH', {'id_funcionalidad': '12345678901'}, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 33, 81, 'SEARCH', {'id_funcionalidad': '123'}, true]
];
