/**
 * Definiciones de test de `usuario`. Fila: [entidad, campo, tipo de campo, id, descripción, test, acción, código de error o `true`, mensaje mostrado].
 * @type {Array<Array<string|number|boolean>>}
 */
var usuario_def_tests = [
    //campo dni
    //ADD
    ['usuario', 'dni', 'input', 1, 'Validar min_size de dni en ADD', 'min_size', 'ADD', 'dni_min_size_KO', 'El DNI debe tener 9 caracteres'],
    ['usuario', 'dni', 'input', 2, 'Validar max_size de dni en ADD', 'max_size', 'ADD', 'dni_max_size_KO', 'El DNI no puede superar los 9 caracteres'],
    ['usuario', 'dni', 'input', 3, 'Validar format de dni en ADD', 'format', 'ADD', 'dni_format_KO', 'El DNI debe tener 8 números seguidos de una letra mayúscula'],
    ['usuario', 'dni', 'input', 4, 'Validar letra de control de dni en ADD', 'personalized', 'ADD', 'dni_personalized_validate_dni_KO', 'La letra de control del DNI no es válida'],
    ['usuario', 'dni', 'input', 5, 'Validar DNI correcto en ADD', 'personalized', 'ADD', true, 'DNI correcto'],
    //EDIT
    //Las PK no se pueden editar, por lo que no hay validaciones de dni en EDIT
    //SEARCH
    ['usuario', 'dni', 'input', 6, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['usuario', 'dni', 'input', 7, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'dni correcto'],
    //campo usuario
    //ADD
    ['usuario', 'usuario', 'input', 8, 'Validar min_size de usuario en  ADD', 'min_size', 'ADD', 'usuario_min_size_KO', 'El campo usuario debe tener al menos 5 caracteres'],
    ['usuario', 'usuario', 'input', 9, 'Validar max_size de usuario en  ADD', 'max_size', 'ADD', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 10, 'Validar format de usuario en  ADD', 'format', 'ADD', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 11, 'Validar usuario correcto en ADD', 'valid', 'ADD', true, 'usuario correcto'],
    //EDIT
    ['usuario', 'usuario', 'input', 12, 'Validar min_size de usuario en  EDIT', 'min_size', 'EDIT', 'usuario_min_size_KO', 'El campo usuario debe tener al menos 5 caracteres'],
    ['usuario', 'usuario', 'input', 13, 'Validar max_size de usuario en  EDIT', 'max_size', 'EDIT', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 14, 'Validar format de usuario en  EDIT', 'format', 'EDIT', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 15, 'Validar usuario correcto en EDIT', 'valid', 'EDIT', true, 'usuario correcto'],
    //SEARCH
    ['usuario', 'usuario', 'input', 16, 'Validar max_size de usuario en  SEARCH', 'max_size', 'SEARCH', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 17, 'Validar format de usuario en  SEARCH', 'format', 'SEARCH', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 18, "Validar usuario correcto en SEARCH", "valid", "SEARCH", true, "usuario correcto"],
    //campo contraseña
    //ADD
    ['usuario', 'contrasena', 'input', 19, 'Validar min_size de contraseña en  ADD', 'min_size', 'ADD', 'contrasena_min_size_KO', 'El campo contrasena debe tener al menos 8 caracteres'],
    ['usuario', 'contrasena', 'input', 20, 'Validar max_size de contraseña en  ADD', 'max_size', 'ADD', 'contrasena_max_size_KO', 'El campo contrasena debe tener como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 21, 'Validar format de contraseña en  ADD', 'format', 'ADD', 'contrasena_format_KO', 'El campo contrasena debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'contrasena', 'input', 22, 'Validar contraseña correcta en ADD', 'valid', 'ADD', true, 'contrasena correcta'],
    //EDIT
    ['usuario', 'contrasena', 'input', 23, 'Validar min_size de contraseña en  EDIT', 'min_size', 'EDIT', 'contrasena_min_size_KO', 'El campo contrasena debe tener al menos 8 caracteres'],
    ['usuario', 'contrasena', 'input', 24, 'Validar max_size de contraseña en  EDIT', 'max_size', 'EDIT', 'contrasena_max_size_KO', 'El campo contrasena debe tener como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 25, 'Validar format de contraseña en  EDIT', 'format', 'EDIT', 'contrasena_format_KO', 'El campo contrasena debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'contrasena', 'input', 26, 'Validar contraseña correcta en EDIT', 'valid', 'EDIT', true, 'contrasena correcta'],
    //SEARCH
    ['usuario', 'contrasena', 'input', 27, 'Validar max_size de contraseña en  SEARCH', 'max_size', 'SEARCH', 'contrasena_max_size_KO', 'El campo contrasena tiene como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 28, 'Validar format de contraseña en  SEARCH', 'format', 'SEARCH', 'contrasena_format_KO', 'El campo contrasena debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'contrasena', 'input', 29, "Validar contraseña correcta en SEARCH", "valid", "SEARCH", true, "contrasena correcta"],
    
    //campo id_rol
    //Ya se valida todo en la clase Rol
];
/**
 * Pruebas de `usuario`. Fila: [entidad, campo, id de la definición, id de la prueba, acción, datos de entrada, resultado esperado].
 * @type {Array<Array<string|number|boolean|Object>>}
 */
var usuario_pruebas = [
    //dni
    //ADD
    ['usuario', 'dni', 1, 1, 'ADD', { 'dni': '123478A' },'dni_min_size_KO'],
    ['usuario', 'dni', 1, 2, 'ADD', { 'dni': '' },'dni_min_size_KO'],
    ['usuario', 'dni', 2, 3, 'ADD', { 'dni': '1234567890' },'dni_max_size_KO'],
    ['usuario', 'dni', 3, 4, 'ADD', { 'dni': '1234567AZ' },'dni_format_KO'],
    ['usuario', 'dni', 3, 5, 'ADD', { 'dni': '         ' },'dni_format_KO'],
    ['usuario', 'dni', 3, 6, 'ADD', { 'dni': ' 1234567Z' },'dni_format_KO'],
    ['usuario', 'dni', 3, 7, 'ADD', { 'dni': '1234567Z ' },'dni_format_KO'],
    ['usuario', 'dni', 4, 8, 'ADD', { 'dni': '12345678A' },'dni_personalized_validate_dni_KO'],
    ['usuario', 'dni', 5, 9, 'ADD', { 'dni': '12345678Z' },true],

    //SEARCH
    ['usuario', 'dni', 6, 10, 'SEARCH', { 'dni': '1234567890' },'dni_max_size_KO'],
    ['usuario', 'dni', 7, 11, 'SEARCH', { 'dni': '' },true],
    ['usuario', 'dni', 7, 12, 'SEARCH', { 'dni': '         ' },true],
    ['usuario', 'dni', 7, 13, 'SEARCH', { 'dni': '12345678z' },true],
    ['usuario', 'dni', 7, 14, 'SEARCH', { 'dni': '12345' },true],
    //usuario
    //ADD
    ['usuario', 'usuario', 8, 15, 'ADD', { 'usuario': 'abc' },'usuario_min_size_KO'],
    ['usuario', 'usuario', 8, 16, 'ADD', { 'usuario': '' },'usuario_min_size_KO'],
    ['usuario', 'usuario', 9, 17, 'ADD', { 'usuario': 'a'.repeat(46) },'usuario_max_size_KO'],
    ['usuario', 'usuario', 10, 18, 'ADD', { 'usuario': 'abcñx' },'usuario_format_KO'],
    ['usuario', 'usuario', 10, 19, 'ADD', { 'usuario': 'abc123' },'usuario_format_KO'],
    ['usuario', 'usuario', 10, 20, 'ADD', { 'usuario': 'ábcde' },'usuario_format_KO'],
    ['usuario', 'usuario', 10, 21, 'ADD', { 'usuario': '     ' },'usuario_format_KO'],
    ['usuario', 'usuario', 10, 22, 'ADD', { 'usuario': ' abcde' },'usuario_format_KO'],
    ['usuario', 'usuario', 10, 23, 'ADD', { 'usuario': 'abcde ' },'usuario_format_KO'],
    ['usuario', 'usuario', 11, 24, 'ADD', { 'usuario': 'Patoganso' },true],
    ['usuario', 'usuario', 11, 25, 'ADD', { 'usuario': 'abcde' },true],
    ['usuario', 'usuario', 11, 26, 'ADD', { 'usuario': 'a'.repeat(45) },true],
    //EDIT
    ['usuario', 'usuario', 12, 27, 'EDIT', { 'usuario': 'abc' },'usuario_min_size_KO'],
    ['usuario', 'usuario', 12, 28, 'EDIT', { 'usuario': '' },'usuario_min_size_KO'],
    ['usuario', 'usuario', 13, 29, 'EDIT', { 'usuario': 'a'.repeat(46) },'usuario_max_size_KO'],
    ['usuario', 'usuario', 14, 30, 'EDIT', { 'usuario': 'abcñx' },'usuario_format_KO'],
    ['usuario', 'usuario', 14, 31, 'EDIT', { 'usuario': 'abc123' },'usuario_format_KO'],
    ['usuario', 'usuario', 14, 32, 'EDIT', { 'usuario': 'ábcde' },'usuario_format_KO'],
    ['usuario', 'usuario', 14, 33, 'EDIT', { 'usuario': '     ' },'usuario_format_KO'],
    ['usuario', 'usuario', 14, 34, 'EDIT', { 'usuario': ' abcde' },'usuario_format_KO'],
    ['usuario', 'usuario', 14, 35, 'EDIT', { 'usuario': 'abcde ' },'usuario_format_KO'],
    ['usuario', 'usuario', 15, 36, 'EDIT', { 'usuario': 'Patoganso' },true],
    ['usuario', 'usuario', 15, 37, 'EDIT', { 'usuario': 'abcde' },true],
    ['usuario', 'usuario', 15, 38, 'EDIT', { 'usuario': 'a'.repeat(45) },true],
    //SEARCH
    ['usuario', 'usuario', 16, 39, 'SEARCH', { 'usuario': 'a'.repeat(46) },'usuario_max_size_KO'],
    ['usuario', 'usuario', 17, 40, 'SEARCH', { 'usuario': 'abcñx' },'usuario_format_KO'],
    ['usuario', 'usuario', 17, 41, 'SEARCH', { 'usuario': 'abc123' },'usuario_format_KO'],
    ['usuario', 'usuario', 17, 42, 'SEARCH', { 'usuario': 'ábcde' },'usuario_format_KO'],
    ['usuario', 'usuario', 17, 43, 'SEARCH', { 'usuario': ' abcde' },'usuario_format_KO'],
    ['usuario', 'usuario', 17, 44, 'SEARCH', { 'usuario': 'abcde ' },'usuario_format_KO'],
    ['usuario', 'usuario', 18, 45, 'SEARCH', { 'usuario': '' },true],
    ['usuario', 'usuario', 18, 46, 'SEARCH', { 'usuario': '     ' },true],
    ['usuario', 'usuario', 18, 47, 'SEARCH', { 'usuario': 'Patoganso' },true],
    ['usuario', 'usuario', 18, 48, 'SEARCH', { 'usuario': 'abcde' },true],
    ['usuario', 'usuario', 18, 49, 'SEARCH', { 'usuario': 'a'.repeat(45) },true],
    //contraseña
    //ADD
    ['usuario', 'contrasena', 19, 50, 'ADD', { 'contrasena': 'abc' },'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 19, 51, 'ADD', { 'contrasena': '' },'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 20, 52, 'ADD', { 'contrasena': 'a'.repeat(46) },'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 21, 53, 'ADD', { 'contrasena': 'abcñefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 21, 54, 'ADD', { 'contrasena': 'abc123ef' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 21, 55, 'ADD', { 'contrasena': 'ábcdefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 21, 56, 'ADD', { 'contrasena': '        ' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 21, 57, 'ADD', { 'contrasena': ' abcdefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 21, 58, 'ADD', { 'contrasena': 'abcdefgh ' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 22, 59, 'ADD', { 'contrasena': 'SuperSecreto' },true],
    ['usuario', 'contrasena', 22, 60, 'ADD', { 'contrasena': 'abcdefgh' },true],
    ['usuario', 'contrasena', 22, 61, 'ADD', { 'contrasena': 'a'.repeat(45) },true],
    //EDIT
    ['usuario', 'contrasena', 23, 62, 'EDIT', { 'contrasena': 'abc' },'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 23, 63, 'EDIT', { 'contrasena': '' },'contrasena_min_size_KO'],
    ['usuario', 'contrasena', 24, 64, 'EDIT', { 'contrasena': 'a'.repeat(46) },'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 25, 65, 'EDIT', { 'contrasena': 'abcñefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 66, 'EDIT', { 'contrasena': 'abc123ef' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 67, 'EDIT', { 'contrasena': 'ábcdefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 68, 'EDIT', { 'contrasena': '        ' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 69, 'EDIT', { 'contrasena': ' abcdefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 25, 70, 'EDIT', { 'contrasena': 'abcdefgh ' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 26, 71, 'EDIT', { 'contrasena': 'SuperSecreto' },true],
    ['usuario', 'contrasena', 26, 72, 'EDIT', { 'contrasena': 'abcdefgh' },true],
    ['usuario', 'contrasena', 26, 73, 'EDIT', { 'contrasena': 'a'.repeat(45) },true],
    //SEARCH
    ['usuario', 'contrasena', 27, 74, 'SEARCH', { 'contrasena': 'a'.repeat(46) },'contrasena_max_size_KO'],
    ['usuario', 'contrasena', 28, 75, 'SEARCH', { 'contrasena': 'abcñefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 28, 76, 'SEARCH', { 'contrasena': 'abc123ef' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 28, 77, 'SEARCH', { 'contrasena': 'ábcdefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 28, 78, 'SEARCH', { 'contrasena': ' abcdefgh' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 28, 79, 'SEARCH', { 'contrasena': 'abcdefgh ' },'contrasena_format_KO'],
    ['usuario', 'contrasena', 29, 80, 'SEARCH', { 'contrasena': '' },true],
    ['usuario', 'contrasena', 29, 81, 'SEARCH', { 'contrasena': '        ' },true],
    ['usuario', 'contrasena', 29, 82, 'SEARCH', { 'contrasena': 'SuperSecreto' },true],
    ['usuario', 'contrasena', 29, 83, 'SEARCH', { 'contrasena': 'abcdefgh' },true],
    ['usuario', 'contrasena', 29, 84, 'SEARCH', { 'contrasena': 'a'.repeat(45) },true],
    //id_rol
    //Ya se valida todo en la clase Rol
];