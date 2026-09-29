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
]
var funcionalidad_accion_pruebas = [
    //id_funcionalidad
    ['funcionalidad_accion', 'id_funcionalidad', 1, 1, 'ADD', {'id_funcionalidad': ''}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 2, 2, 'ADD', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 3, 'ADD', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 4, 4, 'ADD', {'id_funcionalidad': '123'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 5, 5, 'EDIT', {'id_funcionalidad': ''}, 'id_funcionalidad_min_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 6, 6, 'EDIT', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 7, 7, 'EDIT', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 8, 8, 'EDIT', {'id_funcionalidad': '123'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 9, 9, 'SEARCH', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 10, 'SEARCH', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 11, 'SEARCH', {'id_funcionalidad': '123'}, true],
    //id_accion
    ['funcionalidad_accion', 'id_accion', 12, 12, 'ADD', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['funcionalidad_accion', 'id_accion', 13, 13, 'ADD', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 14, 14, 'ADD', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 15, 15, 'ADD', {'id_accion': '123'}, true],
    ['funcionalidad_accion', 'id_accion', 16, 16, 'EDIT', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['funcionalidad_accion', 'id_accion', 17, 17, 'EDIT', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 18, 18, 'EDIT', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 19, 19, 'EDIT', {'id_accion': '123'}, true],
    ['funcionalidad_accion', 'id_accion', 20, 20, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 21, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 22, 22, 'SEARCH', {'id_accion': '123'}, true]
]
