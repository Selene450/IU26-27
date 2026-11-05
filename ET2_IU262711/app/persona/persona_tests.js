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
    ['persona', 'dni', 'select', 11, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'select', 12, 'Validar DNI correcto en SEARCH', 'personalized', 'SEARCH', true, 'DNI correcto'],

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
    ['persona', 'fechaNacimiento_persona', 'input', 38, 'Validar fecha real de fechaNacimiento_persona en ADD', 'personalized', 'ADD', 'fechaNacimiento_persona_personalized_KO', 'La fecha introducida no existe en el calendario'],
    ['persona', 'fechaNacimiento_persona', 'input', 39, 'Validar fechaNacimiento_persona correcta en ADD', 'valid', 'ADD', true, 'fechaNacimiento_persona correcta'],
    //EDIT
	['persona', 'fechaNacimiento_persona', 'input', 40, 'Validar min_size de fechaNacimiento_persona en EDIT', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 41, 'Validar max_size de fechaNacimiento_persona en EDIT', 'max_size', 'EDIT', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 42, 'Validar format de fechaNacimiento_persona en EDIT', 'format', 'EDIT', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 43, 'Validar fecha real de fechaNacimiento_persona en EDIT', 'personalized', 'EDIT', 'fechaNacimiento_persona_personalized_KO', 'La fecha introducida no existe en el calendario'],
    ['persona', 'fechaNacimiento_persona', 'input', 44, 'Validar fechaNacimiento_persona correcta en EDIT', 'valid', 'EDIT', true, 'fechaNacimiento_persona correcta'],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 'input', 45, 'Validar max_size de fechaNacimiento_persona en SEARCH', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 46, 'Validar format de fechaNacimiento_persona en SEARCH', 'format', 'SEARCH', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 47, 'Validar fecha real de fechaNacimiento_persona en SEARCH', 'personalized', 'SEARCH', 'fechaNacimiento_persona_personalized_KO', 'La fecha introducida no existe en el calendario'],
    ['persona', 'fechaNacimiento_persona', 'input', 48, 'Validar fechaNacimiento_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'fechaNacimiento_persona correcta'],

    //Campo direccion_persona
    //ADD
    ['persona', 'direccion_persona', 'input', 49, 'Validar min_size de direccion_persona en ADD', 'min_size', 'ADD', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 50, 'Validar max_size de direccion_persona en ADD', 'max_size', 'ADD', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 51, 'Validar format de direccion_persona en ADD', 'format', 'ADD', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 52, 'Validar direccion_persona correcta en ADD', 'valid', 'ADD', true, 'direccion_persona correcta'],
    //EDIT
    ['persona', 'direccion_persona', 'input', 53, 'Validar min_size de direccion_persona en EDIT', 'min_size', 'EDIT', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 54, 'Validar max_size de direccion_persona en EDIT', 'max_size', 'EDIT', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 55, 'Validar format de direccion_persona en EDIT', 'format', 'EDIT', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 56, 'Validar direccion_persona correcta en EDIT', 'valid', 'EDIT', true, 'direccion_persona correcta'],
    //SEARCH
    ['persona', 'direccion_persona', 'input', 57, 'Validar max_size de direccion_persona en SEARCH', 'max_size', 'SEARCH', 'direccion_persona_max_size_KO', 'El campo direccion_persona tiene como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 58, 'Validar format de direccion_persona en SEARCH', 'format', 'SEARCH', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 59, 'Validar direccion_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'direccion_persona correcta'],

    //Campo telefono_persona
    //ADD
    ['persona', 'telefono_persona', 'input', 60, 'Validar min_size de telefono_persona en ADD', 'min_size', 'ADD', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 61, 'Validar max_size de telefono_persona en ADD', 'max_size', 'ADD', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 62, 'Validar format de telefono_persona en ADD', 'format', 'ADD', 'telefono_persona_format_KO', 'El campo telefono_persona debe contener 9 cifras'],
    ['persona', 'telefono_persona', 'input', 63, 'Validar prefijo de telefono_persona en ADD', 'personalized', 'ADD', 'telefono_persona_personalized_KO', 'Numero no valido en Espana: debe empezar por 6, 7 o 9'],
    ['persona', 'telefono_persona', 'input', 64, 'Validar telefono_persona correcto en ADD', 'valid', 'ADD', true, 'telefono_persona correcto'],
    //EDIT
    ['persona', 'telefono_persona', 'input', 65, 'Validar min_size de telefono_persona en EDIT', 'min_size', 'EDIT', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 66, 'Validar max_size de telefono_persona en EDIT', 'max_size', 'EDIT', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 67, 'Validar format de telefono_persona en EDIT', 'format', 'EDIT', 'telefono_persona_format_KO', 'El campo telefono_persona debe contener 9 cifras'],
    ['persona', 'telefono_persona', 'input', 68, 'Validar prefijo de telefono_persona en EDIT', 'personalized', 'EDIT', 'telefono_persona_personalized_KO', 'Numero no valido en Espana: debe empezar por 6, 7 o 9'],
    ['persona', 'telefono_persona', 'input', 69, 'Validar telefono_persona correcto en EDIT', 'valid', 'EDIT', true, 'telefono_persona correcto'],
    //SEARCH
    ['persona', 'telefono_persona', 'input', 70, 'Validar max_size de telefono_persona en SEARCH', 'max_size', 'SEARCH', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 71, 'Validar format de telefono_persona en SEARCH', 'format', 'SEARCH', 'telefono_persona_format_KO', 'El campo telefono_persona debe contener 9 cifras'],
    ['persona', 'telefono_persona', 'input', 72, 'Validar telefono_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'telefono_persona correcto'],

    //Campo email_persona
    //ADD
    ['persona', 'email_persona', 'input', 73, 'Validar min_size de email_persona en ADD', 'min_size', 'ADD', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 74, 'Validar max_size de email_persona en ADD', 'max_size', 'ADD', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 75, 'Validar format de email_persona en ADD', 'format', 'ADD', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 76, 'Validar email_persona correcto en ADD', 'valid', 'ADD', true, 'email_persona correcto'],
    //EDIT
    ['persona', 'email_persona', 'input', 77, 'Validar min_size de email_persona en EDIT', 'min_size', 'EDIT', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 78, 'Validar max_size de email_persona en EDIT', 'max_size', 'EDIT', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 79, 'Validar format de email_persona en EDIT', 'format', 'EDIT', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 80, 'Validar email_persona correcto en EDIT', 'valid', 'EDIT', true, 'email_persona correcto'],
    //SEARCH
    ['persona', 'email_persona', 'input', 81, 'Validar max_size de email_persona en SEARCH', 'max_size', 'SEARCH', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 82, 'Validar format de email_persona en SEARCH', 'format', 'SEARCH', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 83, 'Validar email_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'email_persona correcto'],

    //Campo nuevo_foto_persona
    //ADD
	['persona', 'nuevo_foto_persona', 'file', 84, 'Existe fichero en nuevo_foto_persona ADD', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_KO', 'No existe foto. Debe subir una foto en jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 85, 'Minimo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 86, 'Maximo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 87, 'Tipo de fichero nuevo_foto_persona ADD', 'type_file', 'ADD', 'nuevo_foto_persona_type_file_KO', 'Tipo de fichero incorrecto. Debe ser jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 88, 'Formato nombre fichero nuevo_foto_persona ADD', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 89, 'Tamaño fichero nuevo_foto_persona ADD', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 91, 'Validar nuevo_foto_persona correcta en ADD', 'valid', 'ADD', true, 'nuevo_foto_persona correcta'],
    //EDIT
    ['persona', 'nuevo_foto_persona', 'file', 92, 'Existe fichero en nuevo_foto_persona EDIT', 'exist_file', 'EDIT', true, 'nuevo_foto_persona es opcional en EDIT: sin fichero es correcto'],
    ['persona', 'nuevo_foto_persona', 'file', 93, 'Minimo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 94, 'Maximo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 95, 'Formato nombre fichero nuevo_foto_persona EDIT', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 96, 'Tipo de fichero nuevo_foto_persona EDIT', 'type_file', 'EDIT', 'nuevo_foto_persona_type_file_KO', 'Tipo de fichero incorrecto. Debe ser jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 97, 'Tamaño fichero nuevo_foto_persona EDIT', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 99, 'Validar nuevo_foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'nuevo_foto_persona correcta'],
    
    //Campo foto_persona: nombre del archivo guardado
    //SEARCH
    ['persona', 'foto_persona', 'input', 100, 'Validar max_size de foto_persona en SEARCH', 'max_size', 'SEARCH', 'foto_persona_max_size_KO', 'El nombre de la foto no puede superar las 15 letras antes de la extension'],
    ['persona', 'foto_persona', 'input', 101, 'Validar formato de foto_persona en SEARCH', 'format', 'SEARCH', 'foto_persona_format_KO', 'El nombre de la foto debe contener solo letras y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'input', 102, 'Validar foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'foto_persona correcta'],
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
	['persona', 'fechaNacimiento_persona', 38, 68, 'ADD', {'fechaNacimiento_persona': '31/02/2000'},'fechaNacimiento_persona_personalized_KO'],
	['persona', 'fechaNacimiento_persona', 39, 69, 'ADD', {'fechaNacimiento_persona': '23/09/2020'},true],
    //EDIT
	['persona', 'fechaNacimiento_persona', 40, 70, 'EDIT', {'fechaNacimiento_persona': '23'},'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 40, 71, 'EDIT', {'fechaNacimiento_persona': ''},'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 41, 72, 'EDIT', {'fechaNacimiento_persona': '23/09/2020/extra'},'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 42, 73, 'EDIT', {'fechaNacimiento_persona': '2020-09-23'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 42, 74, 'EDIT', {'fechaNacimiento_persona': '01/1a/2000'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 43, 75, 'EDIT', {'fechaNacimiento_persona': '31/02/2000'},'fechaNacimiento_persona_personalized_KO'],
    ['persona', 'fechaNacimiento_persona', 44, 76, 'EDIT', {'fechaNacimiento_persona': '23/09/2020'},true],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 45, 77, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020/extra'},'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 46, 78, 'SEARCH', {'fechaNacimiento_persona': '2020-09-23'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 46, 79, 'SEARCH', {'fechaNacimiento_persona': '01/1a/2000'},'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 47, 80, 'SEARCH', {'fechaNacimiento_persona': '31/02/2000'},'fechaNacimiento_persona_personalized_KO'],
    ['persona', 'fechaNacimiento_persona', 48, 81, 'SEARCH', {'fechaNacimiento_persona': ''},true],
    ['persona', 'fechaNacimiento_persona', 48, 82, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020'},true],

    //direccion_persona
    //ADD
    ['persona', 'direccion_persona', 49, 83, 'ADD', {'direccion_persona': 'Calle 1'},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 49, 84, 'ADD', {'direccion_persona': ''},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 50, 85, 'ADD', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 51, 86, 'ADD', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 52, 87, 'ADD', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 52, 88, 'ADD', {'direccion_persona': 'a'.repeat(200)},true],
    //EDIT
    ['persona', 'direccion_persona', 53, 89, 'EDIT', {'direccion_persona': 'Calle 1'},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 53, 90, 'EDIT', {'direccion_persona': ''},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 54, 91, 'EDIT', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 55, 92, 'EDIT', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 56, 93, 'EDIT', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 56, 94, 'EDIT', {'direccion_persona': 'a'.repeat(200)},true],
    //SEARCH
    ['persona', 'direccion_persona', 57, 95, 'SEARCH', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 58, 96, 'SEARCH', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 59, 97, 'SEARCH', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 59, 98, 'SEARCH', {'direccion_persona': 'a'.repeat(200)},true],

    //telefono_persona
    //ADD
	['persona', 'telefono_persona', 60, 99, 'ADD', {'telefono_persona': '1234567'},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 60, 100, 'ADD', {'telefono_persona': ''},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 61, 101, 'ADD', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 62, 102, 'ADD', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 62, 103, 'ADD', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
	['persona', 'telefono_persona', 63, 104, 'ADD', {'telefono_persona': '123456789'},'telefono_persona_personalized_KO'],
	['persona', 'telefono_persona', 64, 105, 'ADD', {'telefono_persona': '612345678'},true],
	['persona', 'telefono_persona', 64, 106, 'ADD', {'telefono_persona': '712345678'},true],
	['persona', 'telefono_persona', 64, 107, 'ADD', {'telefono_persona': '912345678'},true],
    //EDIT
	['persona', 'telefono_persona', 65, 108, 'EDIT', {'telefono_persona': '1234567'},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 65, 109, 'EDIT', {'telefono_persona': ''},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 66, 110, 'EDIT', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 67, 111, 'EDIT', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 67, 112, 'EDIT', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
	['persona', 'telefono_persona', 68, 113, 'EDIT', {'telefono_persona': '123456789'},'telefono_persona_personalized_KO'],
	['persona', 'telefono_persona', 69, 114, 'EDIT', {'telefono_persona': '612345678'},true],
	['persona', 'telefono_persona', 69, 115, 'EDIT', {'telefono_persona': '712345678'},true],
	['persona', 'telefono_persona', 69, 116, 'EDIT', {'telefono_persona': '912345678'},true],
    //SEARCH
	['persona', 'telefono_persona', 70, 117, 'SEARCH', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 71, 118, 'SEARCH', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 71, 119, 'SEARCH', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 72, 120, 'SEARCH', {'telefono_persona': ''},true],
    ['persona', 'telefono_persona', 72, 121, 'SEARCH', {'telefono_persona': '612345678'},true],
    //email_persona
    //ADD
    ['persona', 'email_persona', 73, 122, 'ADD', {'email_persona': 'a@b'},'email_persona_min_size_KO'],
    ['persona', 'email_persona', 74, 123, 'ADD', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 75, 124, 'ADD', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 75, 125, 'ADD', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 75, 126, 'ADD', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 76, 127, 'ADD', {'email_persona': 'persona@example.com'},true],
    ['persona', 'email_persona', 76, 128, 'ADD', {'email_persona': 'a@b.c'},true],
    ['persona', 'email_persona', 76, 129, 'ADD', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    //EDIT
    ['persona', 'email_persona', 77, 130, 'EDIT', {'email_persona': 'a@b'},'email_persona_min_size_KO'],
    ['persona', 'email_persona', 78, 131, 'EDIT', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 79, 132, 'EDIT', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 79, 133, 'EDIT', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 79, 134, 'EDIT', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 80, 135, 'EDIT', {'email_persona': 'persona@example.com'},true],
    ['persona', 'email_persona', 80, 136, 'EDIT', {'email_persona': 'a@b.c'},true],
    ['persona', 'email_persona', 80, 137, 'EDIT', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    //SEARCH
    ['persona', 'email_persona', 81, 138, 'SEARCH', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 82, 139, 'SEARCH', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 82, 140, 'SEARCH', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 82, 141, 'SEARCH', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 83, 142, 'SEARCH', {'email_persona': ''},true],
    ['persona', 'email_persona', 83, 143, 'SEARCH', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    ['persona', 'email_persona', 83, 144, 'SEARCH', {'email_persona': 'a@b.c'},true],

    //nuevo_foto_persona
    //ADD
    ['persona', 'nuevo_foto_persona', 84, 145, 'ADD', {},'nuevo_foto_persona_exist_file_KO'],
	['persona', 'nuevo_foto_persona', 85, 146, 'ADD',{nuevo_foto_persona:{format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 86, 147, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 86, 148, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 87, 149, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}},'nuevo_foto_persona_type_file_KO'],
    ['persona', 'nuevo_foto_persona', 88, 150, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 89, 151, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 89, 152, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 91, 153, 'ADD',{nuevo_foto_persona:{format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 91, 154, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 91, 155, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}},true],
    ['persona', 'nuevo_foto_persona', 91, 156, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    //EDIT
    ['persona', 'nuevo_foto_persona', 92, 157, 'EDIT', {},true],
	['persona', 'nuevo_foto_persona', 93, 158, 'EDIT', {nuevo_foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 94, 159, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 94, 160, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 95, 161, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_format_name_file_KO'],
	['persona', 'nuevo_foto_persona', 96, 162, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}},'nuevo_foto_persona_type_file_KO'],
    ['persona', 'nuevo_foto_persona', 97, 163, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 97, 164, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 99, 165, 'EDIT', {nuevo_foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 99, 166, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 99, 167, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}},true],
    ['persona', 'nuevo_foto_persona', 99, 168, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    
    //foto_persona
    //SEARCH
    ['persona', 'foto_persona', 100, 169, 'SEARCH', {foto_persona: 'a'.repeat(16) + '.jpg'},'foto_persona_max_size_KO'],
    ['persona', 'foto_persona', 101, 170, 'SEARCH', {foto_persona: 'foto123.jpg'},'foto_persona_format_KO'],
    ['persona', 'foto_persona', 102, 171, 'SEARCH', {foto_persona: ''},true],
    ['persona', 'foto_persona', 102, 172, 'SEARCH', {foto_persona: 'abc.jpg'},true],
];