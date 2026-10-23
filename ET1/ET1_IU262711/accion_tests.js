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
    ['accion', 'id_accion', 2, 2, 'ADD', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 3, 3, 'ADD', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 4, 'ADD', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 5, 'ADD', {'id_accion': 'abc223'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 3, 6, 'ADD', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 4, 7, 'ADD', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 4, 8, 'ADD', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 4, 9, 'ADD', {'id_accion': '12345678910'}, true],
    //EDIT
    ['accion', 'id_accion', 5, 10, 'EDIT', {'id_accion': ''}, 'id_accion_min_size_KO'],
    ['accion', 'id_accion', 6, 11, 'EDIT', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 7, 12, 'EDIT', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 7, 13, 'EDIT', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 7, 14, 'EDIT', {'id_accion': 'abc223'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 7, 15, 'EDIT', {'id_accion': ' '}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 8, 16, 'EDIT', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 8, 17, 'EDIT', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 8, 18, 'EDIT', {'id_accion': '12345678910'}, true],
    //SEARCH
    ['accion', 'id_accion', 9, 19, 'SEARCH', {'id_accion': '123456789012'}, 'id_accion_max_size_KO'],
    ['accion', 'id_accion', 10, 20, 'SEARCH', {'id_accion': 'abc'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 10, 21, 'SEARCH', {'id_accion': '123@'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 10, 22, 'SEARCH', {'id_accion': 'abc123'}, 'id_accion_format_KO'],
    ['accion', 'id_accion', 11, 23, 'SEARCH', {'id_accion': ''}, true],
    ['accion', 'id_accion', 11, 24, 'SEARCH', {'id_accion': ' '}, true],
    ['accion', 'id_accion', 11, 25, 'SEARCH', {'id_accion': '1'}, true],
    ['accion', 'id_accion', 11, 26, 'SEARCH', {'id_accion': '123'}, true],
    ['accion', 'id_accion', 11, 27, 'SEARCH', {'id_accion': '12345678910'}, true],

    //nombre_accion
    //ADD
    ['accion', 'nombre_accion', 12, 28, 'ADD', {'nombre_accion': 'abc'}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 12, 29, 'ADD', {'nombre_accion': ''}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 13, 30, 'ADD', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 14, 31, 'ADD', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 32, 'ADD', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 33, 'ADD', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 14, 34, 'ADD', {'nombre_accion': '     '}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 15, 35, 'ADD', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 15, 36, 'ADD', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 15, 37, 'ADD', {'nombre_accion': 'AccionConÑ'}, true],
    //EDIT
    ['accion', 'nombre_accion', 16, 38, 'EDIT', {'nombre_accion': 'abc'}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 16, 39, 'EDIT', {'nombre_accion': ''}, 'nombre_accion_min_size_KO'],
    ['accion', 'nombre_accion', 17, 40, 'EDIT', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 18, 41, 'EDIT', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 18, 42, 'EDIT', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 18, 43, 'EDIT', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 18, 44, 'EDIT', {'nombre_accion': '     '}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 19, 45, 'EDIT', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 19, 46, 'EDIT', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 19, 47, 'EDIT', {'nombre_accion': 'AccionConÑ'}, true],
    //SEARCH
    ['accion', 'nombre_accion', 20, 48, 'SEARCH', {'nombre_accion': 'a'.repeat(49)}, 'nombre_accion_max_size_KO'],
    ['accion', 'nombre_accion', 21, 49, 'SEARCH', {'nombre_accion': '1234'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 21, 50, 'SEARCH', {'nombre_accion': 'acción'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 21, 51, 'SEARCH', {'nombre_accion': 'accion@'}, 'nombre_accion_format_KO'],
    ['accion', 'nombre_accion', 22, 52, 'SEARCH', {'nombre_accion': ''}, true],
    ['accion', 'nombre_accion', 22, 53, 'SEARCH', {'nombre_accion': '     '}, true],
    ['accion', 'nombre_accion', 22, 54, 'SEARCH', {'nombre_accion': 'Accio'}, true],
    ['accion', 'nombre_accion', 22, 55, 'SEARCH', {'nombre_accion': 'a'.repeat(48)}, true],
    ['accion', 'nombre_accion', 22, 56, 'SEARCH', {'nombre_accion': 'AccionConÑ'}, true],

    //descrip_accion
    //ADD
    ['accion', 'descrip_accion', 23, 57, 'ADD', {'descrip_accion': 'abc'}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 23, 58, 'ADD', {'descrip_accion': ''}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 24, 59, 'ADD', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 25, 60, 'ADD', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 25, 61, 'ADD', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 25, 62, 'ADD', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 26, 63, 'ADD', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 26, 64, 'ADD', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 26, 65, 'ADD', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true],
    //EDIT
    ['accion', 'descrip_accion', 27, 66, 'EDIT', {'descrip_accion': 'abc'}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 27, 67, 'EDIT', {'descrip_accion': ''}, 'descrip_accion_min_size_KO'],
    ['accion', 'descrip_accion', 28, 68, 'EDIT', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 29, 69, 'EDIT', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 29, 70, 'EDIT', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 29, 71, 'EDIT', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 30, 72, 'EDIT', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 30, 73, 'EDIT', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 30, 74, 'EDIT', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true],
    //SEARCh
    ['accion', 'descrip_accion', 31, 75, 'SEARCH', {'descrip_accion': 'a'.repeat(201)}, 'descrip_accion_max_size_KO'],
    ['accion', 'descrip_accion', 32, 76, 'SEARCH', {'descrip_accion': '@@@@@@@@@@@@@@@@@@@@@'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 32, 77, 'SEARCH', {'descrip_accion': 'Esta acccion se encargara de 123456789'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 32, 78, 'SEARCH', {'descrip_accion': 'Texto con @ no permitido'}, 'descrip_accion_format_KO'],
    ['accion', 'descrip_accion', 33, 79, 'SEARCH', {'descrip_accion': ''}, true],
    ['accion', 'descrip_accion', 33, 80, 'SEARCH', {'descrip_accion': 'abcde'}, true],
    ['accion', 'descrip_accion', 33, 81, 'SEARCH', {'descrip_accion': 'a'.repeat(200)}, true],
    ['accion', 'descrip_accion', 33, 82, 'SEARCH', {'descrip_accion': 'Descripción válida con acentos y signos de puntuación y ñ.'}, true]
];
