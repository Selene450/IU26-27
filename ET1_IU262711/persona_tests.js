var persona_def_tests = [
    //Campo dni
    //ADD
    ['persona', 'dni', 'select', 1, 'Validar min_size de dni en ADD', 'min_size', 'ADD', 'dni_min_size_KO', 'El campo dni debe tener al menos 9 caracteres'],
    ['persona', 'dni', 'select', 2, 'Validar max_size de dni en ADD', 'max_size', 'ADD', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'select', 3, 'Validar format de dni en ADD', 'format', 'ADD', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['persona', 'dni', 'select', 4, 'Validar dni correcto en ADD', 'valid', 'ADD', true, 'dni correcto'],
    //EDIT
    ['persona', 'dni', 'select', 5, 'Validar min_size de dni en EDIT', 'min_size', 'EDIT', 'dni_min_size_KO', 'El campo dni debe tener al menos 9 caracteres'],
    ['persona', 'dni', 'select', 6, 'Validar max_size de dni en EDIT', 'max_size', 'EDIT', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'select', 7, 'Validar format de dni en EDIT', 'format', 'EDIT', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['persona', 'dni', 'select', 8, 'Validar dni correcto en EDIT', 'valid', 'EDIT', true, 'dni correcto'],
    //SEARCH
    ['persona', 'dni', 'select', 9, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'select', 10, 'Validar format de dni en SEARCH', 'format', 'SEARCH', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['persona', 'dni', 'select', 11, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'dni correcto'],

    //Campo nombre_persona
    //ADD
    ['persona', 'nombre_persona', 'input', 12, 'Validar min_size de nombre_persona en ADD', 'min_size', 'ADD', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 13, 'Validar max_size de nombre_persona en ADD', 'max_size', 'ADD', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 14, 'Validar formato de nombre_persona en ADD', 'format', 'ADD', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 15, 'Validar nombre_persona correcto en ADD', 'valid', 'ADD', true, 'nombre_persona correcto'],
    //EDIT
    ['persona', 'nombre_persona', 'input', 16, 'Validar min_size de nombre_persona en EDIT', 'min_size', 'EDIT', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 17, 'Validar max_size de nombre_persona en EDIT', 'max_size', 'EDIT', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 18, 'Validar format de nombre_persona en EDIT', 'format', 'EDIT', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 19, 'Validar nombre_persona correcto en EDIT', 'valid', 'EDIT', true, 'nombre_persona correcto'],
    //SEARCH
    ['persona', 'nombre_persona', 'input', 20, 'Validar max_size de nombre_persona en SEARCH', 'max_size', 'SEARCH', 'nombre_persona_max_size_KO', 'El campo nombre_persona tiene como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 21, 'Validar format de nombre_persona en SEARCH', 'format', 'SEARCH', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 22, 'Validar nombre_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_persona correcto'],

    //Campo apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 'input', 23, 'Validar min_size de apellidos_persona en ADD', 'min_size', 'ADD', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 24, 'Validar max_size de apellidos_persona en ADD', 'max_size', 'ADD', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 25, 'Validar format de apellidos_persona en ADD', 'format', 'ADD', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 26, 'Validar apellidos_persona correcto en ADD', 'valid', 'ADD', true, 'apellidos_persona correcto'],
    //EDIT
    ['persona', 'apellidos_persona', 'input', 27, 'Validar min_size de apellidos_persona en EDIT', 'min_size', 'EDIT', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 28, 'Validar max_size de apellidos_persona en EDIT', 'max_size', 'EDIT', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 29, 'Validar format de apellidos_persona en EDIT', 'format', 'EDIT', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 30, 'Validar apellidos_persona correcto en EDIT', 'valid', 'EDIT', true, 'apellidos_persona correcto'],
    //SEARCH
    ['persona', 'apellidos_persona', 'input', 31, 'Validar max_size de apellidos_persona en SEARCH', 'max_size', 'SEARCH', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona tiene como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 32, 'Validar format de apellidos_persona en SEARCH', 'format', 'SEARCH', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 33, 'Validar apellidos_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'apellidos_persona correcto'],

    //Campo fechaNacimiento_persona
    //ADD
    ['persona', 'fechaNacimiento_persona', 'input', 34, 'Validar min_size de fechaNacimiento_persona en ADD', 'min_size', 'ADD', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 35, 'Validar max_size de fechaNacimiento_persona en ADD', 'max_size', 'ADD', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 36, 'Validar format de fechaNacimiento_persona en ADD', 'format', 'ADD', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 37, 'Validar fechaNacimiento_persona correcta en ADD', 'valid', 'ADD', true, 'fechaNacimiento_persona correcta'],
    //EDIT
	['persona', 'fechaNacimiento_persona', 'input', 38, 'Validar min_size de fechaNacimiento_persona en EDIT', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_KO', 'El campo fechaNacimiento_persona debe tener al menos 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 39, 'Validar max_size de fechaNacimiento_persona en EDIT', 'max_size', 'EDIT', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 40, 'Validar format de fechaNacimiento_persona en EDIT', 'format', 'EDIT', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 41, 'Validar fechaNacimiento_persona correcta en EDIT', 'valid', 'EDIT', true, 'fechaNacimiento_persona correcta'],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 'input', 42, 'Validar max_size de fechaNacimiento_persona en SEARCH', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_KO', 'El campo fechaNacimiento_persona debe tener como maximo 10 caracteres'],
	['persona', 'fechaNacimiento_persona', 'input', 43, 'Validar format de fechaNacimiento_persona en SEARCH', 'format', 'SEARCH', 'fechaNacimiento_persona_format_KO', 'El campo fechaNacimiento_persona debe tener formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 44, 'Validar fechaNacimiento_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'fechaNacimiento_persona correcta'],

    //Campo direccion_persona
    //ADD
    ['persona', 'direccion_persona', 'input', 45, 'Validar min_size de direccion_persona en ADD', 'min_size', 'ADD', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 46, 'Validar max_size de direccion_persona en ADD', 'max_size', 'ADD', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 47, 'Validar format de direccion_persona en ADD', 'format', 'ADD', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 48, 'Validar direccion_persona correcta en ADD', 'valid', 'ADD', true, 'direccion_persona correcta'],
    //EDIT
    ['persona', 'direccion_persona', 'input', 49, 'Validar min_size de direccion_persona en EDIT', 'min_size', 'EDIT', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 50, 'Validar max_size de direccion_persona en EDIT', 'max_size', 'EDIT', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 51, 'Validar format de direccion_persona en EDIT', 'format', 'EDIT', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 52, 'Validar direccion_persona correcta en EDIT', 'valid', 'EDIT', true, 'direccion_persona correcta'],
    //SEARCH
    ['persona', 'direccion_persona', 'input', 53, 'Validar max_size de direccion_persona en SEARCH', 'max_size', 'SEARCH', 'direccion_persona_max_size_KO', 'El campo direccion_persona tiene como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 54, 'Validar format de direccion_persona en SEARCH', 'format', 'SEARCH', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 55, 'Validar direccion_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'direccion_persona correcta'],

    //Campo telefono_persona
    //ADD
    ['persona', 'telefono_persona', 'input', 56, 'Validar min_size de telefono_persona en ADD', 'min_size', 'ADD', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 57, 'Validar max_size de telefono_persona en ADD', 'max_size', 'ADD', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 58, 'Validar format de telefono_persona en ADD', 'format', 'ADD', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 59, 'Validar telefono_persona correcto en ADD', 'valid', 'ADD', true, 'telefono_persona correcto'],
    //EDIT
    ['persona', 'telefono_persona', 'input', 60, 'Validar min_size de telefono_persona en EDIT', 'min_size', 'EDIT', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 61, 'Validar max_size de telefono_persona en EDIT', 'max_size', 'EDIT', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 62, 'Validar format de telefono_persona en EDIT', 'format', 'EDIT', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 63, 'Validar telefono_persona correcto en EDIT', 'valid', 'EDIT', true, 'telefono_persona correcto'],
    //SEARCH
    ['persona', 'telefono_persona', 'input', 64, 'Validar max_size de telefono_persona en SEARCH', 'max_size', 'SEARCH', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 65, 'Validar format de telefono_persona en SEARCH', 'format', 'SEARCH', 'telefono_persona_format_KO', 'El campo telefono_persona debe ser un telefono valido de Espana'],
    ['persona', 'telefono_persona', 'input', 66, 'Validar telefono_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'telefono_persona correcto'],

    //Campo email_persona
    //ADD
    ['persona', 'email_persona', 'input', 67, 'Validar format de email_persona en ADD', 'format', 'ADD', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 68, 'Validar email_persona correcto en ADD', 'valid', 'ADD', true, 'email_persona correcto'],
    //EDIT
    ['persona', 'email_persona', 'input', 69, 'Validar format de email_persona en EDIT', 'format', 'EDIT', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 70, 'Validar email_persona correcto en EDIT', 'valid', 'EDIT', true, 'email_persona correcto'],
    //SEARCH
    ['persona', 'email_persona', 'input', 71, 'Validar format de email_persona en SEARCH', 'format', 'SEARCH', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 72, 'Validar email_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'email_persona correcto'],

    /*Aclaración: Siguiendo las indicaciones de la respuesta dada en el foro de dudas de la ET1:
    Deben hacerse todas las validaciones ADD, EDIT y SEARCH de todos los atributos,
    independientemente de que se usen en el formulario o no*/ 

    //Campo nuevo_foto_persona
    //ADD
	['persona', 'nuevo_foto_persona', 'file', 73, 'Existe fichero en nuevo_foto_persona ADD', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_KO', 'No existe foto. Debe subir una foto en jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 74, 'Minimo nombre fichero nuevo_foto_persona ADD', 'min_name_file', 'ADD', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 75, 'Maximo nombre fichero nuevo_foto_persona ADD', 'max_name_file', 'ADD', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 76, 'Formato nombre fichero nuevo_foto_persona ADD', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 77, 'Tamaño fichero nuevo_foto_persona ADD', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
	['persona', 'nuevo_foto_persona', 'file', 78, 'Validar formato fichero nuevo_foto_persona ADD', 'format', 'ADD', 'nuevo_foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 79, 'Validar nuevo_foto_persona correcta en ADD', 'valid', 'ADD', true, 'nuevo_foto_persona correcta'],
    //EDIT
	['persona', 'nuevo_foto_persona', 'file', 80, 'Existe fichero en nuevo_foto_persona EDIT', 'exist_file', 'EDIT', true, ''],
    ['persona', 'nuevo_foto_persona', 'file', 81, 'Minimo nombre fichero nuevo_foto_persona EDIT', 'min_name_file', 'EDIT', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 82, 'Maximo nombre fichero nuevo_foto_persona EDIT', 'max_name_file', 'EDIT', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 83, 'Formato nombre fichero nuevo_foto_persona EDIT', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 84, 'Tamaño fichero nuevo_foto_persona EDIT', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 85, 'Validar formato fichero nuevo_foto_persona EDIT', 'format', 'EDIT', 'nuevo_foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 86, 'Validar nuevo_foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'nuevo_foto_persona correcta'],
    //SEARCH
    ['persona', 'nuevo_foto_persona', 'file', 87, 'Tamaño nombre fichero nuevo_foto_persona SEARCH', 'max_size_file', 'SEARCH', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 88, 'Formato nombre fichero nuevo_foto_persona SEARCH', 'format_name_file', 'SEARCH', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 89, 'Validar nuevo_foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'nuevo_foto_persona correcta'],

    //Campo foto_persona
    //ADD
    ['persona', 'foto_persona', 'file', 90, 'Existe fichero en foto_persona ADD', 'exist_file', 'ADD', 'foto_persona_exist_file_KO', 'No existe foto. Debe subir una foto en jpg o jpeg'],
    ['persona', 'foto_persona', 'file', 91, 'Minimo nombre fichero foto ADD', 'min_name_file', 'ADD', 'foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'foto_persona', 'file', 92, 'Maximo nombre fichero foto ADD', 'max_name_file', 'ADD', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'file', 93, 'Formato nombre fichero foto ADD', 'format_name_file', 'ADD', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'file', 94, 'Tamaño fichero foto ADD', 'max_size_file', 'ADD', 'foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'foto_persona', 'file', 95, 'Validar formato fichero foto ADD', 'format', 'ADD', 'foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'foto_persona', 'file', 96, 'Validar foto_persona correcta en ADD', 'valid', 'ADD', true, 'foto_persona correcta'],
    //EDIT
    ['persona', 'foto_persona', 'file', 97, 'Existe fichero en foto_persona EDIT', 'exist_file', 'EDIT', true, ''],
    ['persona', 'foto_persona', 'file', 98, 'Minimo nombre fichero foto EDIT', 'min_name_file', 'EDIT', 'foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'foto_persona', 'file', 99, 'Maximo nombre fichero foto EDIT', 'max_name_file', 'EDIT', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'file', 100, 'Formato nombre fichero foto EDIT', 'format_name_file', 'EDIT', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'file', 101, 'Tamaño fichero foto EDIT', 'max_size_file', 'EDIT', 'foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'foto_persona', 'file', 102, 'Validar formato fichero foto EDIT', 'format', 'EDIT', 'foto_persona_format_KO', 'Debe ser un archivo jpg o jpeg'],
    ['persona', 'foto_persona', 'file', 103, 'Validar foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'foto_persona correcta'],
    //SEARCH
    ['persona', 'foto_persona', 'file', 104, 'Tamaño fichero foto SEARCH', 'max_size_file', 'SEARCH', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'file', 105, 'Formato nombre fichero foto SEARCH', 'format_name_file', 'SEARCH', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'file', 106, 'Validar foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'foto_persona correcta']
];

var persona_pruebas = [
    //dni
    //ADD
    ['persona', 'dni', 1, 1, 'ADD', {'dni': '1234567'}, 'dni_min_size_KO'],
    ['persona', 'dni', 1, 2, 'ADD', {}, 'dni_min_size_KO'],
    ['persona', 'dni', 1, 3, 'ADD', {'dni': ''}, 'dni_min_size_KO'],
    ['persona', 'dni', 2, 4, 'ADD', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 3, 5, 'ADD', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 3, 6, 'ADD', {'dni': '         '}, 'dni_format_KO'],
    ['persona', 'dni', 3, 7, 'ADD', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 3, 8, 'ADD', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 4, 9, 'ADD', {'dni': '12345678Z'}, true],
    //EDIT
    ['persona', 'dni', 5, 10, 'EDIT', {'dni': '1234567'}, 'dni_min_size_KO'],
    ['persona', 'dni', 5, 11, 'EDIT', {}, 'dni_min_size_KO'],
    ['persona', 'dni', 5, 12, 'EDIT', {'dni': ''}, 'dni_min_size_KO'],
    ['persona', 'dni', 6, 13, 'EDIT', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 7, 14, 'EDIT', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 7, 15, 'EDIT', {'dni': '         '}, 'dni_format_KO'],
    ['persona', 'dni', 7, 16, 'EDIT', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 7, 17, 'EDIT', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 8, 18, 'EDIT', {'dni': '12345678Z'}, true],
    //SEARCH
    ['persona', 'dni', 9, 19, 'SEARCH', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 10, 20, 'SEARCH', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 10, 21, 'SEARCH', {}, 'dni_format_KO'],
    ['persona', 'dni', 10, 22, 'SEARCH', {'dni': ''}, 'dni_format_KO'],
    ['persona', 'dni', 10, 23, 'SEARCH', {'dni': '         '}, 'dni_format_KO'],
    ['persona', 'dni', 10, 24, 'SEARCH', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 10, 25, 'SEARCH', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 11, 26, 'SEARCH', {'dni': '12345678Z'}, true],

    //nombre_persona
    //ADD
    ['persona', 'nombre_persona', 12, 27, 'ADD', {'nombre_persona': 'A'}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 12, 28, 'ADD', {}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 12, 29, 'ADD', {'nombre_persona': ''}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 13, 30, 'ADD', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 14, 31, 'ADD', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 14, 32, 'ADD', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 15, 33, 'ADD', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 15, 34, 'ADD', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 15, 35, 'ADD', {'nombre_persona': 'María José'}, true],
    //EDIT
    ['persona', 'nombre_persona', 16, 36, 'EDIT', {'nombre_persona': 'A'}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 16, 37, 'EDIT', {}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 16, 38, 'EDIT', {'nombre_persona': ''}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 17, 39, 'EDIT', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 18, 40, 'EDIT', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 18, 41, 'EDIT', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 19, 42, 'EDIT', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 19, 43, 'EDIT', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 19, 44, 'EDIT', {'nombre_persona': 'María José'}, true],
    //SEARCH
    ['persona', 'nombre_persona', 20, 45, 'SEARCH', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 21, 46, 'SEARCH', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 21, 47, 'SEARCH', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 22, 48, 'SEARCH', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 22, 49, 'SEARCH', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 22, 50, 'SEARCH', {'nombre_persona': 'María José'}, true],

    //apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 23, 51, 'ADD', {'apellidos_persona': 'Lo'}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 23, 52, 'ADD', {}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 23, 53, 'ADD', {'apellidos_persona': ''}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 24, 54, 'ADD', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 25, 55, 'ADD', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 25, 56, 'ADD', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 26, 57, 'ADD', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 26, 58, 'ADD', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 26, 59, 'ADD', {'apellidos_persona': 'García-López'}, true],
    //EDIT
    ['persona', 'apellidos_persona', 27, 60, 'EDIT', {'apellidos_persona': 'Lo'}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 27, 61, 'EDIT', {}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 27, 62, 'EDIT', {'apellidos_persona': ''}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 28, 63, 'EDIT', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 29, 64, 'EDIT', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 29, 65, 'EDIT', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 30, 66, 'EDIT', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 30, 67, 'EDIT', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 30, 68, 'EDIT', {'apellidos_persona': 'García-López'}, true],
    //SEARCH
    ['persona', 'apellidos_persona', 31, 69, 'SEARCH', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 32, 70, 'SEARCH', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 32, 71, 'SEARCH', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 33, 72, 'SEARCH', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 33, 73, 'SEARCH', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 33, 74, 'SEARCH', {'apellidos_persona': 'García-López'}, true],

    //fechaNacimiento_persona
    //ADD
	['persona', 'fechaNacimiento_persona', 34, 75, 'ADD', {'fechaNacimiento_persona': '23'}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 34, 76, 'ADD', {}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 34, 77, 'ADD', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 35, 78, 'ADD', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 36, 79, 'ADD', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 36, 80, 'ADD', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 37, 81, 'ADD', {'fechaNacimiento_persona': '23/09/2020'}, true],
    //EDIT
	['persona', 'fechaNacimiento_persona', 38, 82, 'EDIT', {'fechaNacimiento_persona': '23'}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 38, 83, 'EDIT', {}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 38, 84, 'EDIT', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 39, 85, 'EDIT', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 40, 86, 'EDIT', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 40, 87, 'EDIT', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 41, 88, 'EDIT', {'fechaNacimiento_persona': '23/09/2020'}, true],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 42, 89, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 43, 90, 'SEARCH', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 43, 91, 'SEARCH', {}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 43, 92, 'SEARCH', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 43, 93, 'SEARCH', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 44, 94, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020'}, true],

    //direccion_persona
    //ADD
    ['persona', 'direccion_persona', 45, 95, 'ADD', {'direccion_persona': 'Calle 1'}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 45, 96, 'ADD', {}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 45, 97, 'ADD', {'direccion_persona': ''}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 46, 98, 'ADD', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 47, 99, 'ADD', {'direccion_persona': 'Calle @@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 48, 100, 'ADD', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 48, 101, 'ADD', {'direccion_persona': 'a'.repeat(200)}, true],
    //EDIT
    ['persona', 'direccion_persona', 49, 102, 'EDIT', {'direccion_persona': 'Calle 1'}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 49, 103, 'EDIT', {}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 49, 104, 'EDIT', {'direccion_persona': ''}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 50, 105, 'EDIT', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 51, 106, 'EDIT', {'direccion_persona': 'Calle @@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 52, 107, 'EDIT', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 52, 108, 'EDIT', {'direccion_persona': 'a'.repeat(200)}, true],
    //SEARCH
    ['persona', 'direccion_persona', 53, 109, 'SEARCH', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 54, 110, 'SEARCH', {'direccion_persona': 'Calle @@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 55, 111, 'SEARCH', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 55, 112, 'SEARCH', {'direccion_persona': 'a'.repeat(200)}, true],

    //telefono_persona
    //ADD
	['persona', 'telefono_persona', 56, 113, 'ADD', {'telefono_persona': '1234567'}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 56, 114, 'ADD', {}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 56, 115, 'ADD', {'telefono_persona': ''}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 57, 116, 'ADD', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 58, 117, 'ADD', {'telefono_persona': '12345678'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 58, 118, 'ADD', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 59, 119, 'ADD', {'telefono_persona': '612345678'}, true],
    //EDIT
	['persona', 'telefono_persona', 60, 120, 'EDIT', {'telefono_persona': '1234567'}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 60, 121, 'EDIT', {}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 60, 122, 'EDIT', {'telefono_persona': ''}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 61, 123, 'EDIT', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 62, 124, 'EDIT', {'telefono_persona': '12345678'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 62, 125, 'EDIT', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 63, 126, 'EDIT', {'telefono_persona': '612345678'}, true],
    //SEARCH
	['persona', 'telefono_persona', 64, 127, 'SEARCH', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 65, 128, 'SEARCH', {'telefono_persona': '12345678'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 65, 129, 'SEARCH', {}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 65, 130, 'SEARCH', {'telefono_persona': ''}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 65, 131, 'SEARCH', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 66, 132, 'SEARCH', {'telefono_persona': '612345678'}, true],

    //email_persona
    //ADD
    ['persona', 'email_persona', 67, 133, 'ADD', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 134, 'ADD', {}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 135, 'ADD', {'email_persona': ''}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 136, 'ADD', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 137, 'ADD', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 68, 138, 'ADD', {'email_persona': 'persona@example.com'}, true],
    //EDIT
    ['persona', 'email_persona', 69, 139, 'EDIT', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 140, 'EDIT', {}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 141, 'EDIT', {'email_persona': ''}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 142, 'EDIT', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 143, 'EDIT', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 70, 144, 'EDIT', {'email_persona': 'persona@example.com'}, true],
    //SEARCH
    ['persona', 'email_persona', 71, 145, 'SEARCH', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 146, 'SEARCH', {}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 147, 'SEARCH', {'email_persona': ''}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 148, 'SEARCH', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 149, 'SEARCH', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 72, 150, 'SEARCH', {'email_persona': 'persona@example.com'}, true],

    //nuevo_foto_persona
    //ADD
    ['persona', 'nuevo_foto_persona', 73, 151, 'ADD', {}, 'nuevo_foto_persona_exist_file_KO'],
	['persona', 'nuevo_foto_persona', 74, 152, 'ADD',{nuevo_foto_persona:{format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 74, 153, 'ADD',{nuevo_foto_persona:{format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
	['persona', 'nuevo_foto_persona', 75, 154, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 75, 155, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 75, 156, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 76, 157, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 77, 158, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'nuevo_foto_persona_max_size_file_KO'],
    ['persona', 'nuevo_foto_persona', 77, 159, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
	['persona', 'nuevo_foto_persona', 77, 160, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 78, 161, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'nuevo_foto_persona_format_KO'],
    ['persona', 'nuevo_foto_persona', 79, 162, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //EDIT
    ['persona', 'nuevo_foto_persona', 80, 163, 'EDIT', {}, true],
	['persona', 'nuevo_foto_persona', 81, 164, 'EDIT', {nuevo_foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 81, 165, 'EDIT', {nuevo_foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
	['persona', 'nuevo_foto_persona', 82, 166, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 82, 167, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 82, 168, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 83, 169, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 84, 170, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'nuevo_foto_persona_max_size_file_KO'],
    ['persona', 'nuevo_foto_persona', 84, 171, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
	['persona', 'nuevo_foto_persona', 84, 172, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 85, 173, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'nuevo_foto_persona_format_KO'],
    ['persona', 'nuevo_foto_persona', 86, 174, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //SEARCH
    ['persona', 'nuevo_foto_persona', 87, 175, 'SEARCH', {nuevo_foto_persona: 'foto123.jpg'}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 88, 176, 'SEARCH', {nuevo_foto_persona: 'f'.repeat(16) + '.jpg'}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 88, 177, 'SEARCH', {nuevo_foto_persona: 'f'.repeat(15) + '.jpg'}, true],
    ['persona', 'nuevo_foto_persona', 89, 178, 'SEARCH', {nuevo_foto_persona: 'foto.jpg'}, true],

    //foto_persona
    //ADD
    ['persona', 'foto_persona', 90, 179, 'ADD', {}, 'foto_persona_exist_file_KO'],
    ['persona', 'foto_persona', 91, 180, 'ADD', {foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 91, 181, 'ADD', {foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 92, 182, 'ADD', {foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 92, 183, 'ADD', {foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 92, 184, 'ADD', {foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 93, 185, 'ADD', {foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 94, 186, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 94, 187, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
    ['persona', 'foto_persona', 94, 188, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 95, 189, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'foto_persona_format_KO'],
    ['persona', 'foto_persona', 96, 190, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //EDIT
    ['persona', 'foto_persona', 97, 191, 'EDIT', {}, true],
    ['persona', 'foto_persona', 98, 192, 'EDIT', {foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 98, 193, 'EDIT', {foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 99, 194, 'EDIT', {foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 99, 195, 'EDIT', {foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 99, 196, 'EDIT', {foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 100, 197, 'EDIT', {foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 101, 198, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 101, 199, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
    ['persona', 'foto_persona', 101, 200, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 102, 201, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'foto_persona_format_KO'],
    ['persona', 'foto_persona', 103, 202, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //SEARCH
    ['persona', 'foto_persona', 104, 203, 'SEARCH', {foto_persona: 'f'.repeat(16) + '.jpg'}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 104, 204, 'SEARCH', {foto_persona: 'f'.repeat(15) + '.jpg'}, true],
    ['persona', 'foto_persona', 104, 205, 'SEARCH', {foto_persona: 'ab.jpg'}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 104, 206, 'SEARCH', {foto_persona: 'abc.jpg'}, true],
    ['persona', 'foto_persona', 105, 207, 'SEARCH', {foto_persona: 'foto123.jpg'}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 106, 208, 'SEARCH', {foto_persona: 'foto.jpg'}, true]
];