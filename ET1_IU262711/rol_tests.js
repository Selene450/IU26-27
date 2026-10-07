var rol_def_tests = [
    //campo id_rol
    //ADD
    ['rol', 'id_rol', 'input', 1, 'Validar min_size de id_rol en ADD', 'min_size', 'ADD', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracteres'],
    ['rol', 'id_rol', 'input', 2, 'Validar max_size de id_rol en ADD', 'max_size', 'ADD', 'id_rol_max_size_KO', 'El campo id_rol debe tener como maximo 11 caracteres'],
    ['rol', 'id_rol', 'input', 3, 'Validar format de id_rol en ADD', 'format', 'ADD', 'id_rol_format_KO', 'El campo id_rol debe ser numérico'],
    ['rol', 'id_rol', 'input', 4, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'id_rol correcto'],
    //EDIT
    ['rol', 'id_rol', 'input', 5, 'Validar min_size de id_rol en EDIT', 'min_size', 'EDIT', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracteres'],
    ['rol', 'id_rol', 'input', 6, 'Validar max_size de id_rol en EDIT', 'max_size', 'EDIT', 'id_rol_max_size_KO', 'El campo id_rol debe tener como maximo 11 caracteres'],
    ['rol', 'id_rol', 'input', 7, 'Validar format de id_rol en EDIT', 'format', 'EDIT', 'id_rol_format_KO', 'El campo id_rol debe ser numérico'],
    ['rol', 'id_rol', 'input', 8, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'id_rol correcto'],
    //SEARCH
    ['rol', 'id_rol', 'input', 9, 'Validar max_size de id_rol en SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol debe tener como maximo 11 caracteres'],
    ['rol', 'id_rol', 'input', 10, 'Validar format de id_rol en SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser numérico'],
    ['rol', 'id_rol', 'input', 11, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto'],

    //campo rol_name
    //ADD
    ['rol', 'rol_name', 'input', 12, 'Validar min_size de rol_name en ADD', 'min_size', 'ADD', 'rol_name_min_size_KO', 'El campo rol_name debe tener al menos 5 caracteres'],
    ['rol', 'rol_name', 'input', 13, 'Validar max_size de rol_name en ADD', 'max_size', 'ADD', 'rol_name_max_size_KO', 'El campo rol_name debe tener como maximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 14, 'Validar format de rol_name en ADD', 'format', 'ADD', 'rol_name_format_KO', 'El campo rol_name debe ser alfabetico'],
    ['rol', 'rol_name', 'input', 15, 'Validar rol_name correcto en ADD', 'valid', 'ADD', true, 'rol_name correcto'],
    //EDIT
    ['rol', 'rol_name', 'input', 16, 'Validar min_size de rol_name en EDIT', 'min_size', 'EDIT', 'rol_name_min_size_KO', 'El campo rol_name debe tener al menos 5 caracteres'],
    ['rol', 'rol_name', 'input', 17, 'Validar max_size de rol_name en EDIT', 'max_size', 'EDIT', 'rol_name_max_size_KO', 'El campo rol_name debe tener como maximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 18, 'Validar format de rol_name en EDIT', 'format', 'EDIT', 'rol_name_format_KO', 'El campo rol_name debe ser alfabetico incluyendo'],
    ['rol', 'rol_name', 'input', 19, 'Validar rol_name correcto en EDIT', 'valid', 'EDIT', true, 'rol_name correcto'],
    //SEARCH
    ['rol', 'rol_name', 'input', 20, 'Validar max_size de rol_name en SEARCH', 'max_size', 'SEARCH', 'rol_name_max_size_KO', 'El campo rol_name debe tener como maximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 21, 'Validar format de rol_name en SEARCH', 'format', 'SEARCH', 'rol_name_format_KO', 'El campo rol_name debe ser alfabetico incluyendo'],
    ['rol', 'rol_name', 'input', 22, 'Validar rol_name correcto en SEARCH', 'valid', 'SEARCH', true, 'rol_name correcto'],

    //campo rol_description
    //ADD
    ['rol', 'rol_description', 'input', 23, 'Validar min_size de rol_description en ADD', 'min_size', 'ADD', 'rol_description_min_size_KO', 'El campo rol_description debe tener al menos 5 caracteres'],
    ['rol', 'rol_description', 'input', 24, 'Validar max_size de rol_description en ADD', 'max_size', 'ADD', 'rol_description_max_size_KO', 'El campo rol_description debe tener como maximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 25, 'Validar format de rol_description en ADD', 'format', 'ADD', 'rol_description_format_KO', 'El campo rol_description debe ser alfanumerico incluyendo ñ, acentos, puntos, comas, guiones y espacios'],
    ['rol', 'rol_description', 'input', 26, 'Validar rol_description correcto en ADD', 'valid', 'ADD', true, 'rol_description correcto'],
    //EDIT
    ['rol', 'rol_description', 'input', 27, 'Validar min_size de rol_description en EDIT', 'min_size', 'EDIT', 'rol_description_min_size_KO', 'El campo rol_description debe tener al menos 5 caracteres'],
    ['rol', 'rol_description', 'input', 28, 'Validar max_size de rol_description en EDIT', 'max_size', 'EDIT', 'rol_description_max_size_KO', 'El campo rol_description debe tener como maximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 29, 'Validar format de rol_description en EDIT', 'format', 'EDIT', 'rol_description_format_KO', 'El campo rol_description debe ser alfanumerico incluyendo ñ, acentos, puntos, comas, guiones y espacios'],
    ['rol', 'rol_description', 'input', 30, 'Validar rol_description correcto en EDIT', 'valid', 'EDIT', true, 'rol_description correcto'],
    //SEARCH
    ['rol', 'rol_description', 'input', 31, 'Validar max_size de rol_description en SEARCH', 'max_size', 'SEARCH', 'rol_description_max_size_KO', 'El campo rol_description debe tener como maximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 32, 'Validar format de rol_description en SEARCH', 'format', 'SEARCH', 'rol_description_format_KO', 'El campo rol_description debe ser alfanumerico incluyendo ñ, acentos, puntos, comas, guiones y espacios'],
    ['rol', 'rol_description', 'input', 33, 'Validar rol_description correcto en SEARCH', 'valid', 'SEARCH', true, 'rol_description correcto']
];
var rol_pruebas = [
    
    //id_rol
    //ADD
    ['rol', 'id_rol', 1, 1, 'ADD', {'id_rol': ''}, 'id_rol_min_size_KO'],
    ['rol', 'id_rol', 2, 2, 'ADD', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rol', 'id_rol', 3, 3, 'ADD', {'id_rol': 'Admin123'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 3, 4, 'ADD', {'id_rol': '@@@@'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 3, 5, 'ADD', {'id_rol': ' '}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 4, 6, 'ADD', {'id_rol': '1'}, true],
    ['rol', 'id_rol', 4, 7, 'ADD', {'id_rol': '12345678901'}, true],
    ['rol', 'id_rol', 4, 8, 'ADD', {'id_rol': '1234'}, true],
    //EDIT
    ['rol', 'id_rol', 5, 9, 'EDIT', {'id_rol': ''}, 'id_rol_min_size_KO'],
    ['rol', 'id_rol', 6, 10, 'EDIT', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rol', 'id_rol', 7, 11, 'EDIT', {'id_rol': 'Admin123'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 7, 12, 'EDIT', {'id_rol': '@@@@'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 7, 13, 'EDIT', {'id_rol': '12a'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 8, 14, 'EDIT', {'id_rol': '1'}, true],
    ['rol', 'id_rol', 8, 15, 'EDIT', {'id_rol': '12345678901'}, true],
    ['rol', 'id_rol', 8, 16, 'EDIT', {'id_rol': '1234'}, true],
    //SEARCH
    ['rol', 'id_rol', 9, 17, 'SEARCH', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rol', 'id_rol', 10, 18, 'SEARCH', {'id_rol': 'Admin123'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 10, 19, 'SEARCH', {'id_rol': '@@@@'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 11, 20, 'SEARCH', {'id_rol': ''}, true],
    ['rol', 'id_rol', 11, 21, 'SEARCH', {'id_rol': ' '}, true],
    ['rol', 'id_rol', 11, 22, 'SEARCH', {'id_rol': '1'}, true],
    ['rol', 'id_rol', 11, 23, 'SEARCH', {'id_rol': '12345678901'}, true],
    ['rol', 'id_rol', 11, 24, 'SEARCH', {'id_rol': '1234'}, true],

    //rol_name
    //ADD
    ['rol', 'rol_name', 12, 25, 'ADD', {'rol_name': 'Ad'}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 12, 26, 'ADD', {'rol_name': ''}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 13, 27, 'ADD', {'rol_name': 'a'.repeat(49)}, 'rol_name_max_size_KO'],
    ['rol', 'rol_name', 14, 28, 'ADD', {'rol_name': 'Admin123'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 14, 29, 'ADD', {'rol_name' : '@@@@'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 14, 30, 'ADD', {'rol_name': 'Admin Name'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 15, 31, 'ADD', {'rol_name': 'Admin'}, true],
    ['rol', 'rol_name', 15, 32, 'ADD', {'rol_name': 'a'.repeat(48)}, true],
    ['rol', 'rol_name', 15, 33, 'ADD', {'rol_name': 'Administrador'}, true],
    //EDIT
    ['rol', 'rol_name', 16, 34, 'EDIT', {'rol_name': 'Ad'}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 16, 35, 'EDIT', {'rol_name': ''}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 17, 36, 'EDIT', {'rol_name': 'a'.repeat(49)}, 'rol_name_max_size_KO'],
    ['rol', 'rol_name', 18, 37, 'EDIT', {'rol_name': 'Admin123'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 18, 38, 'EDIT', {'rol_name' : '@@@@'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 18, 39, 'EDIT', {'rol_name': 'Admin Name'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 19, 40, 'EDIT', {'rol_name': 'Admin'}, true],
    ['rol', 'rol_name', 19, 41, 'EDIT', {'rol_name': 'a'.repeat(48)}, true],
    ['rol', 'rol_name', 19, 42, 'EDIT', {'rol_name': 'Administrador'}, true],
    //SEARCH
    ['rol', 'rol_name', 20, 43, 'SEARCH', {'rol_name': 'a'.repeat(49)}, 'rol_name_max_size_KO'],
    ['rol', 'rol_name', 21, 44, 'SEARCH', {'rol_name': 'Admin123'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 21, 45, 'SEARCH', {'rol_name' : '@@@@'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 22, 46, 'SEARCH', {'rol_name': ''}, true],
    ['rol', 'rol_name', 21, 47, 'SEARCH', {'rol_name': 'Admin Name'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 22, 48, 'SEARCH', {'rol_name': 'Admin'}, true],
    ['rol', 'rol_name', 22, 49, 'SEARCH', {'rol_name': 'a'.repeat(48)}, true],
    ['rol', 'rol_name', 22, 50, 'SEARCH', {'rol_name': 'Administrador'}, true],

    //rol_description
    //ADD
    ['rol', 'rol_description', 23, 51, 'ADD', {'rol_description': 'Cort'}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 23, 52, 'ADD', {'rol_description': ''}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 24, 53, 'ADD', {'rol_description': 'a'.repeat(201)}, 'rol_description_max_size_KO'],
    ['rol', 'rol_description', 25, 54, 'ADD', {'rol_description': 'Descripcion @@@ invalida %%'}, 'rol_description_format_KO'],
    ['rol', 'rol_description', 26, 55, 'ADD', {'rol_description': 'ABCDE'}, true],
    ['rol', 'rol_description', 26, 56, 'ADD', {'rol_description': 'a'.repeat(200)}, true],
    ['rol', 'rol_description', 26, 57, 'ADD', {'rol_description': 'Rol ñ, acción.'}, true],
    ['rol', 'rol_description', 26, 58, 'ADD', {'rol_description': 'Rol con acceso total al sistema'}, true],
    //EDIT
    ['rol', 'rol_description', 27, 59, 'EDIT', {'rol_description': 'Cort'}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 27, 60, 'EDIT', {'rol_description': ''}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 28, 61, 'EDIT', {'rol_description': 'a'.repeat(201)}, 'rol_description_max_size_KO'],
    ['rol', 'rol_description', 29, 62, 'EDIT', {'rol_description': 'Descripcion @@@ invalida %%'}, 'rol_description_format_KO'],
    ['rol', 'rol_description', 30, 63, 'EDIT', {'rol_description': 'ABCDE'}, true],
    ['rol', 'rol_description', 30, 64, 'EDIT', {'rol_description': 'a'.repeat(200)}, true],
    ['rol', 'rol_description', 30, 65, 'EDIT', {'rol_description': 'Rol ñ, acción.'}, true],
    ['rol', 'rol_description', 30, 66, 'EDIT', {'rol_description': 'Rol con acceso total al sistema'}, true],
    //SEARCH
    ['rol', 'rol_description', 31, 67, 'SEARCH', {'rol_description': 'a'.repeat(201)}, 'rol_description_max_size_KO'],
    ['rol', 'rol_description', 32, 68, 'SEARCH', {'rol_description': 'Descripcion @@@ invalida %%'}, 'rol_description_format_KO'],
    ['rol', 'rol_description', 33, 69, 'SEARCH', {'rol_description': ''}, true],
    ['rol', 'rol_description', 33, 70, 'SEARCH', {'rol_description': 'ABCDE'}, true],
    ['rol', 'rol_description', 33, 71, 'SEARCH', {'rol_description': 'a'.repeat(200)}, true],
    ['rol', 'rol_description', 33, 72, 'SEARCH', {'rol_description': 'Rol ñ, acción.'}, true],
    ['rol', 'rol_description', 33, 73, 'SEARCH', {'rol_description': 'Rol con acceso total al sistema'}, true]
];
