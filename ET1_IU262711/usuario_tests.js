var usuario_def_tests = [
    //campo dni
    //ADD
    ['usuario', 'dni', 'input', 1, 'Validar format de dni en  ADD', 'format', 'ADD', 'dni_format_KO', 'El campo dni debe ser un número entero seguido de una letra'],
    ['usuario', 'dni', 'input', 2, 'Validar dni correcto en ADD', 'valid', 'ADD', true, 'dni correcto'],
    //EDIT
    ['usuario', 'dni', 'input', 3, 'Validar format de dni en  EDIT', 'format', 'EDIT', 'dni_format_KO', 'El campo dni debe ser un número entero seguido de una letra'],
    ['usuario', 'dni', 'input', 4, 'Validar dni correcto en EDIT', 'valid', 'EDIT', true, 'dni correcto'],
    //SEARCH
    ['usuario', 'dni', 'input', 5, 'Validar format de dni en  SEARCH', 'format', 'SEARCH', 'dni_format_KO', 'El campo dni debe ser un número entero seguido de una letra'],
    ['usuario', 'dni', 'input', 6, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'dni correcto'],
    //campo usuario
    //ADD
    ['usuario', 'usuario', 'input', 7, 'Validar min_size de usuario en  ADD', 'min_size', 'ADD', 'usuario_min_size_KO', 'El campo usuario debe tener al menos 5 caracteres'],
    ['usuario', 'usuario', 'input', 8, 'Validar max_size de usuario en  ADD', 'max_size', 'ADD', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 9, 'Validar format de usuario en  ADD', 'format', 'ADD', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 10, 'Validar usuario unico en ADD', 'unique', 'ADD', 'usuario_unico_KO', 'El campo usuario debe ser único'],
    ['usuario', 'usuario', 'input', 11, 'Validar usuario correcto en ADD', 'valid', 'ADD', true, 'usuario correcto'],
    //EDIT
    ['usuario', 'usuario', 'input', 12, 'Validar min_size de usuario en  EDIT', 'min_size', 'EDIT', 'usuario_min_size_KO', 'El campo usuario debe tener al menos 5 caracteres'],
    ['usuario', 'usuario', 'input', 13, 'Validar max_size de usuario en  EDIT', 'max_size', 'EDIT', 'usuario_max_size_KO', 'El campo usuario debe tener como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 14, 'Validar format de usuario en  EDIT', 'format', 'EDIT', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 25, 'Validar usuario correcto en EDIT', 'valid', 'EDIT', true, 'usuario correcto'],
    //SEARCH
    ['usuario', 'usuario', 'input', 16, 'Validar max_size de usuario en  SEARCH', 'max_size', 'SEARCH', 'usuario_max_size_KO', 'El campo usuario tiene como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 17, 'Validar format de usuario en  SEARCH', 'format', 'SEARCH', 'usuario_format_KO', 'El campo usuario debe ser alfabético sin ñ, ni acentos'],
    ['usuario', 'usuario', 'input', 18, "Validar usuario correcto en SEARCH", "valid", "SEARCH", true, "usuario correcto"],
    //campo contraseña
    //ADD
    ['usuario', 'contraseña', 'input', 19, 'Validar min_size de contraseña en  ADD', 'min_size', 'ADD', 'contraseña_min_size_KO', 'El campo contraseña debe tener al menos 8 caracteres'],
    ['usuario', 'contraseña', 'input', 20, 'Validar max_size de contraseña en  ADD', 'max_size', 'ADD', 'contraseña_max_size_KO', 'El campo contraseña debe tener como máximo 45 caracteres'],
    ['usuario', 'contraseña', 'input', 21, 'Validar format de contraseña en  ADD', 'format', 'ADD', 'contraseña_format_KO', 'El campo contraseña debe ser alfabetico sin ñ, ni acentos'],
    ['usuario', 'contraseña', 'input', 22, 'Validar contraseña correcta en ADD', 'valid', 'ADD', true, 'contraseña correcta'],
    //EDIT
    ['usuario', 'contraseña', 'input', 23, 'Validar min_size de contraseña en  EDIT', 'min_size', 'EDIT', 'contraseña_min_size_KO', 'El campo contraseña debe tener al menos 8 caracteres'],
    ['usuario', 'contraseña', 'input', 24, 'Validar max_size de contraseña en  EDIT', 'max_size', 'EDIT', 'contraseña_max_size_KO', 'El campo contraseña debe tener como máximo 45 caracteres'],
    ['usuario', 'contraseña', 'input', 25, 'Validar format de contraseña en  EDIT', 'format', 'EDIT', 'contraseña_format_KO', 'El campo contraseña debe ser alfabetico sin ñ, ni acentos'],
    ['usuario', 'contraseña', 'input', 26, 'Validar contraseña correcta en EDIT', 'valid', 'EDIT', true, 'contraseña correcta'],
    //SEARCH
    ['usuario', 'contraseña', 'input', 27, 'Validar max_size de contraseña en  SEARCH', 'max_size', 'SEARCH', 'contraseña_max_size_KO', 'El campo contraseña tiene como máximo 45 caracteres'],
    ['usuario', 'contraseña', 'input', 28, 'Validar format de contraseña en  SEARCH', 'format', 'SEARCH', 'contraseña_format_KO', 'El campo contraseña debe ser alfabetico sin ñ, ni acentos'],
    ['usuario', 'contraseña', 'input', 29, "Validar contraseña correcta en SEARCH", "valid", "SEARCH", true, "contraseña correcta"],
    //campo id_rol
    //ADD
    ['usuario', 'id_rol', 'input', 30, 'Validar min_size de id_rol en  ADD', 'min_size', 'ADD', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['usuario', 'id_rol', 'input', 31, 'Validar max_size de id_rol en  ADD', 'max_size', 'ADD', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 32, 'Validar formato de id_rol en  ADD', 'format', 'ADD', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 33, 'Validar foreign key de id_rol en  ADD', 'format', 'ADD', 'id_rol_foreign_key_KO', 'El campo id_rol debe existir en la tabla rol'],
    ['usuario', 'id_rol', 'input', 34, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'id_rol correcto'],
    //EDIT
    ['usuario', 'id_rol', 'input', 35, 'Validar min_size de id_rol en  EDIT', 'min_size', 'EDIT', 'id_rol_min_size_KO', 'El campo id_rol debe tener al menos 1 caracter'],
    ['usuario', 'id_rol', 'input', 36, 'Validar max_size de id_rol en  EDIT', 'max_size', 'EDIT', 'id_rol_max_size_KO', 'El campo id_rol debe tener como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 37, 'Validar formato de id_rol en  EDIT', 'format', 'EDIT', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 38, 'Validar foreign key de id_rol en  EDIT', 'format', 'EDIT', 'id_rol_foreign_key_KO', 'El campo id_rol debe existir en la tabla rol'],
    ['usuario', 'id_rol', 'input', 39, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'id_rol correcto'],
    //SEARCH
    ['usuario', 'id_rol', 'input', 40, 'Validar max_size de id_rol en  SEARCH', 'max_size', 'SEARCH', 'id_rol_max_size_KO', 'El campo id_rol tiene como máximo 11 caracteres'],
    ['usuario', 'id_rol', 'input', 41, 'Validar formato de id_rol en  SEARCH', 'format', 'SEARCH', 'id_rol_format_KO', 'El campo id_rol debe ser un numero entero'],
    ['usuario', 'id_rol', 'input', 42, 'Validar foreign key de id_rol en  SEARCH', 'format', 'SEARCH', 'id_rol_foreign_key_KO', 'El campo id_rol debe existir en la tabla rol'],
    ['usuario', 'id_rol', 'input', 43, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'id_rol correcto']
]

var usuario_pruebas = [ //pendiente de corregir los errores de validación de los campos de usuario
    //dni
    ['usuario', 'dni', 1, 1, 'ADD', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 2, 2, 'ADD', { 'dni': '12345678Z' }, true],
    ['usuario', 'dni', 3, 3, 'EDIT', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 4, 4, 'EDIT', { 'dni': '12345678Z' }, true],
    ['usuario', 'dni', 5, 5, 'SEARCH', { 'dni': '12345678A' }, 'dni_format_KO'],
    ['usuario', 'dni', 6, 6, 'SEARCH', { 'dni': '12345678Z' }, true],
    //usuario
    ['usuario', 'usuario', 7, 7, 'ADD', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 8, 8, 'ADD', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 9, 9, 'ADD', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 10, 10, 'ADD', { 'usuario': datosgenerales.Participante1[0] }, 'usuario_unico_KO'],
    ['usuario', 'usuario', 11, 11, 'ADD', { 'usuario': datosgenerales.Participante2[0] }, true],
    ['usuario', 'usuario', 12, 12, 'EDIT', { 'usuario': 'abc' }, 'usuario_min_size_KO'],
    ['usuario', 'usuario', 13, 13, 'EDIT', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 14, 14, 'EDIT', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 15, 15, 'EDIT', { 'usuario': datosgenerales.Participante1[0] }, true],
    ['usuario', 'usuario', 16, 16, 'SEARCH', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_KO'],
    ['usuario', 'usuario', 17, 17, 'SEARCH', { 'usuario': 'abcñ' }, 'usuario_format_KO'],
    ['usuario', 'usuario', 18, 18, 'SEARCH', { 'usuario': datosgenerales.Participante1[0] }, true],
    //contraseña
    ['usuario', 'contraseña', 19, 19, 'ADD', { 'contraseña': 'abc' }, 'contraseña_min_size_KO'],
    ['usuario', 'contraseña', 20, 20, 'ADD', { 'contraseña': 'a'.repeat(46) }, 'contraseña_max_size_KO'],
    ['usuario', 'contraseña', 21, 21, 'ADD', { 'contraseña': 'abcñ' }, 'contraseña_format_KO'],
    ['usuario', 'contraseña', 22, 22, 'ADD', { 'contraseña': datosgenerales.Participante1[0] }, true],
    ['usuario', 'contraseña', 23, 23, 'EDIT', { 'contraseña': 'abc' }, 'contraseña_min_size_KO'],
    ['usuario', 'contraseña', 24, 24, 'EDIT', { 'contraseña': 'a'.repeat(46) }, 'contraseña_max_size_KO'],
    ['usuario', 'contraseña', 25, 25, 'EDIT', { 'contraseña': 'abcñ' }, 'contraseña_format_KO'],
    ['usuario', 'contraseña', 26, 26, 'EDIT', { 'contraseña': datosgenerales.Participante1[0] }, true],
    ['usuario', 'contraseña', 27, 27, 'SEARCH', { 'contraseña': 'a'.repeat(46) }, 'contraseña_max_size_KO'],
    ['usuario', 'contraseña', 28, 28, 'SEARCH', { 'contraseña': 'abcñ' }, 'contraseña_format_KO'],
    ['usuario', 'contraseña', 29, 29, 'SEARCH', { 'contraseña': datosgenerales.Participante1[0] }, true],
    //id_rol
    ['usuario', 'id_rol', 30, 30, 'ADD', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 31, 31, 'ADD', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 32, 32, 'ADD', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 33, 33, 'ADD', { 'id_rol': 9999 }, 'id_rol_foreign_key_KO'],
    ['usuario', 'id_rol', 34, 34, 'ADD', { 'id_rol': datosgenerales.Lider[2] }, true],
    ['usuario', 'id_rol', 35, 35, 'EDIT', { 'id_rol': '' }, 'id_rol_min_size_KO'],
    ['usuario', 'id_rol', 36, 36, 'EDIT', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 37, 37, 'EDIT', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 38, 38, 'EDIT', { 'id_rol': 9999 }, 'id_rol_foreign_key_KO'],
    ['usuario', 'id_rol', 39, 39, 'EDIT', { 'id_rol': datosgenerales.Lider[2] }, true],
    ['usuario', 'id_rol', 40, 40, 'SEARCH', { 'id_rol': '123456789012' }, 'id_rol_max_size_KO'],
    ['usuario', 'id_rol', 41, 41, 'SEARCH', { 'id_rol': 'abc' }, 'id_rol_format_KO'],
    ['usuario', 'id_rol', 42, 42, 'SEARCH', { 'id_rol': 9999 }, 'id_rol_foreign_key_KO'],
    ['usuario', 'id_rol', 43, 43, 'SEARCH', { 'id_rol': datosgenerales.Lider[2] }, true]
]