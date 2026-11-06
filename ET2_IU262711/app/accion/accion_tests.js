/**
 * Definiciones de test de `accion`. Fila: [entidad, campo, tipo de campo, id, descripción, test, acción, código de error o `true`, mensaje mostrado].
 * @type {Array<Array<string|number|boolean>>}
 */
var accion_def_tests =  [
    //SEARCH
    ['accion', 'id_accion', 'input', 1, 'Validar max_size de id_accion en  SEARCH', 'max_size', 'SEARCH', 'id_accion_max_size_KO', 'El campo id_accion tiene como máximo 11 caracteres'],
    ['accion', 'id_accion', 'input', 2, 'Validar format de id_accion en  SEARCH', 'format', 'SEARCH', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['accion', 'id_accion', 'input', 3, 'Validar id_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'id_accion correcto'],

    //campo nombre_accion
    //ADD
    ['accion', 'nombre_accion', 'input', 4, 'Validar min_size de nombre_accion en  ADD', 'min_size', 'ADD', 'nombre_accion_min_size_KO', 'El campo nombre_accion debe tener al menos 5 caracteres'],
    ['accion', 'nombre_accion', 'input', 5, 'Validar max_size de nombre_accion en  ADD', 'max_size', 'ADD', 'nombre_accion_max_size_KO', 'El campo nombre_accion debe tener como máximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 6, 'Validar format de nombre_accion en  ADD', 'format', 'ADD', 'nombre_accion_format_KO', 'El campo nombre_accion debe ser alfabético incluyendo ñ'],
    ['accion', 'nombre_accion', 'input', 7, 'Validar nombre_accion correcto en ADD', 'valid', 'ADD', true, 'nombre_accion correcto'],
    //EDIT
    ['accion', 'nombre_accion', 'input', 8, 'Validar min_size de nombre_accion en  EDIT', 'min_size', 'EDIT', 'nombre_accion_min_size_KO', 'El campo nombre_accion debe tener al menos 5 caracteres'],
    ['accion', 'nombre_accion', 'input', 9, 'Validar max_size de nombre_accion en  EDIT', 'max_size', 'EDIT', 'nombre_accion_max_size_KO', 'El campo nombre_accion debe tener como máximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 10, 'Validar format de nombre_accion en  EDIT', 'format', 'EDIT', 'nombre_accion_format_KO', 'El campo nombre_accion debe ser alfabético incluyendo ñ'],
    ['accion', 'nombre_accion', 'input', 11, 'Validar nombre_accion correcto en EDIT', 'valid', 'EDIT', true, 'nombre_accion correcto'],
    //SEARCH
    ['accion', 'nombre_accion', 'input', 12, 'Validar max_size de nombre_accion en  SEARCH', 'max_size', 'SEARCH', 'nombre_accion_max_size_KO', 'El campo nombre_accion tiene como máximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 13, 'Validar format de nombre_accion en  SEARCH', 'format', 'SEARCH', 'nombre_accion_format_KO', 'El campo nombre_accion debe ser alfabético incluyendo ñ'],
    ['accion', 'nombre_accion', 'input', 14, 'Validar nombre_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_accion correcto'],

    //campo descrip_accion
    //ADD
    ['accion', 'descrip_accion', 'textarea', 15, 'Validar min_size de descrip_accion en  ADD', 'min_size', 'ADD', 'descrip_accion_min_size_KO', 'El campo descrip_accion debe tener al menos 5 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 16, 'Validar max_size de descrip_accion en  ADD', 'max_size', 'ADD', 'descrip_accion_max_size_KO', 'El campo descrip_accion debe tener como máximo 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 17, 'Validar format de descrip_accion en  ADD', 'format', 'ADD', 'descrip_accion_format_KO', 'El campo descrip_accion debe ser alfabético incluyendo ñ, acentos y signos de puntuación'],
    ['accion', 'descrip_accion', 'textarea', 18, 'Validar descrip_accion correcto en ADD', 'valid', 'ADD', true, 'descrip_accion correcto'],
    //EDIT
    ['accion', 'descrip_accion', 'textarea', 19, 'Validar min_size de descrip_accion en  EDIT', 'min_size', 'EDIT', 'descrip_accion_min_size_KO', 'El campo descrip_accion debe tener al menos 5 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 20, 'Validar max_size de descrip_accion en  EDIT', 'max_size', 'EDIT', 'descrip_accion_max_size_KO', 'El campo descrip_accion debe tener como máximo 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 21, 'Validar format de descrip_accion en  EDIT', 'format', 'EDIT', 'descrip_accion_format_KO', 'El campo descrip_accion debe ser alfabético incluyendo ñ, acentos y signos de puntuación'],
    ['accion', 'descrip_accion', 'textarea', 22, 'Validar descrip_accion correcto en EDIT', 'valid', 'EDIT', true, 'descrip_accion correcto'],
    //SEARCH
    ['accion', 'descrip_accion', 'textarea', 23, 'Validar max_size de descrip_accion en  SEARCH', 'max_size', 'SEARCH', 'descrip_accion_max_size_KO', 'El campo descrip_accion tiene como máximo 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 24, 'Validar format de descrip_accion en  SEARCH', 'format', 'SEARCH', 'descrip_accion_format_KO', 'El campo descrip_accion debe ser alfabético incluyendo ñ, acentos y signos de puntuación'],
    ['accion', 'descrip_accion', 'textarea', 25, 'Validar descrip_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'descrip_accion correcto']
];

/**
 * Pruebas de `accion`. Fila: [entidad, campo, id de la definición, id de la prueba, acción, datos de entrada, resultado esperado].
 * @type {Array<Array<string|number|boolean|Object>>}
 */
var accion_pruebas = [

    //SEARCH
    ['accion', 'id_accion', 1, 1, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 2, 2, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 2, 3, 'SEARCH', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 2, 4, 'SEARCH', {'id_accion': 'abc123'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 5, 'SEARCH', {'id_accion': ''}, true],
    ['accion', 'id_accion', 3, 6, 'SEARCH', {'id_accion': ' '}, true],
    ['accion', 'id_accion', 3, 7, 'SEARCH', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 3, 8, 'SEARCH', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 3, 9, 'SEARCH', {'id_accion': '12345678910'}, true],

    //nombre_accion
    //ADD
    ['accion', 'nombre_accion', 4, 10, 'ADD', {'nombre_accion': 'abc'}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 4, 11, 'ADD', {'nombre_accion': ''}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 5, 12, 'ADD', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 6, 13, 'ADD', {'nombre_accion': '12345'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 6, 14, 'ADD', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 6, 15, 'ADD', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 6, 16, 'ADD', {'nombre_accion': '     '}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 7, 17, 'ADD', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 7, 18, 'ADD', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 7, 19, 'ADD', {'nombre_accion': 'AccionConÑ'}, true],
    //EDIT
    ['accion', 'nombre_accion', 8, 20, 'EDIT', {'nombre_accion': 'abc'}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 8, 21, 'EDIT', {'nombre_accion': ''}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 9, 22, 'EDIT', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 10, 23, 'EDIT', {'nombre_accion': '12345'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 10, 24, 'EDIT', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 10, 25, 'EDIT', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 10, 26, 'EDIT', {'nombre_accion': '     '}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 11, 27, 'EDIT', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 11, 28, 'EDIT', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 11, 29, 'EDIT', {'nombre_accion': 'AccionConÑ'}, true],
    //SEARCH
    ['accion', 'nombre_accion', 12, 30, 'SEARCH', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 13, 31, 'SEARCH', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 13, 32, 'SEARCH', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 13, 33, 'SEARCH', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 34, 'SEARCH', {'nombre_accion': ''}, true],
    ['accion', 'nombre_accion', 14, 35, 'SEARCH', {'nombre_accion': '     '}, true],
    ['accion', 'nombre_accion', 14, 36, 'SEARCH', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 14, 37, 'SEARCH', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 14, 38, 'SEARCH', {'nombre_accion': 'AccionConÑ'}, true],

    //descrip_accion
    //ADD
    ['accion', 'descrip_accion', 15, 39, 'ADD', {'descrip_accion': 'abc'}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 15, 40, 'ADD', {'descrip_accion': ''}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 16, 41, 'ADD', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 17, 42, 'ADD', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 17, 43, 'ADD', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 17, 44, 'ADD', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 18, 45, 'ADD', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 18, 46, 'ADD', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 18, 47, 'ADD', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true],
    //EDIT
    ['accion', 'descrip_accion', 19, 48, 'EDIT', {'descrip_accion': 'abc'}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 19, 49, 'EDIT', {'descrip_accion': ''}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 20, 50, 'EDIT', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 21, 51, 'EDIT', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 21, 52, 'EDIT', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 21, 53, 'EDIT', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 22, 54, 'EDIT', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 22, 55, 'EDIT', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 22, 56, 'EDIT', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true],
    //SEARCh
    ['accion', 'descrip_accion', 23, 57, 'SEARCH', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 24, 58, 'SEARCH', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 24, 59, 'SEARCH', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 24, 60, 'SEARCH', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 25, 61, 'SEARCH', {'descrip_accion': ''}, true],
    ['accion', 'descrip_accion', 25, 62, 'SEARCH', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 25, 63, 'SEARCH', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 25, 64, 'SEARCH', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true]
];
