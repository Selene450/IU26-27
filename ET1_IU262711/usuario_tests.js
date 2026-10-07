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
    ['usuario', 'id_rol', 'select', 42, 'Validar max_size de id_rol en  SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol tiene como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'select', 43, 'Validar formato de id_rol en  SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'select', 44, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto']
];

var usuario_pruebas = [

    //dni
    //ADD
    ['usuario', 'dni', 1, 1, 'ADD', { 'dni': '123478A' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 1, 2, 'ADD', {}, 'dni_min_size_KO'],
    ['usuario', 'dni', 1, 3, 'ADD', { 'dni': '' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 2, 4, 'ADD', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 3, 5, 'ADD', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 6, 'ADD', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 7, 'ADD', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 8, 'ADD', { 'dni': '12345678Z ' }, 'dni_format_KO'],
    ['usuario', 'dni', 4, 9, 'ADD', { 'dni': '12345678Z' }, true],
    //EDIT
    ['usuario', 'dni', 5, 10, 'EDIT', { 'dni': '123478A' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 5, 11, 'EDIT', {}, 'dni_min_size_KO'],
    ['usuario', 'dni', 5, 12, 'EDIT', { 'dni': '' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 6, 13, 'EDIT', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 7, 14, 'EDIT', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 15, 'EDIT', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 16, 'EDIT', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 17, 'EDIT', { 'dni': '12345678Z ' }, 'dni_format_KO'],
    ['usuario', 'dni', 8, 18, 'EDIT', { 'dni': '12345678Z' }, true],
    //SEARCH
    ['usuario', 'dni', 9, 19, 'SEARCH', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 10, 20, 'SEARCH', { 'dni': 'ABCDEFGHZ' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 21, 'SEARCH', {}, 'dni_format_KO'],
    ['usuario', 'dni', 10, 22, 'SEARCH', { 'dni': '' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 23, 'SEARCH', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 24, 'SEARCH', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 25, 'SEARCH', { 'dni': '12345678Z ' }, 'dni_format_KO'],
    ['usuario', 'dni', 11, 26, 'SEARCH', { 'dni': '12345678Z' }, true],

    //usuario
    //ADD
    ['usuario', 'usuario', 12, 27, 'ADD', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 12, 28, 'ADD', {}, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 12, 29, 'ADD', { 'usuario': '' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 13, 30, 'ADD', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 14, 31, 'ADD', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 32, 'ADD', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 33, 'ADD', { 'usuario': 'ábc' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 34, 'ADD', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 35, 'ADD', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 36, 'ADD', { 'usuario': 'abcde ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 15, 37, 'ADD', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 15, 38, 'ADD', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 15, 39, 'ADD', { 'usuario': 'a'.repeat(45) }, true],
    //EDIT
    ['usuario', 'usuario', 16, 40, 'EDIT', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 16, 41, 'EDIT', {}, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 16, 42, 'EDIT', { 'usuario': '' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 17, 43, 'EDIT', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 18, 44, 'EDIT', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 45, 'EDIT', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 46, 'EDIT', { 'usuario': 'ábc' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 47, 'EDIT', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 48, 'EDIT', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 49, 'EDIT', { 'usuario': 'abcde ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 19, 50, 'EDIT', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 19, 51, 'EDIT', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 19, 52, 'EDIT', { 'usuario': 'a'.repeat(45) }, true],
    //SEARCH
    ['usuario', 'usuario', 20, 53, 'SEARCH', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 21, 54, 'SEARCH', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 55, 'SEARCH', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 56, 'SEARCH', { 'usuario': 'ábc' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 57, 'SEARCH', {}, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 58, 'SEARCH', { 'usuario': '' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 59, 'SEARCH', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 60, 'SEARCH', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 61, 'SEARCH', { 'usuario': 'abcde ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 22, 62, 'SEARCH', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 22, 63, 'SEARCH', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 22, 64, 'SEARCH', { 'usuario': 'a'.repeat(45) }, true],

    //contraseña
    //ADD
    ['usuario', 'contrasena', 23, 65, 'ADD', { 'contrasena': 'abc' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 23, 66, 'ADD', {}, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 23, 67, 'ADD', { 'contrasena': '' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 24, 68, 'ADD', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 25, 69, 'ADD', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 70, 'ADD', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 71, 'ADD', { 'contrasena': 'ábc' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 72, 'ADD', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 73, 'ADD', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 74, 'ADD', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 26, 75, 'ADD', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 26, 76, 'ADD', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 26, 77, 'ADD', { 'contrasena': 'a'.repeat(45) }, true],
    //EDIT
    ['usuario', 'contrasena', 27, 78, 'EDIT', { 'contrasena': 'abc' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 27, 79, 'EDIT', {}, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 27, 80, 'EDIT', { 'contrasena': '' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 28, 81, 'EDIT', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 29, 82, 'EDIT', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 83, 'EDIT', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 84, 'EDIT', { 'contrasena': 'ábc' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 85, 'EDIT', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 86, 'EDIT', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 87, 'EDIT', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 30, 88, 'EDIT', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 30, 89, 'EDIT', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 30, 90, 'EDIT', { 'contrasena': 'a'.repeat(45) }, true],
    //SEARCH
    ['usuario', 'contrasena', 31, 91, 'SEARCH', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 32, 92, 'SEARCH', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 93, 'SEARCH', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 94, 'SEARCH', { 'contrasena': 'ábc' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 95, 'SEARCH', {}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 96, 'SEARCH', { 'contrasena': '' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 97, 'SEARCH', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 98, 'SEARCH', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 99, 'SEARCH', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 33, 100, 'SEARCH', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 33, 101, 'SEARCH', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 33, 102, 'SEARCH', { 'contrasena': 'a'.repeat(45) }, true],

    //id_rol
    //ADD
    ['usuario', 'id_rol', 34, 103, 'ADD', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 34, 104, 'ADD', {}, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 34, 105, 'ADD', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 35, 106, 'ADD', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 36, 107, 'ADD', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 108, 'ADD', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 109, 'ADD', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 110, 'ADD', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 111, 'ADD', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 37, 112, 'ADD', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 37, 113, 'ADD', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 37, 114, 'ADD', { 'id_rol': '1'.repeat(11) }, true],
    //EDIT
    ['usuario', 'id_rol', 38, 115, 'EDIT', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 38, 116, 'EDIT', {}, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 38, 117, 'EDIT', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 39, 118, 'EDIT', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 40, 119, 'EDIT', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 120, 'EDIT', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 121, 'EDIT', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 122, 'EDIT', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 123, 'EDIT', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 41, 124, 'EDIT', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 41, 125, 'EDIT', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 41, 126, 'EDIT', { 'id_rol': '1'.repeat(11) }, true],
    //SEARCH
    ['usuario', 'id_rol', 42, 127, 'SEARCH', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 43, 128, 'SEARCH', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 129, 'SEARCH', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 130, 'SEARCH', {}, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 131, 'SEARCH', { 'id_rol': '' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 132, 'SEARCH', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 133, 'SEARCH', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 134, 'SEARCH', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 44, 135, 'SEARCH', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 44, 136, 'SEARCH', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 44, 137, 'SEARCH', { 'id_rol': '1'.repeat(11) }, true]
    
];
