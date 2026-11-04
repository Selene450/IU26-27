    var persona_def_tests = [
    //Campo dni
    //ADD
    ['persona', 'dni', 'select', 1, 'Validar min_size de dni en ADD', 'min_size', 'ADD', 'dni_min_size_KO', 'El DNI debe tener 9 caracteres'],
    ['persona', 'dni', 'select', 2, 'Validar max_size de dni en ADD', 'max_size', 'ADD', 'dni_max_size_KO', 'El DNI no puede superar los 9 caracteres'],
    ['persona', 'dni', 'select', 3, 'Validar format de dni en ADD', 'format', 'ADD', 'dni_format_KO', 'El DNI debe tener 8 números seguidos de una letra mayúscula'],
    ['persona', 'dni', 'select', 4, 'Validar letra de control de dni en ADD', 'personalized', 'ADD', 'dni_personalized_validate_dni_KO', 'La letra de control del DNI no es válida'],
    ['persona', 'dni', 'select', 5, 'Validar DNI correcto en ADD', 'personalized', 'ADD', true, 'DNI correcto'],
    //EDIT
    ['persona', 'dni', 'select', 6, 'Validar min_size de dni en EDIT', 'min_size', 'EDIT', 'dni_min_size_KO', 'El DNI debe tener 9 caracteres'],
    ['persona', 'dni', 'select', 7, 'Validar max_size de dni en EDIT', 'max_size', 'EDIT', 'dni_max_size_KO', 'El DNI no puede superar los 9 caracteres'],
    ['persona', 'dni', 'select', 8, 'Validar format de dni en EDIT', 'format', 'EDIT', 'dni_format_KO', 'El DNI debe tener 8 números seguidos de una letra mayúscula'],
    ['persona', 'dni', 'select', 9, 'Validar letra de control de dni en EDIT', 'personalized', 'EDIT', 'dni_personalized_validate_dni_KO', 'La letra de control del DNI no es válida'],
    ['persona', 'dni', 'select', 10, 'Validar DNI correcto en EDIT', 'personalized', 'EDIT', true, 'DNI correcto'],
    //SEARCH
    ['persona', 'dni', 'input', 11, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'input', 12, 'Validar DNI correcto en SEARCH', 'personalized', 'SEARCH', true, 'DNI correcto'],

    //Campo nombre_persona
    //ADD
    ['persona', 'nombre_persona', 'input', 13, 'Validar min_size de nombre_persona en ADD', 'min_size', 'ADD', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 14, 'Validar max_size de nombre_persona en ADD', 'max_size', 'ADD', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 15, 'Validar formato de nombre_persona en ADD', 'format', 'ADD', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 16, 'Validar nombre_persona correcto en ADD', 'valid', 'ADD', true, 'nombre_persona correcto'],
    //EDIT
    ['persona', 'nombre_persona', 'input', 17, 'Validar min_size de nombre_persona en EDIT', 'min_size', 'EDIT', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 18, 'Validar max_size de nombre_persona en EDIT', 'max_size', 'EDIT', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 19, 'Validar format de nombre_persona en EDIT', 'format', 'EDIT', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 20, 'Validar nombre_persona correcto en EDIT', 'valid', 'EDIT', true, 'nombre_persona correcto'],
    //SEARCH
    ['persona', 'nombre_persona', 'input', 21, 'Validar max_size de nombre_persona en SEARCH', 'max_size', 'SEARCH', 'nombre_persona_max_size_KO', 'El campo nombre_persona tiene como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 22, 'Validar format de nombre_persona en SEARCH', 'format', 'SEARCH', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 23, 'Validar nombre_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_persona correcto'],

    //Campo apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 'input', 24, 'Validar min_size de apellidos_persona en ADD', 'min_size', 'ADD', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 25, 'Validar max_size de apellidos_persona en ADD', 'max_size', 'ADD', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 26, 'Validar format de apellidos_persona en ADD', 'format', 'ADD', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 27, 'Validar apellidos_persona correcto en ADD', 'valid', 'ADD', true, 'apellidos_persona correcto'],
    //EDIT
    ['persona', 'apellidos_persona', 'input', 28, 'Validar min_size de apellidos_persona en EDIT', 'min_size', 'EDIT', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 29, 'Validar max_size de apellidos_persona en EDIT', 'max_size', 'EDIT', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 30, 'Validar format de apellidos_persona en EDIT', 'format', 'EDIT', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 31, 'Validar apellidos_persona correcto en EDIT', 'valid', 'EDIT', true, 'apellidos_persona correcto'],
    //SEARCH
    ['persona', 'apellidos_persona', 'input', 32, 'Validar max_size de apellidos_persona en SEARCH', 'max_size', 'SEARCH', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona tiene como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 33, 'Validar format de apellidos_persona en SEARCH', 'format', 'SEARCH', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 34, 'Validar apellidos_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'apellidos_persona correcto'],

    //Campo fechaNacimiento_persona
    //ADD
    ['persona', 'fechaNacimiento_persona', 'input', 35, 'Validar min_size de fechaNacimiento_persona en ADD', 'min_size', 'ADD', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 36, 'Validar max_size de fechaNacimiento_persona en ADD', 'max_size', 'ADD', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 37, 'Validar format de fechaNacimiento_persona en ADD', 'format', 'ADD', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 38, 'Validar fechaNacimiento_persona correcta en ADD', 'valid', 'ADD', true, 'fechaNacimiento_persona correcta'],
    //EDIT
	['persona', 'fechaNacimiento_persona', 'input', 39, 'Validar min_size de fechaNacimiento_persona en EDIT', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 40, 'Validar max_size de fechaNacimiento_persona en EDIT', 'max_size', 'EDIT', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 41, 'Validar format de fechaNacimiento_persona en EDIT', 'format', 'EDIT', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 42, 'Validar fechaNacimiento_persona correcta en EDIT', 'valid', 'EDIT', true, 'fechaNacimiento_persona correcta'],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 'input', 43, 'Validar max_size de fechaNacimiento_persona en SEARCH', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 44, 'Validar format de fechaNacimiento_persona en SEARCH', 'format', 'SEARCH', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 45, 'Validar fechaNacimiento_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'fechaNacimiento_persona correcta'],

    //Campo direccion_persona
    //ADD
    ['persona', 'direccion_persona', 'input', 46, 'Validar min_size de direccion_persona en ADD', 'min_size', 'ADD', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 47, 'Validar max_size de direccion_persona en ADD', 'max_size', 'ADD', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 48, 'Validar format de direccion_persona en ADD', 'format', 'ADD', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 49, 'Validar direccion_persona correcta en ADD', 'valid', 'ADD', true, 'direccion_persona correcta'],
    //EDIT
    ['persona', 'direccion_persona', 'input', 50, 'Validar min_size de direccion_persona en EDIT', 'min_size', 'EDIT', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 51, 'Validar max_size de direccion_persona en EDIT', 'max_size', 'EDIT', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 52, 'Validar format de direccion_persona en EDIT', 'format', 'EDIT', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 53, 'Validar direccion_persona correcta en EDIT', 'valid', 'EDIT', true, 'direccion_persona correcta'],
    //SEARCH
    ['persona', 'direccion_persona', 'input', 54, 'Validar max_size de direccion_persona en SEARCH', 'max_size', 'SEARCH', 'direccion_persona_max_size_KO', 'El campo direccion_persona tiene como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 55, 'Validar format de direccion_persona en SEARCH', 'format', 'SEARCH', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 56, 'Validar direccion_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'direccion_persona correcta'],

    //Campo telefono_persona
    //ADD
    ['persona', 'telefono_persona', 'input', 57, 'Validar min_size de telefono_persona en ADD', 'min_size', 'ADD', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 58, 'Validar max_size de telefono_persona en ADD', 'max_size', 'ADD', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 59, 'Validar format de telefono_persona en ADD', 'format', 'ADD', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 60, 'Validar telefono_persona correcto en ADD', 'valid', 'ADD', true, 'telefono_persona correcto'],
    //EDIT
    ['persona', 'telefono_persona', 'input', 61, 'Validar min_size de telefono_persona en EDIT', 'min_size', 'EDIT', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 62, 'Validar max_size de telefono_persona en EDIT', 'max_size', 'EDIT', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 63, 'Validar format de telefono_persona en EDIT', 'format', 'EDIT', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 64, 'Validar telefono_persona correcto en EDIT', 'valid', 'EDIT', true, 'telefono_persona correcto'],
    //SEARCH
    ['persona', 'telefono_persona', 'input', 65, 'Validar max_size de telefono_persona en SEARCH', 'max_size', 'SEARCH', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 66, 'Validar format de telefono_persona en SEARCH', 'format', 'SEARCH', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 67, 'Validar telefono_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'telefono_persona correcto'],

    //Campo email_persona
    //ADD
    ['persona', 'email_persona', 'input', 68, 'Validar min_size de email_persona en ADD', 'min_size', 'ADD', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 69, 'Validar max_size de email_persona en ADD', 'max_size', 'ADD', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 70, 'Validar format de email_persona en ADD', 'format', 'ADD', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 71, 'Validar email_persona correcto en ADD', 'valid', 'ADD', true, 'email_persona correcto'],
    //EDIT
    ['persona', 'email_persona', 'input', 72, 'Validar min_size de email_persona en EDIT', 'min_size', 'EDIT', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 73, 'Validar max_size de email_persona en EDIT', 'max_size', 'EDIT', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 74, 'Validar format de email_persona en EDIT', 'format', 'EDIT', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 75, 'Validar email_persona correcto en EDIT', 'valid', 'EDIT', true, 'email_persona correcto'],
    //SEARCH
    ['persona', 'email_persona', 'input', 76, 'Validar max_size de email_persona en SEARCH', 'max_size', 'SEARCH', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 77, 'Validar format de email_persona en SEARCH', 'format', 'SEARCH', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 78, 'Validar email_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'email_persona correcto'],

    //Campo nuevo_foto_persona
    //ADD
	['persona', 'nuevo_foto_persona', 'file', 79, 'Existe fichero en nuevo_foto_persona ADD', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_KO', 'No existe foto. Debe subir una foto en jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 80, 'Minimo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 81, 'Maximo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 82, 'Tipo de fichero nuevo_foto_persona ADD', 'type_file', 'ADD', 'nuevo_foto_persona_type_file_KO', 'Tipo de fichero incorrecto. Debe ser jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 83, 'Formato nombre fichero nuevo_foto_persona ADD', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 84, 'Tamaño fichero nuevo_foto_persona ADD', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
	['persona', 'nuevo_foto_persona', 'file', 85, 'Validar formato fichero nuevo_foto_persona ADD', 'format', 'ADD', 'nuevo_foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 86, 'Validar nuevo_foto_persona correcta en ADD', 'valid', 'ADD', true, 'nuevo_foto_persona correcta'],
    //EDIT
	['persona', 'nuevo_foto_persona', 'file', 87, 'Existe fichero en nuevo_foto_persona EDIT', 'exist_file', 'EDIT', true, ''],
    ['persona', 'nuevo_foto_persona', 'file', 88, 'Minimo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 89, 'Maximo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 90, 'Formato nombre fichero nuevo_foto_persona EDIT', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 91, 'Tipo de fichero nuevo_foto_persona EDIT', 'type_file', 'EDIT', 'nuevo_foto_persona_type_file_KO', 'Tipo de fichero incorrecto. Debe ser jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 92, 'Tamaño fichero nuevo_foto_persona EDIT', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 93, 'Validar formato fichero nuevo_foto_persona EDIT', 'format', 'EDIT', 'nuevo_foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 94, 'Validar nuevo_foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'nuevo_foto_persona correcta'],
    
    //Campo foto_persona: nombre del archivo ya guardado
    //SEARCH
    ['persona', 'foto_persona', 'input', 95, 'Maximo nombre fichero foto SEARCH', 'personalized', 'SEARCH', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'input', 96, 'Formato nombre fichero foto SEARCH', 'format_name_file', 'SEARCH', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'input', 97, 'Validar foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'foto_persona correcta'],
];

var persona_pruebas = [
    //dni
    //ADD
    ['persona', 'dni', 1, 1, 'ADD', {'dni': '1234567Z'},'dni_min_size_KO'],
    ['persona', 'dni', 2, 2, 'ADD', {'dni': '1234567890'},'dni_max_size_KO'],
    ['persona', 'dni', 3, 3, 'ADD', {'dni': '1234567AZ'},'dni_format_KO'],
    ['persona', 'dni', 3, 4, 'ADD', {'dni': '12345678z'},'dni_format_KO'],
    ['persona', 'dni', 4, 5, 'ADD', {'dni': '12345678A'},'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 5, 6, 'ADD', {'dni': '12345678Z'},true],
    //EDIT
    ['persona', 'dni', 6, 7, 'EDIT', {'dni': '1234567Z'},'dni_min_size_KO'],
    ['persona', 'dni', 7, 8, 'EDIT', {'dni': '1234567890'},'dni_max_size_KO'],
    ['persona', 'dni', 8, 9, 'EDIT', {'dni': '1234567AZ'},'dni_format_KO'],
    ['persona', 'dni', 8, 10, 'EDIT', {'dni': '12345678z'},'dni_format_KO'],
    ['persona', 'dni', 9, 11, 'EDIT', {'dni': '12345678A'},'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 10, 12, 'EDIT', {'dni': '12345678Z'},true],
    //SEARCH
    ['persona', 'dni', 11, 13, 'SEARCH', {'dni': '1234567890'},'dni_max_size_KO'],
    ['persona', 'dni', 12, 14, 'SEARCH', {'dni': ''},true],
    ['persona', 'dni', 12, 15, 'SEARCH', {'dni': '         '},true],
    ['persona', 'dni', 12, 16, 'SEARCH', {'dni': '12345'},true],
    ['persona', 'dni', 12, 17, 'SEARCH', {'dni': '12345678z'},true],
    ['persona', 'dni', 12, 18, 'SEARCH', {'dni': '12345678Z'},true],

    //nombre_persona
    //ADD
    ['persona', 'nombre_persona', 13, 19, 'ADD', {'nombre_persona': 'A'},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 13, 20, 'ADD', {'nombre_persona': ''},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 14, 21, 'ADD', {'nombre_persona': 'a'.repeat(46)},'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 15, 22, 'ADD', {'nombre_persona': 'Ana123'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 15, 23, 'ADD', {'nombre_persona': 'Ana@'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 16, 24, 'ADD', {'nombre_persona': 'Al'},true],
    ['persona', 'nombre_persona', 16, 25, 'ADD', {'nombre_persona': 'a'.repeat(45)},true],
    ['persona', 'nombre_persona', 16, 26, 'ADD', {'nombre_persona': 'María José'},true],
    //EDIT
    ['persona', 'nombre_persona', 17, 27, 'EDIT', {'nombre_persona': 'A'},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 17, 28, 'EDIT', {'nombre_persona': ''},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 18, 29, 'EDIT', {'nombre_persona': 'a'.repeat(46)},'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 19, 30, 'EDIT', {'nombre_persona': 'Ana123'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 19, 31, 'EDIT', {'nombre_persona': 'Ana@'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 20, 32, 'EDIT', {'nombre_persona': 'Al'},true],
    ['persona', 'nombre_persona', 20, 33, 'EDIT', {'nombre_persona': 'a'.repeat(45)},true],
    ['persona', 'nombre_persona', 20, 34, 'EDIT', {'nombre_persona': 'María José'},true],
    //SEARCH
    ['persona', 'nombre_persona', 21, 35, 'SEARCH', {'nombre_persona': 'a'.repeat(46)},'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 22, 36, 'SEARCH', {'nombre_persona': 'Ana123'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 22, 37, 'SEARCH', {'nombre_persona': 'Ana@'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 23, 38, 'SEARCH', {'nombre_persona': 'Al'},true],
    ['persona', 'nombre_persona', 23, 39, 'SEARCH', {'nombre_persona': 'a'.repeat(45)},true],
    ['persona', 'nombre_persona', 23, 40, 'SEARCH', {'nombre_persona': 'María José'},true],

    //apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 24, 41, 'ADD', {'apellidos_persona': 'Lo'},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 24, 42, 'ADD', {'apellidos_persona': ''},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 25, 43, 'ADD', {'apellidos_persona': 'a'.repeat(101)},'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 26, 44, 'ADD', {'apellidos_persona': 'Perez123'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 26, 45, 'ADD', {'apellidos_persona': 'Perez@'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 27, 46, 'ADD', {'apellidos_persona': 'Ana'},true],
    ['persona', 'apellidos_persona', 27, 47, 'ADD', {'apellidos_persona': 'a'.repeat(100)},true],
    ['persona', 'apellidos_persona', 27, 48, 'ADD', {'apellidos_persona': 'García-López'},true],
    //EDIT
    ['persona', 'apellidos_persona', 28, 49, 'EDIT', {'apellidos_persona': 'Lo'},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 28, 50, 'EDIT', {'apellidos_persona': ''},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 29, 51, 'EDIT', {'apellidos_persona': 'a'.repeat(101)},'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 30, 52, 'EDIT', {'apellidos_persona': 'Perez123'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 30, 53, 'EDIT', {'apellidos_persona': 'Perez@'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 31, 54, 'EDIT', {'apellidos_persona': 'Ana'},true],
    ['persona', 'apellidos_persona', 31, 55, 'EDIT', {'apellidos_persona': 'a'.repeat(100)},true],
    ['persona', 'apellidos_persona', 31, 56, 'EDIT', {'apellidos_persona': 'García-López'},true],
    //SEARCH
    ['persona', 'apellidos_persona', 32, 57, 'SEARCH', {'apellidos_persona': 'a'.repeat(101)},'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 33, 58, 'SEARCH', {'apellidos_persona': 'Perez123'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 33, 59, 'SEARCH', {'apellidos_persona': 'Perez@'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 34, 60, 'SEARCH', {'apellidos_persona': 'Ana'},true],
    ['persona', 'apellidos_persona', 34, 61, 'SEARCH', {'apellidos_persona': 'a'.repeat(100)},true],
    ['persona', 'apellidos_persona', 34, 62, 'SEARCH', {'apellidos_persona': 'García-López'},true],

    //fechaNacimiento_persona
    //ADD
	['persona', 'fechaNacimiento_persona', 35, 63, 'ADD', {'fechaNacimiento_persona': '23'},'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 35, 64, 'ADD', {'fechaNacimiento_persona': ''},'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 36, 65, 'ADD', {'fechaNacimiento_persona': '23/09/2020/extra'},'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 37, 66, 'ADD', {'fechaNacimiento_persona': '2020-09-23'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 37, 67, 'ADD', {'fechaNacimiento_persona': '01/1a/2000'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 38, 68, 'ADD', {'fechaNacimiento_persona': '23/09/2020'},true],
    //EDIT
	['persona', 'fechaNacimiento_persona', 39, 69, 'EDIT', {'fechaNacimiento_persona': '23'},'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 39, 70, 'EDIT', {'fechaNacimiento_persona': ''},'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 40, 71, 'EDIT', {'fechaNacimiento_persona': '23/09/2020/extra'},'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 41, 72, 'EDIT', {'fechaNacimiento_persona': '2020-09-23'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 41, 73, 'EDIT', {'fechaNacimiento_persona': '01/1a/2000'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 42, 74, 'EDIT', {'fechaNacimiento_persona': '23/09/2020'},true],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 43, 75, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020/extra'},'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 44, 76, 'SEARCH', {'fechaNacimiento_persona': '2020-09-23'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 44, 77, 'SEARCH', {'fechaNacimiento_persona': '01/1a/2000'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 45, 78, 'SEARCH', {'fechaNacimiento_persona': ''},true],
    ['persona', 'fechaNacimiento_persona', 45, 79, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020'},true],

    //direccion_persona
    //ADD
    ['persona', 'direccion_persona', 46, 80, 'ADD', {'direccion_persona': 'Calle 1'},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 46, 81, 'ADD', {'direccion_persona': ''},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 47, 82, 'ADD', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 48, 83, 'ADD', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 49, 84, 'ADD', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 49, 85, 'ADD', {'direccion_persona': 'a'.repeat(200)},true],
    //EDIT
    ['persona', 'direccion_persona', 50, 86, 'EDIT', {'direccion_persona': 'Calle 1'},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 50, 87, 'EDIT', {'direccion_persona': ''},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 51, 88, 'EDIT', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 52, 89, 'EDIT', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 53, 90, 'EDIT', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 53, 91, 'EDIT', {'direccion_persona': 'a'.repeat(200)},true],
    //SEARCH
    ['persona', 'direccion_persona', 54, 92, 'SEARCH', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 55, 93, 'SEARCH', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 56, 94, 'SEARCH', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 56, 95, 'SEARCH', {'direccion_persona': 'a'.repeat(200)},true],

    //telefono_persona
    //ADD
	['persona', 'telefono_persona', 57, 96, 'ADD', {'telefono_persona': '1234567'},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 57, 97, 'ADD', {'telefono_persona': ''},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 58, 98, 'ADD', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 59, 99, 'ADD', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 59, 100, 'ADD', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 60, 101, 'ADD', {'telefono_persona': '612345678'},true],
    //EDIT
	['persona', 'telefono_persona', 61, 102, 'EDIT', {'telefono_persona': '1234567'},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 61, 103, 'EDIT', {'telefono_persona': ''},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 62, 104, 'EDIT', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 63, 105, 'EDIT', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 63, 106, 'EDIT', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 64, 107, 'EDIT', {'telefono_persona': '612345678'},true],
    //SEARCH
	['persona', 'telefono_persona', 65, 108, 'SEARCH', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 66, 109, 'SEARCH', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 66, 110, 'SEARCH', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 67, 111, 'SEARCH', {'telefono_persona': ''},true],
    ['persona', 'telefono_persona', 67, 112, 'SEARCH', {'telefono_persona': '612345678'},true],

    //email_persona
    //ADD
    ['persona', 'email_persona', 68, 113, 'ADD', {'email_persona': 'a@b'},'email_persona_min_size_KO'],
    ['persona', 'email_persona', 69, 114, 'ADD', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 70, 115, 'ADD', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 70, 116, 'ADD', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 70, 117, 'ADD', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 118, 'ADD', {'email_persona': 'persona@example.com'},true],
    ['persona', 'email_persona', 71, 119, 'ADD', {'email_persona': 'a@b.c'},true],
    ['persona', 'email_persona', 71, 120, 'ADD', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    //EDIT
    ['persona', 'email_persona', 72, 121, 'EDIT', {'email_persona': 'a@b'},'email_persona_min_size_KO'],
    ['persona', 'email_persona', 73, 122, 'EDIT', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 74, 123, 'EDIT', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 74, 124, 'EDIT', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 74, 125, 'EDIT', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 75, 126, 'EDIT', {'email_persona': 'persona@example.com'},true],
    ['persona', 'email_persona', 75, 127, 'EDIT', {'email_persona': 'a@b.c'},true],
    ['persona', 'email_persona', 75, 128, 'EDIT', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    //SEARCH
    ['persona', 'email_persona', 76, 129, 'SEARCH', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 77, 130, 'SEARCH', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 77, 131, 'SEARCH', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 77, 132, 'SEARCH', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 78, 133, 'SEARCH', {'email_persona': ''},true],
    ['persona', 'email_persona', 78, 134, 'SEARCH', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    ['persona', 'email_persona', 78, 135, 'SEARCH', {'email_persona': 'a@b.c'},true],

    //nuevo_foto_persona
    //ADD
    ['persona', 'nuevo_foto_persona', 79, 136, 'ADD', {nuevo_foto_persona: ''},'nuevo_foto_persona_exist_file_KO'],
	['persona', 'nuevo_foto_persona', 80, 137, 'ADD',{nuevo_foto_persona:{format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 81, 138, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 81, 139, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 82, 140, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}},'nuevo_foto_persona_type_file_KO'],
    ['persona', 'nuevo_foto_persona', 83, 141, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 84, 142, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 84, 143, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 86, 144, 'ADD',{nuevo_foto_persona:{format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 86, 145, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 86, 146, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}},true],
    ['persona', 'nuevo_foto_persona', 86, 147, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    //EDIT
    ['persona', 'nuevo_foto_persona', 87, 148, 'EDIT', {nuevo_foto_persona: ''},true],
	['persona', 'nuevo_foto_persona', 88, 149, 'EDIT', {nuevo_foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 89, 150, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 89, 151, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 90, 152, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_format_name_file_KO'],
	['persona', 'nuevo_foto_persona', 91, 153, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}},'nuevo_foto_persona_type_file_KO'],
    ['persona', 'nuevo_foto_persona', 92, 154, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 92, 155, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 94, 156, 'EDIT', {nuevo_foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 94, 157, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 94, 158, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}},true],
    ['persona', 'nuevo_foto_persona', 94, 159, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    
    //foto_persona
    //SEARCH
    ['persona', 'foto_persona', 95, 160, 'SEARCH', {foto_persona: 'a'.repeat(16) + '.jpg'},'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 96, 161, 'SEARCH', {foto_persona: 'foto123.jpg'},'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 97, 162, 'SEARCH', {foto_persona: ''},true],
    ['persona', 'foto_persona', 97, 163, 'SEARCH', {foto_persona: 'ab.jpg'},true],
    ['persona', 'foto_persona', 97, 164, 'SEARCH', {foto_persona: 'abc.jpg'},true],
];