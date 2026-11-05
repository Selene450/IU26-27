var funcionalidad_accion_def_tests = [
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 9, 'Validar max_size de id_funcionalidad en  SEARCH', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_KO', 'El campo id_funcionalidad tiene como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 10, 'Validar formato de id_funcionalidad en  SEARCH', 'format', 'SEARCH', 'id_funcionalidad_format_KO', 'El campo id_funcionalidad debe ser un número entero'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 11, 'Validar id_funcionalidad correcto en SEARCH', 'valid', 'SEARCH', true, 'id_funcionalidad correcto'],
    ['funcionalidad_accion', 'id_accion', 'select', 20, 'Validar max_size de id_accion en  SEARCH', 'max_size', 'SEARCH', 'id_accion_max_size_KO', 'El campo id_accion tiene como máximo 11 caracteres'],
    ['funcionalidad_accion', 'id_accion', 'select', 21, 'Validar formato de id_accion en SEARCH', 'format', 'SEARCH', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['funcionalidad_accion', 'id_accion', 'select', 22, 'Validar id_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'id_accion correcto']
];

var funcionalidad_accion_pruebas = [
    ['funcionalidad_accion', 'id_funcionalidad', 9, 19, 'SEARCH', {'id_funcionalidad': '123456789012'}, 'id_funcionalidad_max_size_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 20, 'SEARCH', {'id_funcionalidad': 'abc'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 21, 'SEARCH', {'id_funcionalidad': '12,3'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 22, 'SEARCH', {'id_funcionalidad': '123@'}, 'id_funcionalidad_format_KO'],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 23, 'SEARCH', {'id_funcionalidad': ''}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 24, 'SEARCH', {'id_funcionalidad': ' '}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 25, 'SEARCH', {'id_funcionalidad': '1'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 26, 'SEARCH', {'id_funcionalidad': '12345678901'}, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 27, 'SEARCH', {'id_funcionalidad': '123'}, true],
    ['funcionalidad_accion', 'id_accion', 20, 46, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 47, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 48, 'SEARCH', {'id_accion': '12,3'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 21, 49, 'SEARCH', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['funcionalidad_accion', 'id_accion', 22, 50, 'SEARCH', {'id_accion': ''}, true],
    ['funcionalidad_accion', 'id_accion', 22, 51, 'SEARCH', {'id_accion': ' '}, true],
    ['funcionalidad_accion', 'id_accion', 22, 52, 'SEARCH', {'id_accion': '1'}, true],
    ['funcionalidad_accion', 'id_accion', 22, 53, 'SEARCH', {'id_accion': '12345678901'}, true],
    ['funcionalidad_accion', 'id_accion', 22, 54, 'SEARCH', {'id_accion': '123'}, true]
];
