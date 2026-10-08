var usuario_def_tests = [
    //campo dni
    //ADD
    ['usuario', 'dni', 'input', 1, 'Validar min_size de dni en ADD', 'min_size', 'ADD', 'dni_min_size_KO', 'El campo dni debe tener al menos 9 caracteres'],
    ['usuario', 'dni', 'input', 2, 'Validar max_size de dni en ADD', 'max_size', 'ADD', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['usuario', 'dni', 'input', 3, 'Validar format de dni en ADD', 'format', 'ADD', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['usuario', 'dni', 'input', 4, 'Validar dni correcto en ADD', 'valid', 'ADD', true, 'dni correcto'],
    //EDIT
    ['usuario', 'dni', 'input', 5, 'Validar min_size de dni en EDIT', 'min_size', 'EDIT', 'dni_min_size_KO', 'El campo dni debe tener al menos 9 caracteres'],
    ['usuario', 'dni', 'input', 6, 'Validar max_size de dni en EDIT', 'max_size', 'EDIT', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['usuario', 'dni', 'input', 7, 'Validar format de dni en EDIT', 'format', 'EDIT', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['usuario', 'dni', 'input', 8, 'Validar dni correcto en EDIT', 'valid', 'EDIT', true, 'dni correcto'],
    //SEARCH
    ['usuario', 'dni', 'input', 9, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['usuario', 'dni', 'input', 10, 'Validar format de dni en SEARCH', 'format', 'SEARCH', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['usuario', 'dni', 'input', 11, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'dni correcto'],

    //campo usuario
    //ADD
    ['usuario', 'usuario', 'input', 12, 'Validar min_size de usuario en  ADD', 'min_size', 'ADD', 'usuario_min_size_KO', 'El campo usuario debe tener al menos 5 caracteres'],
    ['usuario', 'usuario', 'input', 13, 'Validar max_size de usuario en  ADD', 'max_size', 'ADD', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 14, 'Validar format de usuario en  ADD', 'format', 'ADD', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 15, 'Validar usuario correcto en ADD', 'valid', 'ADD', true, 'usuario correcto'],
    //EDIT
    ['usuario', 'usuario', 'input', 16, 'Validar min_size de usuario en  EDIT', 'min_size', 'EDIT', 'usuario_min_size_KO', 'El campo usuario debe tener al menos 5 caracteres'],
    ['usuario', 'usuario', 'input', 17, 'Validar max_size de usuario en  EDIT', 'max_size', 'EDIT', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 18, 'Validar format de usuario en  EDIT', 'format', 'EDIT', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 19, 'Validar usuario correcto en EDIT', 'valid', 'EDIT', true, 'usuario correcto'],
    //SEARCH
    ['usuario', 'usuario', 'input', 20, 'Validar max_size de usuario en  SEARCH', 'max_size', 'SEARCH', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 21, 'Validar format de usuario en  SEARCH', 'format', 'SEARCH', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 22, "Validar usuario correcto en SEARCH", "valid", "SEARCH", true, "usuario correcto"],

    //campo contraseña
    //ADD
    ['usuario', 'contrasena', 'input', 23, 'Validar min_size de contraseña en  ADD', 'min_size', 'ADD', 'contrasena_min_size_KO', 'El campo contrasena debe tener al menos 8 caracteres'],
    ['usuario', 'contrasena', 'input', 24, 'Validar max_size de contraseña en  ADD', 'max_size', 'ADD', 'contrasena_max_size_KO', 'El campo contrasena debe tener como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 25, 'Validar format de contraseña en  ADD', 'format', 'ADD', 'contrasena_format_KO', 'El campo contrasena debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'contrasena', 'input', 26, 'Validar contraseña correcta en ADD', 'valid', 'ADD', true, 'contrasena correcta'],
    //EDIT
    ['usuario', 'contrasena', 'input', 27, 'Validar min_size de contraseña en  EDIT', 'min_size', 'EDIT', 'contrasena_min_size_KO', 'El campo contrasena debe tener al menos 8 caracteres'],
    ['usuario', 'contrasena', 'input', 28, 'Validar max_size de contraseña en  EDIT', 'max_size', 'EDIT', 'contrasena_max_size_KO', 'El campo contrasena debe tener como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 29, 'Validar format de contraseña en  EDIT', 'format', 'EDIT', 'contrasena_format_KO', 'El campo contrasena debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'contrasena', 'input', 30, 'Validar contraseña correcta en EDIT', 'valid', 'EDIT', true, 'contrasena correcta'],
    //SEARCH
    ['usuario', 'contrasena', 'input', 31, 'Validar max_size de contraseña en  SEARCH', 'max_size', 'SEARCH', 'contrasena_max_size_KO', 'El campo contrasena tiene como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 32, 'Validar format de contraseña en  SEARCH', 'format', 'SEARCH', 'contrasena_format_KO', 'El campo contrasena debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'contrasena', 'input', 33, "Validar contraseña correcta en SEARCH", "valid", "SEARCH", true, "contrasena correcta"],
    
    //campo id_rol
    //ADD
    ['usuario', 'id_rol', 'select', 34, 'Validar min_size de id_rol en  ADD', 'min_size', 'ADD', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['usuario', 'id_rol', 'select', 35, 'Validar max_size de id_rol en  ADD', 'max_size', 'ADD', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'select', 36, 'Validar formato de id_rol en  ADD', 'format', 'ADD', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'select', 37, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'id_rol correcto'],
    //EDIT
    ['usuario', 'id_rol', 'select', 38, 'Validar min_size de id_rol en  EDIT', 'min_size', 'EDIT', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['usuario', 'id_rol', 'select', 39, 'Validar max_size de id_rol en  EDIT', 'max_size', 'EDIT', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'select', 40, 'Validar formato de id_rol en  EDIT', 'format', 'EDIT', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'select', 41, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'id_rol correcto'],
    //SEARCH
    ['usuario', 'id_rol', 'input', 42, 'Validar max_size de id_rol en  SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol tiene como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 43, 'Validar formato de id_rol en  SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 44, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto']
];

var usuario_pruebas = [

    //dni
    //ADD
    ['usuario', 'dni', 1, 1, 'ADD', { 'dni': '123478A' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 1, 2, 'ADD', { 'dni': '' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 2, 3, 'ADD', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 3, 4, 'ADD', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 5, 'ADD', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 6, 'ADD', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 7, 'ADD', { 'dni': '12345678Z ' }, 'dni_format_KO'],
    ['usuario', 'dni', 4, 8, 'ADD', { 'dni': '12345678Z' }, true],
    //EDIT
    ['usuario', 'dni', 5, 9, 'EDIT', { 'dni': '123478A' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 5, 10, 'EDIT', { 'dni': '' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 6, 11, 'EDIT', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 7, 12, 'EDIT', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 13, 'EDIT', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 14, 'EDIT', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 15, 'EDIT', { 'dni': '12345678Z ' }, 'dni_format_KO'],
    ['usuario', 'dni', 8, 16, 'EDIT', { 'dni': '12345678Z' }, true],
    //SEARCH
    ['usuario', 'dni', 9, 17, 'SEARCH', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 10, 18, 'SEARCH', { 'dni': 'ABCDEFGHZ' }, 'dni_format_KO'],
    ['usuario', 'dni', 11, 19, 'SEARCH', { 'dni': '' }, true],
    ['usuario', 'dni', 11, 20, 'SEARCH', { 'dni': '         ' }, true],
    ['usuario', 'dni', 10, 21, 'SEARCH', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 22, 'SEARCH', { 'dni': '12345678Z ' }, 'dni_format_KO'],
    ['usuario', 'dni', 11, 23, 'SEARCH', { 'dni': '12345678Z' }, true],

    //usuario
    //ADD
    ['usuario', 'usuario', 12, 24, 'ADD', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 12, 25, 'ADD', { 'usuario': '' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 13, 26, 'ADD', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 14, 27, 'ADD', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 28, 'ADD', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 29, 'ADD', { 'usuario': 'ábc' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 30, 'ADD', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 31, 'ADD', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 32, 'ADD', { 'usuario': 'abcde ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 15, 33, 'ADD', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 15, 34, 'ADD', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 15, 35, 'ADD', { 'usuario': 'a'.repeat(45) }, true],
    //EDIT
    ['usuario', 'usuario', 16, 36, 'EDIT', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 16, 37, 'EDIT', { 'usuario': '' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 17, 38, 'EDIT', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 18, 39, 'EDIT', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 40, 'EDIT', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 41, 'EDIT', { 'usuario': 'ábc' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 42, 'EDIT', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 43, 'EDIT', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 44, 'EDIT', { 'usuario': 'abcde ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 19, 45, 'EDIT', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 19, 46, 'EDIT', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 19, 47, 'EDIT', { 'usuario': 'a'.repeat(45) }, true],
    //SEARCH
    ['usuario', 'usuario', 20, 48, 'SEARCH', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 21, 49, 'SEARCH', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 50, 'SEARCH', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 51, 'SEARCH', { 'usuario': 'ábc' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 22, 52, 'SEARCH', { 'usuario': '' }, true],
    ['usuario', 'usuario', 22, 53, 'SEARCH', { 'usuario': '     ' }, true],
    ['usuario', 'usuario', 21, 54, 'SEARCH', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 55, 'SEARCH', { 'usuario': 'abcde ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 22, 56, 'SEARCH', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 22, 57, 'SEARCH', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 22, 58, 'SEARCH', { 'usuario': 'a'.repeat(45) }, true],

    //contraseña
    //ADD
    ['usuario', 'contrasena', 23, 59, 'ADD', { 'contrasena': 'abc' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 23, 60, 'ADD', { 'contrasena': '' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 24, 61, 'ADD', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 25, 62, 'ADD', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 63, 'ADD', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 64, 'ADD', { 'contrasena': 'ábc' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 65, 'ADD', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 66, 'ADD', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 67, 'ADD', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 26, 68, 'ADD', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 26, 69, 'ADD', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 26, 70, 'ADD', { 'contrasena': 'a'.repeat(45) }, true],
    //EDIT
    ['usuario', 'contrasena', 27, 71, 'EDIT', { 'contrasena': 'abc' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 27, 72, 'EDIT', { 'contrasena': '' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 28, 73, 'EDIT', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 29, 74, 'EDIT', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 75, 'EDIT', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 76, 'EDIT', { 'contrasena': 'ábc' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 77, 'EDIT', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 78, 'EDIT', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 79, 'EDIT', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 30, 80, 'EDIT', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 30, 81, 'EDIT', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 30, 82, 'EDIT', { 'contrasena': 'a'.repeat(45) }, true],
    //SEARCH
    ['usuario', 'contrasena', 31, 83, 'SEARCH', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 32, 84, 'SEARCH', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 85, 'SEARCH', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 86, 'SEARCH', { 'contrasena': 'ábc' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 33, 87, 'SEARCH', { 'contrasena': '' }, true],
    ['usuario', 'contrasena', 33, 88, 'SEARCH', { 'contrasena': '        ' }, true],
    ['usuario', 'contrasena', 32, 89, 'SEARCH', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 90, 'SEARCH', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 33, 91, 'SEARCH', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 33, 92, 'SEARCH', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 33, 93, 'SEARCH', { 'contrasena': 'a'.repeat(45) }, true],

    //id_rol
    //ADD
    ['usuario', 'id_rol', 34, 94, 'ADD', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 35, 95, 'ADD', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 36, 96, 'ADD', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 97, 'ADD', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 98, 'ADD', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 99, 'ADD', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 100, 'ADD', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 37, 101, 'ADD', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 37, 102, 'ADD', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 37, 103, 'ADD', { 'id_rol': '1'.repeat(11) }, true],
    //EDIT
    ['usuario', 'id_rol', 38, 104, 'EDIT', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 39, 105, 'EDIT', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 40, 106, 'EDIT', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 107, 'EDIT', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 108, 'EDIT', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 109, 'EDIT', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 110, 'EDIT', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 41, 111, 'EDIT', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 41, 112, 'EDIT', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 41, 113, 'EDIT', { 'id_rol': '1'.repeat(11) }, true],
    //SEARCH
    ['usuario', 'id_rol', 42, 114, 'SEARCH', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 43, 115, 'SEARCH', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 116, 'SEARCH', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 44, 117, 'SEARCH', { 'id_rol': '' }, true],
    ['usuario', 'id_rol', 44, 118, 'SEARCH', { 'id_rol': ' ' }, true],
    ['usuario', 'id_rol', 43, 119, 'SEARCH', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 120, 'SEARCH', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 44, 121, 'SEARCH', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 44, 122, 'SEARCH', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 44, 123, 'SEARCH', { 'id_rol': '1'.repeat(11) }, true]
    
];
