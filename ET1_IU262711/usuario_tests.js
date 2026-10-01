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
    ['usuario', 'id_rol', 'input', 34, 'Validar min_size de id_rol en  ADD', 'min_size', 'ADD', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['usuario', 'id_rol', 'input', 35, 'Validar max_size de id_rol en  ADD', 'max_size', 'ADD', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 36, 'Validar formato de id_rol en  ADD', 'format', 'ADD', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 37, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'id_rol correcto'],
    //EDIT
    ['usuario', 'id_rol', 'input', 38, 'Validar min_size de id_rol en  EDIT', 'min_size', 'EDIT', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['usuario', 'id_rol', 'input', 39, 'Validar max_size de id_rol en  EDIT', 'max_size', 'EDIT', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 40, 'Validar formato de id_rol en  EDIT', 'format', 'EDIT', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 41, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'id_rol correcto'],
    //SEARCH
    ['usuario', 'id_rol', 'input', 42, 'Validar max_size de id_rol en  SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol tiene como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 43, 'Validar formato de id_rol en  SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 44, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto']
];

var usuario_pruebas = [ //pendiente de corregir los errores de validación de los campos de usuario
    //dni
    ['usuario', 'dni', 1, 1, 'ADD', { 'dni': '123478A' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 2, 2, 'ADD', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 3, 3, 'ADD', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 4, 4, 'ADD', { 'dni': '12345678Z' }, true],
    ['usuario', 'dni', 5, 5, 'EDIT', { 'dni': '123478A' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 6, 6, 'EDIT', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 7, 7, 'EDIT', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 8, 8, 'EDIT', { 'dni': '12345678Z'}, true],
    ['usuario', 'dni', 9, 9, 'SEARCH', { 'dni': '1234567890' }, 'dni_max_size_KO'],
    ['usuario', 'dni', 10, 10, 'SEARCH', { 'dni': 'ABCDEFGHZ' }, 'dni_format_KO'],
    ['usuario', 'dni', 11, 11, 'SEARCH', { 'dni': '12345678Z' }, true],
   
    //usuario
    ['usuario', 'usuario', 12, 12, 'ADD', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 13, 13, 'ADD', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 14, 14, 'ADD', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 15, 'ADD', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 16, 'ADD', {'usuario': 'ábc'}, 'usuario_format_KO'],
    ['usuario', 'usuario', 15, 17, 'ADD', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 16, 18, 'EDIT', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 17, 19, 'EDIT', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 18, 20, 'EDIT', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 21, 'EDIT', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 22, 'EDIT', {'usuario': 'ábc'}, 'usuario_format_KO'],
    ['usuario', 'usuario', 19, 23, 'EDIT', { 'usuario': 'Patoganso' }, true],
    ['usuario', 'usuario', 20, 24, 'SEARCH', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 21, 25, 'SEARCH', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 26, 'SEARCH', { 'usuario': 'abc123' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 27, 'SEARCH', {'usuario': 'ábc'}, 'usuario_format_KO'],
    ['usuario', 'usuario', 22, 28, 'SEARCH', { 'usuario': 'Patoganso' }, true],
    //contraseña
    ['usuario', 'contrasena', 23, 29, 'ADD', { 'contrasena': 'abc' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 24, 30, 'ADD', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 25, 31, 'ADD', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 32, 'ADD', { 'contrasena': 'abc123'}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 33, 'ADD', { 'contrasena': 'ábc'}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 26, 34, 'ADD', { 'contrasena': 'SuperSecreto' }, true],
    ['usuario', 'contrasena', 27, 35, 'EDIT', { 'contrasena': 'abc' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 28, 36, 'EDIT', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 29, 37, 'EDIT', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 38, 'EDIT', { 'contrasena': 'abc123'}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 39, 'EDIT', { 'contrasena': 'ábc'}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 30, 40, 'EDIT', { 'contrasena': 'SuperSecreto'}, true],
    ['usuario', 'contrasena', 31, 41, 'SEARCH', { 'contrasena': 'a'.repeat(46) }, 'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 32, 42, 'SEARCH', { 'contrasena': 'abcñ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 43, 'SEARCH', { 'contrasena': 'abc123' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 44, 'SEARCH', { 'contrasena': 'ábc'}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 33, 45, 'SEARCH', { 'contrasena': 'SuperSecreto' }, true],
    //id_rol
    ['usuario', 'id_rol', 34, 46, 'ADD', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 35, 47, 'ADD', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 36, 48, 'ADD', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 49, 'ADD', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 37, 50, 'ADD', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 38, 51, 'EDIT', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 39, 52, 'EDIT', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 40, 53, 'EDIT', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 54, 'EDIT', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 41, 55, 'EDIT', { 'id_rol': '1234' }, true],
    ['usuario', 'id_rol', 42, 56, 'SEARCH', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 43, 57, 'SEARCH', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 58, 'SEARCH', { 'id_rol': '12,3' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 44, 59, 'SEARCH', { 'id_rol': '1234' }, true]


     // =========================================================
    // PRUEBAS ADICIONALES: casos limite, valores nulos
    // =========================================================

    // ---------------------------------------------------------
    // Límites exactos válidos
    // ---------------------------------------------------------

    // dni: exactamente 9 caracteres
    ['usuario', 'dni', 4, 60, 'ADD', { 'dni': '12345678Z' }, true],
    ['usuario', 'dni', 8, 61, 'EDIT', { 'dni': '12345678Z' }, true],
    ['usuario', 'dni', 11, 62, 'SEARCH', { 'dni': '12345678Z' }, true],

    // usuario: mínimo exacto, 5 caracteres
    ['usuario', 'usuario', 15, 63, 'ADD', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 19, 64, 'EDIT', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 22, 65, 'SEARCH', { 'usuario': 'abcde' }, true],

    // usuario: máximo exacto, 45 caracteres
    ['usuario', 'usuario', 15, 66, 'ADD', { 'usuario': 'a'.repeat(45) }, true],
    ['usuario', 'usuario', 19, 67, 'EDIT', { 'usuario': 'a'.repeat(45) }, true],
    ['usuario', 'usuario', 22, 68, 'SEARCH', { 'usuario': 'a'.repeat(45) }, true],

    // contrasena: mínimo exacto, 8 caracteres
    ['usuario', 'contrasena', 26, 69, 'ADD', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 30, 70, 'EDIT', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 33, 71, 'SEARCH', { 'contrasena': 'abcdefgh' }, true],

    // contrasena: máximo exacto, 45 caracteres
    ['usuario', 'contrasena', 26, 72, 'ADD', { 'contrasena': 'a'.repeat(45) }, true],
    ['usuario', 'contrasena', 30, 73, 'EDIT', { 'contrasena': 'a'.repeat(45) }, true],
    ['usuario', 'contrasena', 33, 74, 'SEARCH', { 'contrasena': 'a'.repeat(45) }, true],

    // id_rol: mínimo exacto, 1 carácter
    ['usuario', 'id_rol', 37, 75, 'ADD', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 41, 76, 'EDIT', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 44, 77, 'SEARCH', { 'id_rol': '1' }, true],

    // id_rol: máximo exacto, 11 caracteres
    ['usuario', 'id_rol', 37, 78, 'ADD', { 'id_rol': '1'.repeat(11) }, true],
    ['usuario', 'id_rol', 41, 79, 'EDIT', { 'id_rol': '1'.repeat(11) }, true],
    ['usuario', 'id_rol', 44, 80, 'SEARCH', { 'id_rol': '1'.repeat(11) }, true],

    // ---------------------------------------------------------
    // Valores nulos, ausentes, vacíos y con espacios
    // ---------------------------------------------------------

    // dni en ADD
    ['usuario', 'dni', 1, 81, 'ADD', {}, 'dni_min_size_KO'],
    ['usuario', 'dni', 1, 83, 'ADD', { 'dni': '' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 3, 84, 'ADD', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 85, 'ADD', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 3, 86, 'ADD', { 'dni': '12345678Z ' }, 'dni_format_KO'],

    // dni en EDIT
    ['usuario', 'dni', 5, 87, 'EDIT', {}, 'dni_min_size_KO'],
    ['usuario', 'dni', 5, 88, 'EDIT', { 'dni': '' }, 'dni_min_size_KO'],
    ['usuario', 'dni', 7, 89, 'EDIT', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 90, 'EDIT', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 7, 91, 'EDIT', { 'dni': '12345678Z ' }, 'dni_format_KO'],

    // dni en SEARCH
    ['usuario', 'dni', 10, 92, 'SEARCH', {}, 'dni_format_KO'],
    ['usuario', 'dni', 10, 93, 'SEARCH', { 'dni': '' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 94, 'SEARCH', { 'dni': '         ' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 95, 'SEARCH', { 'dni': ' 12345678Z' }, 'dni_format_KO'],
    ['usuario', 'dni', 10, 96, 'SEARCH', { 'dni': '12345678Z ' }, 'dni_format_KO'],

    // usuario en ADD
    ['usuario', 'usuario', 12, 97, 'ADD', {}, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 12, 98, 'ADD', { 'usuario': '' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 14, 99, 'ADD', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 100, 'ADD', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 14, 101, 'ADD', { 'usuario': 'abcde ' }, 'usuario_format_KO'],

    // usuario en EDIT
    ['usuario', 'usuario', 16, 102, 'EDIT', {}, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 16, 103, 'EDIT', { 'usuario': '' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 18, 104, 'EDIT', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 105, 'EDIT', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 106, 'EDIT', { 'usuario': 'abcde ' }, 'usuario_format_KO'],

    // usuario en SEARCH
    ['usuario', 'usuario', 21, 107, 'SEARCH', {}, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 108, 'SEARCH', { 'usuario': '' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 109, 'SEARCH', { 'usuario': '     ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 110, 'SEARCH', { 'usuario': ' abcde' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 21, 111, 'SEARCH', { 'usuario': 'abcde ' }, 'usuario_format_KO'],

    // contrasena en ADD
    ['usuario', 'contrasena', 23, 112, 'ADD', {}, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 23, 113, 'ADD', { 'contrasena': '' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 25, 114, 'ADD', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 115, 'ADD', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 116, 'ADD', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],

    // contrasena en EDIT
    ['usuario', 'contrasena', 27, 117, 'EDIT', {}, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 27, 118, 'EDIT', { 'contrasena': '' }, 'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 29, 120, 'EDIT', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 121, 'EDIT', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 122, 'EDIT', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],

    // contrasena en SEARCH
    ['usuario', 'contrasena', 32, 123, 'SEARCH', {}, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 124, 'SEARCH', { 'contrasena': '' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 125, 'SEARCH', { 'contrasena': '        ' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 126, 'SEARCH', { 'contrasena': ' abcdefgh' }, 'contrasena_format_KO'],
    ['usuario', 'contrasena', 32, 127, 'SEARCH', { 'contrasena': 'abcdefgh ' }, 'contrasena_format_KO'],

    // id_rol en ADD
    ['usuario', 'id_rol', 34, 128, 'ADD', {}, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 34, 129, 'ADD', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 36, 130, 'ADD', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 131, 'ADD', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 36, 132, 'ADD', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],

    // id_rol en EDIT
    ['usuario', 'id_rol', 38, 133, 'EDIT', {}, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 38, 134, 'EDIT', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 40, 135, 'EDIT', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 136, 'EDIT', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 40, 137, 'EDIT', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],

    // id_rol en SEARCH
    ['usuario', 'id_rol', 43, 138, 'SEARCH', {}, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 139, 'SEARCH', { 'id_rol': '' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 140, 'SEARCH', { 'id_rol': ' ' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 141, 'SEARCH', { 'id_rol': ' 1234' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 43, 142, 'SEARCH', { 'id_rol': '1234 ' }, 'id_rol_format_KO'],

];
