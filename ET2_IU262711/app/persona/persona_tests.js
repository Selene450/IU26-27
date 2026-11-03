    var persona_def_tests = [
    //Campo dni
    //ADD
    ['persona', 'dni', 'select', 1, 'Rechazar formato DNI incorrecto en ADD', 'personalized', 'ADD', 'dni_personalized_validate_dni_KO', 'Debe contener 8 números y una letra mayúscula'],
    ['persona', 'dni', 'select', 2, 'Rechazar letra de control incorrecta en ADD', 'personalized', 'ADD', 'dni_personalized_validate_dni_KO', 'La letra de control del DNI no es válida'],
    ['persona', 'dni', 'select', 3, 'Validar DNI correcto en ADD', 'personalized', 'ADD', true, 'DNI correcto'],
    //EDIT
    ['persona', 'dni', 'select', 4, 'Rechazar formato DNI incorrecto en EDIT', 'personalized', 'EDIT', 'dni_personalized_validate_dni_KO', 'Debe contener 8 números y una letra mayúscula'],
    ['persona', 'dni', 'select', 5, 'Rechazar letra de control incorrecta en EDIT', 'personalized', 'EDIT', 'dni_personalized_validate_dni_KO', 'La letra de control del DNI no es válida'],
    ['persona', 'dni', 'select', 6, 'Validar DNI correcto en EDIT', 'personalized', 'EDIT', true, 'DNI correcto'],
    //SEARCH
    ['persona', 'dni', 'input', 7, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'input', 8, 'Validar format de dni en SEARCH', 'format', 'SEARCH', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['persona', 'dni', 'input', 9, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'dni correcto'],

    //Campo nombre_persona
    //ADD
    ['persona', 'nombre_persona', 'input', 10, 'Validar min_size de nombre_persona en ADD', 'min_size', 'ADD', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 11, 'Validar max_size de nombre_persona en ADD', 'max_size', 'ADD', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 12, 'Validar formato de nombre_persona en ADD', 'format', 'ADD', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 13, 'Validar nombre_persona correcto en ADD', 'valid', 'ADD', true, 'nombre_persona correcto'],
    //EDIT
    ['persona', 'nombre_persona', 'input', 14, 'Validar min_size de nombre_persona en EDIT', 'min_size', 'EDIT', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 15, 'Validar max_size de nombre_persona en EDIT', 'max_size', 'EDIT', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 16, 'Validar format de nombre_persona en EDIT', 'format', 'EDIT', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 17, 'Validar nombre_persona correcto en EDIT', 'valid', 'EDIT', true, 'nombre_persona correcto'],
    //SEARCH
    ['persona', 'nombre_persona', 'input', 18, 'Validar max_size de nombre_persona en SEARCH', 'max_size', 'SEARCH', 'nombre_persona_max_size_KO', 'El campo nombre_persona tiene como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 19, 'Validar format de nombre_persona en SEARCH', 'format', 'SEARCH', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 20, 'Validar nombre_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_persona correcto'],

    //Campo apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 'input', 21, 'Validar min_size de apellidos_persona en ADD', 'min_size', 'ADD', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 22, 'Validar max_size de apellidos_persona en ADD', 'max_size', 'ADD', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 23, 'Validar format de apellidos_persona en ADD', 'format', 'ADD', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 24, 'Validar apellidos_persona correcto en ADD', 'valid', 'ADD', true, 'apellidos_persona correcto'],
    //EDIT
    ['persona', 'apellidos_persona', 'input', 25, 'Validar min_size de apellidos_persona en EDIT', 'min_size', 'EDIT', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 26, 'Validar max_size de apellidos_persona en EDIT', 'max_size', 'EDIT', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 27, 'Validar format de apellidos_persona en EDIT', 'format', 'EDIT', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 28, 'Validar apellidos_persona correcto en EDIT', 'valid', 'EDIT', true, 'apellidos_persona correcto'],
    //SEARCH
    ['persona', 'apellidos_persona', 'input', 29, 'Validar max_size de apellidos_persona en SEARCH', 'max_size', 'SEARCH', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona tiene como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 30, 'Validar format de apellidos_persona en SEARCH', 'format', 'SEARCH', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 31, 'Validar apellidos_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'apellidos_persona correcto'],

    //Campo fechaNacimiento_persona
    //ADD
    ['persona', 'fechaNacimiento_persona', 'input', 32, 'Validar min_size de fechaNacimiento_persona en ADD', 'min_size', 'ADD', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 33, 'Validar max_size de fechaNacimiento_persona en ADD', 'max_size', 'ADD', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 34, 'Validar format de fechaNacimiento_persona en ADD', 'format', 'ADD', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 35, 'Validar fechaNacimiento_persona correcta en ADD', 'valid', 'ADD', true, 'fechaNacimiento_persona correcta'],
    //EDIT
	['persona', 'fechaNacimiento_persona', 'input', 36, 'Validar min_size de fechaNacimiento_persona en EDIT', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 37, 'Validar max_size de fechaNacimiento_persona en EDIT', 'max_size', 'EDIT', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 38, 'Validar format de fechaNacimiento_persona en EDIT', 'format', 'EDIT', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 39, 'Validar fechaNacimiento_persona correcta en EDIT', 'valid', 'EDIT', true, 'fechaNacimiento_persona correcta'],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 'input', 40, 'Validar max_size de fechaNacimiento_persona en SEARCH', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 41, 'Validar format de fechaNacimiento_persona en SEARCH', 'format', 'SEARCH', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 42, 'Validar fechaNacimiento_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'fechaNacimiento_persona correcta'],

    //Campo direccion_persona
    //ADD
    ['persona', 'direccion_persona', 'input', 43, 'Validar min_size de direccion_persona en ADD', 'min_size', 'ADD', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 44, 'Validar max_size de direccion_persona en ADD', 'max_size', 'ADD', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 45, 'Validar format de direccion_persona en ADD', 'format', 'ADD', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 46, 'Validar direccion_persona correcta en ADD', 'valid', 'ADD', true, 'direccion_persona correcta'],
    //EDIT
    ['persona', 'direccion_persona', 'input', 47, 'Validar min_size de direccion_persona en EDIT', 'min_size', 'EDIT', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 48, 'Validar max_size de direccion_persona en EDIT', 'max_size', 'EDIT', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 49, 'Validar format de direccion_persona en EDIT', 'format', 'EDIT', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 50, 'Validar direccion_persona correcta en EDIT', 'valid', 'EDIT', true, 'direccion_persona correcta'],
    //SEARCH
    ['persona', 'direccion_persona', 'input', 51, 'Validar max_size de direccion_persona en SEARCH', 'max_size', 'SEARCH', 'direccion_persona_max_size_KO', 'El campo direccion_persona tiene como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 52, 'Validar format de direccion_persona en SEARCH', 'format', 'SEARCH', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 53, 'Validar direccion_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'direccion_persona correcta'],

    //Campo telefono_persona
    //ADD
    ['persona', 'telefono_persona', 'input', 54, 'Validar min_size de telefono_persona en ADD', 'min_size', 'ADD', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 55, 'Validar max_size de telefono_persona en ADD', 'max_size', 'ADD', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 56, 'Validar format de telefono_persona en ADD', 'format', 'ADD', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 57, 'Validar telefono_persona correcto en ADD', 'valid', 'ADD', true, 'telefono_persona correcto'],
    //EDIT
    ['persona', 'telefono_persona', 'input', 58, 'Validar min_size de telefono_persona en EDIT', 'min_size', 'EDIT', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 59, 'Validar max_size de telefono_persona en EDIT', 'max_size', 'EDIT', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 60, 'Validar format de telefono_persona en EDIT', 'format', 'EDIT', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 61, 'Validar telefono_persona correcto en EDIT', 'valid', 'EDIT', true, 'telefono_persona correcto'],
    //SEARCH
    ['persona', 'telefono_persona', 'input', 62, 'Validar max_size de telefono_persona en SEARCH', 'max_size', 'SEARCH', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 63, 'Validar format de telefono_persona en SEARCH', 'format', 'SEARCH', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 64, 'Validar telefono_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'telefono_persona correcto'],

    //Campo email_persona
    //ADD
    ['persona', 'email_persona', 'input', 65, 'Validar min_size de email_persona en ADD', 'min_size', 'ADD', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 66, 'Validar max_size de email_persona en ADD', 'max_size', 'ADD', 'email_persona_max_size_KO', 'El email no debe superar 254 caracteres'],
    ['persona', 'email_persona', 'input', 67, 'Validar format de email_persona en ADD', 'format', 'ADD', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 68, 'Validar email_persona correcto en ADD', 'valid', 'ADD', true, 'email_persona correcto'],
    //EDIT
    ['persona', 'email_persona', 'input', 69, 'Validar min_size de email_persona en EDIT', 'min_size', 'EDIT', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 70, 'Validar max_size de email_persona en EDIT', 'max_size', 'EDIT', 'email_persona_max_size_KO', 'El email no debe superar 254 caracteres'],
    ['persona', 'email_persona', 'input', 71, 'Validar format de email_persona en EDIT', 'format', 'EDIT', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 72, 'Validar email_persona correcto en EDIT', 'valid', 'EDIT', true, 'email_persona correcto'],
    //SEARCH
    ['persona', 'email_persona', 'input', 73, 'Validar max_size de email_persona en SEARCH', 'max_size', 'SEARCH', 'email_persona_max_size_KO', 'El email no debe superar 254 caracteres'],
    ['persona', 'email_persona', 'input', 74, 'Validar format de email_persona en SEARCH', 'format', 'SEARCH', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 75, 'Validar email_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'email_persona correcto'],

    //Campo nuevo_foto_persona
    //ADD
	['persona', 'nuevo_foto_persona', 'file', 76, 'Existe fichero en nuevo_foto_persona ADD', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_KO', 'No existe foto. Debe subir una foto en jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 77, 'Minimo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 78, 'Maximo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 79, 'Formato nombre fichero nuevo_foto_persona ADD', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 80, 'Tamaño fichero nuevo_foto_persona ADD', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
	['persona', 'nuevo_foto_persona', 'file', 81, 'Validar formato fichero nuevo_foto_persona ADD', 'format', 'ADD', 'nuevo_foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 82, 'Validar nuevo_foto_persona correcta en ADD', 'valid', 'ADD', true, 'nuevo_foto_persona correcta'],
    //EDIT
	['persona', 'nuevo_foto_persona', 'file', 83, 'Existe fichero en nuevo_foto_persona EDIT', 'exist_file', 'EDIT', true, ''],
    ['persona', 'nuevo_foto_persona', 'file', 84, 'Minimo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 85, 'Maximo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 86, 'Formato nombre fichero nuevo_foto_persona EDIT', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 87, 'Tamaño fichero nuevo_foto_persona EDIT', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 88, 'Validar formato fichero nuevo_foto_persona EDIT', 'format', 'EDIT', 'nuevo_foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 89, 'Validar nuevo_foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'nuevo_foto_persona correcta'],
    //SEARCH
    ['persona', 'nuevo_foto_persona', 'input', 90, 'Formato nombre fichero nuevo_foto_persona SEARCH', 'format_name_file', 'SEARCH', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'input', 91, 'Tamaño nombre fichero nuevo_foto_persona SEARCH', 'personalized', 'SEARCH', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'input', 92, 'Validar nuevo_foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'nuevo_foto_persona correcta'],

    //Campo foto_persona: nombre del archivo ya guardado
    //ADD
    ['persona', 'foto_persona', 'input', 93, 'Minimo nombre fichero foto_persona ADD', 'personalized', 'ADD', 'foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'foto_persona', 'input', 94, 'Maximo nombre fichero foto_persona ADD', 'personalized', 'ADD', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'input', 95, 'Formato nombre fichero foto_persona ADD', 'format_name_file', 'ADD', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'input', 96, 'Validar foto_persona correcta en ADD', 'valid', 'ADD', true, 'foto_persona correcta'],
    //EDIT
    ['persona', 'foto_persona', 'input', 97, 'Minimo nombre fichero foto_persona EDIT', 'personalized', 'EDIT', 'foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'foto_persona', 'input', 98, 'Maximo nombre fichero foto_persona EDIT', 'personalized', 'EDIT', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'input', 99, 'Formato nombre fichero foto_persona EDIT', 'format_name_file', 'EDIT', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'input', 100, 'Validar foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'foto_persona correcta'],
    //SEARCH
    ['persona', 'foto_persona', 'input', 101, 'Maximo nombre fichero foto SEARCH', 'personalized', 'SEARCH', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'input', 102, 'Formato nombre fichero foto SEARCH', 'format_name_file', 'SEARCH', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'input', 103, 'Validar foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'foto_persona correcta'],

];

var persona_pruebas = [
    //dni
    //ADD
    ['persona', 'dni', 1, 1, 'ADD', {'dni': '1234567Z'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 1, 2, 'ADD', {'dni': '1234567890'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 1, 3, 'ADD', {'dni': '1234567AZ'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 1, 4, 'ADD', {'dni': '12345678z'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 2, 5, 'ADD', {'dni': '12345678A'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 3, 6, 'ADD', {'dni': '12345678Z'}, true],
    //EDIT
    ['persona', 'dni', 4, 7, 'EDIT', {'dni': '1234567Z'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 4, 8, 'EDIT', {'dni': '1234567890'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 4, 9, 'EDIT', {'dni': '1234567AZ'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 4, 10, 'EDIT', {'dni': '12345678z'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 5, 11, 'EDIT', {'dni': '12345678A'}, 'dni_personalized_validate_dni_KO'],
    ['persona', 'dni', 6, 12, 'EDIT', {'dni': '12345678Z'}, true],
    //SEARCH
    ['persona', 'dni', 7, 13, 'SEARCH', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 8, 14, 'SEARCH', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 8, 15, 'SEARCH', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 8, 16, 'SEARCH', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 9, 17, 'SEARCH', {'dni': ''}, true],
    ['persona', 'dni', 9, 18, 'SEARCH', {'dni': '         '}, true],
    ['persona', 'dni', 9, 19, 'SEARCH', {'dni': '12345678Z'}, true],

    //nombre_persona
    //ADD
    ['persona', 'nombre_persona', 10, 20, 'ADD', {'nombre_persona': 'A'}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 10, 21, 'ADD', {'nombre_persona': ''}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 11, 22, 'ADD', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 12, 23, 'ADD', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 12, 24, 'ADD', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 13, 25, 'ADD', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 13, 26, 'ADD', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 13, 27, 'ADD', {'nombre_persona': 'María José'}, true],
    //EDIT
    ['persona', 'nombre_persona', 14, 28, 'EDIT', {'nombre_persona': 'A'}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 14, 29, 'EDIT', {'nombre_persona': ''}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 15, 30, 'EDIT', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 16, 31, 'EDIT', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 16, 32, 'EDIT', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 17, 33, 'EDIT', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 17, 34, 'EDIT', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 17, 35, 'EDIT', {'nombre_persona': 'María José'}, true],
    //SEARCH
    ['persona', 'nombre_persona', 18, 36, 'SEARCH', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 19, 37, 'SEARCH', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 19, 38, 'SEARCH', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 20, 39, 'SEARCH', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 20, 40, 'SEARCH', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 20, 41, 'SEARCH', {'nombre_persona': 'María José'}, true],

    //apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 21, 42, 'ADD', {'apellidos_persona': 'Lo'}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 21, 43, 'ADD', {'apellidos_persona': ''}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 22, 44, 'ADD', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 23, 45, 'ADD', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 23, 46, 'ADD', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 24, 47, 'ADD', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 24, 48, 'ADD', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 24, 49, 'ADD', {'apellidos_persona': 'García-López'}, true],
    //EDIT
    ['persona', 'apellidos_persona', 25, 50, 'EDIT', {'apellidos_persona': 'Lo'}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 25, 51, 'EDIT', {'apellidos_persona': ''}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 26, 52, 'EDIT', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 27, 53, 'EDIT', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 27, 54, 'EDIT', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 28, 55, 'EDIT', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 28, 56, 'EDIT', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 28, 57, 'EDIT', {'apellidos_persona': 'García-López'}, true],
    //SEARCH
    ['persona', 'apellidos_persona', 29, 58, 'SEARCH', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 30, 59, 'SEARCH', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 30, 60, 'SEARCH', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 31, 61, 'SEARCH', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 31, 62, 'SEARCH', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 31, 63, 'SEARCH', {'apellidos_persona': 'García-López'}, true],

    //fechaNacimiento_persona
    //ADD
	['persona', 'fechaNacimiento_persona', 32, 64, 'ADD', {'fechaNacimiento_persona': '23'}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 32, 65, 'ADD', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 33, 66, 'ADD', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 34, 67, 'ADD', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 34, 68, 'ADD', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 35, 69, 'ADD', {'fechaNacimiento_persona': '23/09/2020'}, true],
    //EDIT
	['persona', 'fechaNacimiento_persona', 36, 70, 'EDIT', {'fechaNacimiento_persona': '23'}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 36, 71, 'EDIT', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 37, 72, 'EDIT', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 38, 73, 'EDIT', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 38, 74, 'EDIT', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 39, 75, 'EDIT', {'fechaNacimiento_persona': '23/09/2020'}, true],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 40, 76, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 41, 77, 'SEARCH', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 41, 78, 'SEARCH', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 42, 79, 'SEARCH', {'fechaNacimiento_persona': ''}, true],
    ['persona', 'fechaNacimiento_persona', 42, 80, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020'}, true],

    //direccion_persona
    //ADD
    ['persona', 'direccion_persona', 43, 81, 'ADD', {'direccion_persona': 'Calle 1'}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 43, 82, 'ADD', {'direccion_persona': ''}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 44, 83, 'ADD', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 45, 84, 'ADD', {'direccion_persona': 'Calle @@@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 46, 85, 'ADD', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 46, 86, 'ADD', {'direccion_persona': 'a'.repeat(200)}, true],
    //EDIT
    ['persona', 'direccion_persona', 47, 87, 'EDIT', {'direccion_persona': 'Calle 1'}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 47, 88, 'EDIT', {'direccion_persona': ''}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 48, 89, 'EDIT', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 49, 90, 'EDIT', {'direccion_persona': 'Calle @@@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 50, 91, 'EDIT', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 50, 92, 'EDIT', {'direccion_persona': 'a'.repeat(200)}, true],
    //SEARCH
    ['persona', 'direccion_persona', 51, 93, 'SEARCH', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 52, 94, 'SEARCH', {'direccion_persona': 'Calle @@@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 53, 95, 'SEARCH', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 53, 96, 'SEARCH', {'direccion_persona': 'a'.repeat(200)}, true],

    //telefono_persona
    //ADD
	['persona', 'telefono_persona', 54, 97, 'ADD', {'telefono_persona': '1234567'}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 54, 98, 'ADD', {'telefono_persona': ''}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 55, 99, 'ADD', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 56, 100, 'ADD', {'telefono_persona': '1234567a8'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 56, 101, 'ADD', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 57, 102, 'ADD', {'telefono_persona': '612345678'}, true],
    //EDIT
	['persona', 'telefono_persona', 58, 103, 'EDIT', {'telefono_persona': '1234567'}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 58, 104, 'EDIT', {'telefono_persona': ''}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 59, 105, 'EDIT', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 60, 106, 'EDIT', {'telefono_persona': '1234567a8'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 60, 107, 'EDIT', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 61, 108, 'EDIT', {'telefono_persona': '612345678'}, true],
    //SEARCH
	['persona', 'telefono_persona', 62, 109, 'SEARCH', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 63, 110, 'SEARCH', {'telefono_persona': '1234567a8'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 63, 111, 'SEARCH', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 64, 112, 'SEARCH', {'telefono_persona': ''}, true],
    ['persona', 'telefono_persona', 64, 113, 'SEARCH', {'telefono_persona': '612345678'}, true],

    //email_persona
    //ADD
    ['persona', 'email_persona', 65, 114, 'ADD', {'email_persona': 'a@b'}, 'email_persona_min_size_KO'],
    ['persona', 'email_persona', 66, 115, 'ADD', {'email_persona': 'a'.repeat(65) + '@' + 'b'.repeat(63) + '.' + 'c'.repeat(63) + '.' + 'd'.repeat(61)}, 'email_persona_max_size_KO'],
    ['persona', 'email_persona', 67, 116, 'ADD', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 117, 'ADD', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 118, 'ADD', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 68, 119, 'ADD', {'email_persona': 'persona@example.com'}, true],
    ['persona', 'email_persona', 68, 120, 'ADD', {'email_persona': 'a@b.c'}, true],
    ['persona', 'email_persona', 68, 121, 'ADD', {'email_persona': 'a'.repeat(64) + '@' + 'b'.repeat(63) + '.' + 'c'.repeat(63) + '.' + 'd'.repeat(61)}, true],
    //EDIT
    ['persona', 'email_persona', 69, 122, 'EDIT', {'email_persona': 'a@b'}, 'email_persona_min_size_KO'],
    ['persona', 'email_persona', 70, 123, 'EDIT', {'email_persona': 'a'.repeat(65) + '@' + 'b'.repeat(63) + '.' + 'c'.repeat(63) + '.' + 'd'.repeat(61)}, 'email_persona_max_size_KO'],
    ['persona', 'email_persona', 71, 124, 'EDIT', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 125, 'EDIT', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 126, 'EDIT', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 72, 127, 'EDIT', {'email_persona': 'persona@example.com'}, true],
    ['persona', 'email_persona', 72, 128, 'EDIT', {'email_persona': 'a@b.c'}, true],
    ['persona', 'email_persona', 72, 129, 'EDIT', {'email_persona': 'a'.repeat(64) + '@' + 'b'.repeat(63) + '.' + 'c'.repeat(63) + '.' + 'd'.repeat(61)}, true],
    //SEARCH
    ['persona', 'email_persona', 73, 130, 'SEARCH', {'email_persona': 'a'.repeat(65) + '@' + 'b'.repeat(63) + '.' + 'c'.repeat(63) + '.' + 'd'.repeat(61)}, 'email_persona_max_size_KO'],
    ['persona', 'email_persona', 74, 131, 'SEARCH', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 74, 132, 'SEARCH', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 74, 133, 'SEARCH', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 75, 134, 'SEARCH', {'email_persona': ''}, true],
    ['persona', 'email_persona', 75, 135, 'SEARCH', {'email_persona': 'persona@example.com'}, true],
    ['persona', 'email_persona', 75, 136, 'SEARCH', {'email_persona': 'a@b.c'}, true],

    //nuevo_foto_persona
    //ADD
    ['persona', 'nuevo_foto_persona', 76, 137, 'ADD', {nuevo_foto_persona: ''}, 'nuevo_foto_persona_exist_file_KO'],
	['persona', 'nuevo_foto_persona', 77, 138, 'ADD',{nuevo_foto_persona:{format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 78, 139, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 78, 140, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 79, 141, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 80, 142, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 80, 143, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 81, 144, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'nuevo_foto_persona_format_KO'],
	['persona', 'nuevo_foto_persona', 82, 145, 'ADD',{nuevo_foto_persona:{format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 82, 146, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 82, 147, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
    ['persona', 'nuevo_foto_persona', 82, 148, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //EDIT
    ['persona', 'nuevo_foto_persona', 83, 149, 'EDIT', {nuevo_foto_persona: ''}, true],
	['persona', 'nuevo_foto_persona', 84, 150, 'EDIT', {nuevo_foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 85, 151, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 85, 152, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 86, 153, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 87, 154, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 87, 155, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 88, 156, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'nuevo_foto_persona_format_KO'],
	['persona', 'nuevo_foto_persona', 89, 157, 'EDIT', {nuevo_foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 89, 158, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 89, 159, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
    ['persona', 'nuevo_foto_persona', 89, 160, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //SEARCH
    ['persona', 'nuevo_foto_persona', 90, 161, 'SEARCH', {nuevo_foto_persona: 'foto123.jpg'}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 91, 162, 'SEARCH', {nuevo_foto_persona: 'f'.repeat(16) + '.jpg'}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 92, 163, 'SEARCH', {nuevo_foto_persona: 'f'.repeat(15) + '.jpg'}, true],
    ['persona', 'nuevo_foto_persona', 92, 164, 'SEARCH', {nuevo_foto_persona: 'foto.jpg'}, true],

    //foto_persona is the stored filename, represented by text
    //ADD
    ['persona', 'foto_persona', 93, 165, 'ADD', {foto_persona: 'fo.jpg'}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 94, 166, 'ADD', {foto_persona: 'a'.repeat(16) + '.jpg'}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 95, 167, 'ADD', {foto_persona: 'foto123.jpg'}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 96, 168, 'ADD', {foto_persona: ''}, true],
    ['persona', 'foto_persona', 96, 169, 'ADD', {foto_persona: 'abc.jpg'}, true],
    //EDIT
    ['persona', 'foto_persona', 97, 170, 'EDIT', {foto_persona: 'fo.jpg'}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 98, 171, 'EDIT', {foto_persona: 'a'.repeat(16) + '.jpg'}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 99, 172, 'EDIT', {foto_persona: 'foto123.jpg'}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 100, 173, 'EDIT', {foto_persona: ''}, true],
    ['persona', 'foto_persona', 100, 174, 'EDIT', {foto_persona: 'abc.jpg'}, true],
    //SEARCH
    ['persona', 'foto_persona', 101, 175, 'SEARCH', {foto_persona: 'a'.repeat(16) + '.jpg'}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 102, 176, 'SEARCH', {foto_persona: 'foto123.jpg'}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 103, 177, 'SEARCH', {foto_persona: ''}, true],
    ['persona', 'foto_persona', 103, 178, 'SEARCH', {foto_persona: 'ab.jpg'}, true],
    ['persona', 'foto_persona', 103, 179, 'SEARCH', {foto_persona: 'abc.jpg'}, true]
];