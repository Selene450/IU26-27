var accion_def_tests =  [
    //campo id_accion
    //ADD
    ['accion', 'id_accion', 'input', 1, 'Validar min_size de id_accion en  ADD', 'min_size', 'ADD', 'id_accion_min_size_KO', 'El campo id_accion debe tener al menos 1 caracter'],
    ['accion', 'id_accion', 'input', 2, 'Validar max_size de id_accion en  ADD', 'max_size', 'ADD', 'id_accion_max_size_KO', 'El campo id_accion debe tener como máximo 11 caracteres'],
    ['accion', 'id_accion', 'input', 3, 'Validar format de id_accion en  ADD', 'format', 'ADD', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['accion', 'id_accion', 'input', 4, 'Validar id_accion correcto en ADD', 'valid', 'ADD', true, 'id_accion correcto'],
    //EDIT
    ['accion', 'id_accion', 'input', 5, 'Validar min_size de id_accion en  EDIT', 'min_size', 'EDIT', 'id_accion_min_size_KO', 'El campo id_accion debe tener al menos 1 caracter'],
    ['accion', 'id_accion', 'input', 6, 'Validar max_size de id_accion en  EDIT', 'max_size', 'EDIT', 'id_accion_max_size_KO', 'El campo id_accion debe tener como máximo 11 caracteres'],
    ['accion', 'id_accion', 'input', 7, 'Validar format de id_accion en  EDIT', 'format', 'EDIT', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['accion', 'id_accion', 'input', 8, 'Validar id_accion correcto en EDIT', 'valid', 'EDIT', true, 'id_accion correcto'],
    //SEARCH
    ['accion', 'id_accion', 'input', 9, 'Validar max_size de id_accion en  SEARCH', 'max_size', 'SEARCH', 'id_accion_max_size_KO', 'El campo id_accion tiene como máximo 11 caracteres'],
    ['accion', 'id_accion', 'input', 10, 'Validar format de id_accion en  SEARCH', 'format', 'SEARCH', 'id_accion_format_KO', 'El campo id_accion debe ser un número entero'],
    ['accion', 'id_accion', 'input', 11, 'Validar id_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'id_accion correcto'],

    //campo nombre_accion
    //ADD
    ['accion', 'nombre_accion', 'input', 12, 'Validar min_size de nombre_accion en  ADD', 'min_size', 'ADD', 'nombre_accion_min_size_KO', 'El campo nombre_accion debe tener al menos 5 caracteres'],
    ['accion', 'nombre_accion', 'input', 13, 'Validar max_size de nombre_accion en  ADD', 'max_size', 'ADD', 'nombre_accion_max_size_KO', 'El campo nombre_accion debe tener como máximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 14, 'Validar format de nombre_accion en  ADD', 'format', 'ADD', 'nombre_accion_format_KO', 'El campo nombre_accion debe ser alfabético incluyendo ñ'],
    ['accion', 'nombre_accion', 'input', 15, 'Validar nombre_accion correcto en ADD', 'valid', 'ADD', true, 'nombre_accion correcto'],
    //EDIT
    ['accion', 'nombre_accion', 'input', 16, 'Validar min_size de nombre_accion en  EDIT', 'min_size', 'EDIT', 'nombre_accion_min_size_KO', 'El campo nombre_accion debe tener al menos 5 caracteres'],
    ['accion', 'nombre_accion', 'input', 17, 'Validar max_size de nombre_accion en  EDIT', 'max_size', 'EDIT', 'nombre_accion_max_size_KO', 'El campo nombre_accion debe tener como máximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 18, 'Validar format de nombre_accion en  EDIT', 'format', 'EDIT', 'nombre_accion_format_KO', 'El campo nombre_accion debe ser alfabético incluyendo ñ'],
    ['accion', 'nombre_accion', 'input', 19, 'Validar nombre_accion correcto en EDIT', 'valid', 'EDIT', true, 'nombre_accion correcto'],
    //SEARCH
    ['accion', 'nombre_accion', 'input', 20, 'Validar max_size de nombre_accion en  SEARCH', 'max_size', 'SEARCH', 'nombre_accion_max_size_KO', 'El campo nombre_accion tiene como máximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 21, 'Validar format de nombre_accion en  SEARCH', 'format', 'SEARCH', 'nombre_accion_format_KO', 'El campo nombre_accion debe ser alfabético incluyendo ñ'],
    ['accion', 'nombre_accion', 'input', 22, 'Validar nombre_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_accion correcto'],

    //campo descrip_accion
    //ADD
    ['accion', 'descrip_accion', 'textarea', 23, 'Validar min_size de descrip_accion en  ADD', 'min_size', 'ADD', 'descrip_accion_min_size_KO', 'El campo descrip_accion debe tener al menos 5 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 24, 'Validar max_size de descrip_accion en  ADD', 'max_size', 'ADD', 'descrip_accion_max_size_KO', 'El campo descrip_accion debe tener como máximo 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 25, 'Validar format de descrip_accion en  ADD', 'format', 'ADD', 'descrip_accion_format_KO', 'El campo descrip_accion debe ser alfabético incluyendo ñ, acentos y signos de puntuación'],
    ['accion', 'descrip_accion', 'textarea', 26, 'Validar descrip_accion correcto en ADD', 'valid', 'ADD', true, 'descrip_accion correcto'],
    //EDIT
    ['accion', 'descrip_accion', 'textarea', 27, 'Validar min_size de descrip_accion en  EDIT', 'min_size', 'EDIT', 'descrip_accion_min_size_KO', 'El campo descrip_accion debe tener al menos 5 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 28, 'Validar max_size de descrip_accion en  EDIT', 'max_size', 'EDIT', 'descrip_accion_max_size_KO', 'El campo descrip_accion debe tener como máximo 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 29, 'Validar format de descrip_accion en  EDIT', 'format', 'EDIT', 'descrip_accion_format_KO', 'El campo descrip_accion debe ser alfabético incluyendo ñ, acentos y signos de puntuación'],
    ['accion', 'descrip_accion', 'textarea', 30, 'Validar descrip_accion correcto en EDIT', 'valid', 'EDIT', true, 'descrip_accion correcto'],
    //SEARCH
    ['accion', 'descrip_accion', 'textarea', 31, 'Validar max_size de descrip_accion en  SEARCH', 'max_size', 'SEARCH', 'descrip_accion_max_size_KO', 'El campo descrip_accion tiene como máximo 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 32, 'Validar format de descrip_accion en  SEARCH', 'format', 'SEARCH', 'descrip_accion_format_KO', 'El campo descrip_accion debe ser alfabético incluyendo ñ, acentos y signos de puntuación'],
    ['accion', 'descrip_accion', 'textarea', 33, 'Validar descrip_accion correcto en SEARCH', 'valid', 'SEARCH', true, 'descrip_accion correcto']
];

var accion_pruebas = [

    //id_accion
    //ADD
    ['accion', 'id_accion', 1, 1, 'ADD', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['accion', 'id_accion', 1, 2, 'ADD', {}, 'id_accion_min_size_KO'],
    ['accion', 'id_accion', 2, 3, 'ADD', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 3, 4, 'ADD', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 5, 'ADD', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 6, 'ADD', {'id_accion': 'abc223'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 7, 'ADD', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 4, 8, 'ADD', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 4, 9, 'ADD', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 4, 10, 'ADD', {'id_accion': '12345678910'}, true],
    //EDIT
    ['accion', 'id_accion', 5, 11, 'EDIT', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['accion', 'id_accion', 5, 12, 'EDIT', {}, 'id_accion_min_size_KO'],
    ['accion', 'id_accion', 6, 13, 'EDIT', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 7, 14, 'EDIT', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 7, 15, 'EDIT', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 7, 16, 'EDIT', {'id_accion': 'abc223'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 7, 17, 'EDIT', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 8, 18, 'EDIT', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 8, 19, 'EDIT', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 8, 20, 'EDIT', {'id_accion': '12345678910'}, true],
    //SEARCH
    ['accion', 'id_accion', 9, 21, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 10, 22, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 10, 23, 'SEARCH', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 10, 24, 'SEARCH', {'id_accion': 'abc123'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 11, 25, 'SEARCH', {}, true],
    ['accion', 'id_accion', 11, 26, 'SEARCH', {'id_accion': ''}, true],
    ['accion', 'id_accion', 11, 27, 'SEARCH', {'id_accion': ' '}, true],
    ['accion', 'id_accion', 11, 28, 'SEARCH', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 11, 29, 'SEARCH', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 11, 30, 'SEARCH', {'id_accion': '12345678910'}, true],

    //nombre_accion
    //ADD
    ['accion', 'nombre_accion', 12, 31, 'ADD', {'nombre_accion': 'abc'}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 12, 32, 'ADD', {}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 12, 33, 'ADD', {'nombre_accion': ''}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 13, 34, 'ADD', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 14, 35, 'ADD', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 36, 'ADD', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 37, 'ADD', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 38, 'ADD', {'nombre_accion': '     '}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 15, 39, 'ADD', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 15, 40, 'ADD', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 15, 41, 'ADD', {'nombre_accion': 'AccionConÑ'}, true],
    //EDIT
    ['accion', 'nombre_accion', 16, 42, 'EDIT', {'nombre_accion': 'abc'}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 16, 43, 'EDIT', {}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 16, 44, 'EDIT', {'nombre_accion': ''}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 17, 45, 'EDIT', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 18, 46, 'EDIT', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 18, 47, 'EDIT', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 18, 48, 'EDIT', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 18, 49, 'EDIT', {'nombre_accion': '     '}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 19, 50, 'EDIT', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 19, 51, 'EDIT', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 19, 52, 'EDIT', {'nombre_accion': 'AccionConÑ'}, true],
    //SEARCH
    ['accion', 'nombre_accion', 20, 53, 'SEARCH', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 21, 54, 'SEARCH', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 21, 55, 'SEARCH', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 21, 56, 'SEARCH', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 22, 57, 'SEARCH', {}, true],
    ['accion', 'nombre_accion', 22, 58, 'SEARCH', {'nombre_accion': ''}, true],
    ['accion', 'nombre_accion', 22, 59, 'SEARCH', {'nombre_accion': '     '}, true],
    ['accion', 'nombre_accion', 22, 60, 'SEARCH', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 22, 61, 'SEARCH', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 22, 62, 'SEARCH', {'nombre_accion': 'AccionConÑ'}, true],

    //descrip_accion
    //ADD
    ['accion', 'descrip_accion', 23, 63, 'ADD', {'descrip_accion': 'abc'}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 23, 64, 'ADD', {}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 23, 65, 'ADD', {'descrip_accion': ''}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 24, 66, 'ADD', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 25, 67, 'ADD', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 25, 68, 'ADD', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 25, 69, 'ADD', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 26, 70, 'ADD', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 26, 71, 'ADD', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 26, 72, 'ADD', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true],
    //EDIT
    ['accion', 'descrip_accion', 27, 73, 'EDIT', {'descrip_accion': 'abc'}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 27, 74, 'EDIT', {}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 27, 75, 'EDIT', {'descrip_accion': ''}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 28, 76, 'EDIT', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 29, 77, 'EDIT', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 29, 78, 'EDIT', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 29, 79, 'EDIT', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 30, 80, 'EDIT', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 30, 81, 'EDIT', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 30, 82, 'EDIT', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true],
    //SEARCh
    ['accion', 'descrip_accion', 31, 83, 'SEARCH', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 32, 84, 'SEARCH', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 32, 85, 'SEARCH', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 33, 86, 'SEARCH', {}, true],
    ['accion', 'descrip_accion', 33, 87, 'SEARCH', {'descrip_accion': ''}, true],
    ['accion', 'descrip_accion', 32, 88, 'SEARCH', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 33, 89, 'SEARCH', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 33, 90, 'SEARCH', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 33, 91, 'SEARCH', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true]
];
