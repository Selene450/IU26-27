var rol_def_tests = [
    //SEARCH
    ['rol', 'id_rol', 'input', 1, 'Validar max_size de id_rol en SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol debe tener como maximo 11 caracteres'],
    ['rol', 'id_rol', 'input', 2, 'Validar format de id_rol en SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser numérico'],
    ['rol', 'id_rol', 'input', 3, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto'],

    //campo rol_name
    //ADD
    ['rol', 'rol_name', 'input', 4, 'Validar min_size de rol_name en ADD', 'min_size', 'ADD', 'rol_name_min_size_KO', 'El campo rol_name debe tener al menos 5 caracteres'],
    ['rol', 'rol_name', 'input', 5, 'Validar max_size de rol_name en ADD', 'max_size', 'ADD', 'rol_name_max_size_KO', 'El campo rol_name debe tener como maximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 6, 'Validar format de rol_name en ADD', 'format', 'ADD', 'rol_name_format_KO', 'El campo rol_name debe ser alfabetico'],
    ['rol', 'rol_name', 'input', 7, 'Validar rol_name correcto en ADD', 'valid', 'ADD', true, 'rol_name correcto'],
    //EDIT
    ['rol', 'rol_name', 'input', 8, 'Validar min_size de rol_name en EDIT', 'min_size', 'EDIT', 'rol_name_min_size_KO', 'El campo rol_name debe tener al menos 5 caracteres'],
    ['rol', 'rol_name', 'input', 9, 'Validar max_size de rol_name en EDIT', 'max_size', 'EDIT', 'rol_name_max_size_KO', 'El campo rol_name debe tener como maximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 10, 'Validar format de rol_name en EDIT', 'format', 'EDIT', 'rol_name_format_KO', 'El campo rol_name debe ser alfabetico incluyendo'],
    ['rol', 'rol_name', 'input', 11, 'Validar rol_name correcto en EDIT', 'valid', 'EDIT', true, 'rol_name correcto'],
    //SEARCH
    ['rol', 'rol_name', 'input', 12, 'Validar max_size de rol_name en SEARCH', 'max_size', 'SEARCH', 'rol_name_max_size_KO', 'El campo rol_name debe tener como maximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 13, 'Validar format de rol_name en SEARCH', 'format', 'SEARCH', 'rol_name_format_KO', 'El campo rol_name debe ser alfabetico incluyendo'],
    ['rol', 'rol_name', 'input', 14, 'Validar rol_name correcto en SEARCH', 'valid', 'SEARCH', true, 'rol_name correcto'],

    //campo rol_description
    //ADD
    ['rol', 'rol_description', 'input', 15, 'Validar min_size de rol_description en ADD', 'min_size', 'ADD', 'rol_description_min_size_KO', 'El campo rol_description debe tener al menos 5 caracteres'],
    ['rol', 'rol_description', 'input', 16, 'Validar max_size de rol_description en ADD', 'max_size', 'ADD', 'rol_description_max_size_KO', 'El campo rol_description debe tener como maximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 17, 'Validar format de rol_description en ADD', 'format', 'ADD', 'rol_description_format_KO', 'El campo rol_description debe ser alfanumerico incluyendo ñ, acentos, puntos, comas, guiones y espacios'],
    ['rol', 'rol_description', 'input', 18, 'Validar rol_description correcto en ADD', 'valid', 'ADD', true, 'rol_description correcto'],
    //EDIT
    ['rol', 'rol_description', 'input', 19, 'Validar min_size de rol_description en EDIT', 'min_size', 'EDIT', 'rol_description_min_size_KO', 'El campo rol_description debe tener al menos 5 caracteres'],
    ['rol', 'rol_description', 'input', 20, 'Validar max_size de rol_description en EDIT', 'max_size', 'EDIT', 'rol_description_max_size_KO', 'El campo rol_description debe tener como maximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 21, 'Validar format de rol_description en EDIT', 'format', 'EDIT', 'rol_description_format_KO', 'El campo rol_description debe ser alfanumerico incluyendo ñ, acentos, puntos, comas, guiones y espacios'],
    ['rol', 'rol_description', 'input', 22, 'Validar rol_description correcto en EDIT', 'valid', 'EDIT', true, 'rol_description correcto'],
    //SEARCH
    ['rol', 'rol_description', 'input', 23, 'Validar max_size de rol_description en SEARCH', 'max_size', 'SEARCH', 'rol_description_max_size_KO', 'El campo rol_description debe tener como maximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 24, 'Validar format de rol_description en SEARCH', 'format', 'SEARCH', 'rol_description_format_KO', 'El campo rol_description debe ser alfanumerico incluyendo ñ, acentos, puntos, comas, guiones y espacios'],
    ['rol', 'rol_description', 'input', 25, 'Validar rol_description correcto en SEARCH', 'valid', 'SEARCH', true, 'rol_description correcto']
];
var rol_pruebas = [
    
    //SEARCH
    ['rol', 'id_rol', 1, 1, 'SEARCH', {'id_rol': '123456789012'}, 'id_rol_max_size_KO'],
    ['rol', 'id_rol', 2, 2, 'SEARCH', {'id_rol': 'Admin123'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 2, 3, 'SEARCH', {'id_rol': '@@@@'}, 'id_rol_format_KO'],
    ['rol', 'id_rol', 3, 4, 'SEARCH', {'id_rol': ''}, true],
    ['rol', 'id_rol', 3, 5, 'SEARCH', {'id_rol': ' '}, true],
    ['rol', 'id_rol', 3, 6, 'SEARCH', {'id_rol': '1'}, true],
    ['rol', 'id_rol', 3, 7, 'SEARCH', {'id_rol': '12345678901'}, true],
    ['rol', 'id_rol', 3, 8, 'SEARCH', {'id_rol': '1234'}, true],

    //rol_name
    //ADD
    ['rol', 'rol_name', 4, 9, 'ADD', {'rol_name': 'Ad'}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 4, 10, 'ADD', {'rol_name': ''}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 5, 11, 'ADD', {'rol_name': 'a'.repeat(49)}, 'rol_name_max_size_KO'],
    ['rol', 'rol_name', 6, 12, 'ADD', {'rol_name': 'Admin123'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 6, 13, 'ADD', {'rol_name' : '@@@@@'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 6, 14, 'ADD', {'rol_name': 'Admin Name'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 7, 15, 'ADD', {'rol_name': 'Admin'}, true],
    ['rol', 'rol_name', 7, 16, 'ADD', {'rol_name': 'a'.repeat(48)}, true],
    ['rol', 'rol_name', 7, 17, 'ADD', {'rol_name': 'Administrador'}, true],
    //EDIT
    ['rol', 'rol_name', 8, 18, 'EDIT', {'rol_name': 'Ad'}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 8, 19, 'EDIT', {'rol_name': ''}, 'rol_name_min_size_KO'],
    ['rol', 'rol_name', 9, 20, 'EDIT', {'rol_name': 'a'.repeat(49)}, 'rol_name_max_size_KO'],
    ['rol', 'rol_name', 10, 21, 'EDIT', {'rol_name': 'Admin123'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 10, 22, 'EDIT', {'rol_name' : '@@@@@'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 10, 23, 'EDIT', {'rol_name': 'Admin Name'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 11, 24, 'EDIT', {'rol_name': 'Admin'}, true],
    ['rol', 'rol_name', 11, 25, 'EDIT', {'rol_name': 'a'.repeat(48)}, true],
    ['rol', 'rol_name', 11, 26, 'EDIT', {'rol_name': 'Administrador'}, true],
    //SEARCH
    ['rol', 'rol_name', 12, 27, 'SEARCH', {'rol_name': 'a'.repeat(49)}, 'rol_name_max_size_KO'],
    ['rol', 'rol_name', 13, 28, 'SEARCH', {'rol_name': 'Admin123'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 13, 29, 'SEARCH', {'rol_name' : '@@@@'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 13, 30, 'SEARCH', {'rol_name': 'Admin Name'}, 'rol_name_format_KO'],
    ['rol', 'rol_name', 14, 31, 'SEARCH', {'rol_name': ''}, true],
    ['rol', 'rol_name', 14, 32, 'SEARCH', {'rol_name': 'Admin'}, true],
    ['rol', 'rol_name', 14, 33, 'SEARCH', {'rol_name': 'a'.repeat(48)}, true],
    ['rol', 'rol_name', 14, 34, 'SEARCH', {'rol_name': 'Administrador'}, true],

    //rol_description
    //ADD
    ['rol', 'rol_description', 15, 35, 'ADD', {'rol_description': 'Cort'}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 15, 36, 'ADD', {'rol_description': ''}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 16, 37, 'ADD', {'rol_description': 'a'.repeat(201)}, 'rol_description_max_size_KO'],
    ['rol', 'rol_description', 17, 38, 'ADD', {'rol_description': 'Descripcion @@@ invalida %%'}, 'rol_description_format_KO'],
    ['rol', 'rol_description', 18, 39, 'ADD', {'rol_description': 'ABCDE'}, true],
    ['rol', 'rol_description', 18, 40, 'ADD', {'rol_description': 'a'.repeat(200)}, true],
    ['rol', 'rol_description', 18, 41, 'ADD', {'rol_description': 'Rol ñ, acción.'}, true],
    ['rol', 'rol_description', 18, 42, 'ADD', {'rol_description': 'Rol con acceso total al sistema'}, true],
    //EDIT
    ['rol', 'rol_description', 19, 43, 'EDIT', {'rol_description': 'Cort'}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 19, 44, 'EDIT', {'rol_description': ''}, 'rol_description_min_size_KO'],
    ['rol', 'rol_description', 20, 45, 'EDIT', {'rol_description': 'a'.repeat(201)}, 'rol_description_max_size_KO'],
    ['rol', 'rol_description', 21, 46, 'EDIT', {'rol_description': 'Descripcion @@@ invalida %%'}, 'rol_description_format_KO'],
    ['rol', 'rol_description', 22, 47, 'EDIT', {'rol_description': 'ABCDE'}, true],
    ['rol', 'rol_description', 22, 48, 'EDIT', {'rol_description': 'a'.repeat(200)}, true],
    ['rol', 'rol_description', 22, 49, 'EDIT', {'rol_description': 'Rol ñ, acción.'}, true],
    ['rol', 'rol_description', 22, 50, 'EDIT', {'rol_description': 'Rol con acceso total al sistema'}, true],
    //SEARCH
    ['rol', 'rol_description', 23, 51, 'SEARCH', {'rol_description': 'a'.repeat(201)}, 'rol_description_max_size_KO'],
    ['rol', 'rol_description', 24, 52, 'SEARCH', {'rol_description': 'Descripcion @@@ invalida %%'}, 'rol_description_format_KO'],
    ['rol', 'rol_description', 25, 53, 'SEARCH', {'rol_description': ''}, true],
    ['rol', 'rol_description', 25, 54, 'SEARCH', {'rol_description': 'ABCDE'}, true],
    ['rol', 'rol_description', 25, 55, 'SEARCH', {'rol_description': 'a'.repeat(200)}, true],
    ['rol', 'rol_description', 25, 56, 'SEARCH', {'rol_description': 'Rol ñ, acción.'}, true],
    ['rol', 'rol_description', 25, 57, 'SEARCH', {'rol_description': 'Rol con acceso total al sistema'}, true]
];
