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
    ['persona', 'dni', 'input', 9, 'Validar max_size de dni en SEARCH', 'max_size', 'SEARCH', 'dni_max_size_KO', 'El campo dni debe tener como maximo 9 caracteres'],
    ['persona', 'dni', 'input', 10, 'Validar format de dni en SEARCH', 'format', 'SEARCH', 'dni_format_KO', 'El campo dni debe tener un formato DNI valido'],
    ['persona', 'dni', 'input', 11, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'dni correcto'],

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
    ['persona', 'nuevo_foto_persona', 'file', 87, 'Formato nombre fichero nuevo_foto_persona SEARCH', 'format_name_file', 'SEARCH', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 88, 'Tamaño nombre fichero nuevo_foto_persona SEARCH', 'max_name_file', 'SEARCH', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
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
    ['persona', 'foto_persona', 'file', 104, 'Tamaño nombre fichero foto SEARCH', 'max_name_file', 'SEARCH', 'foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'foto_persona', 'file', 105, 'Formato nombre fichero foto SEARCH', 'format_name_file', 'SEARCH', 'foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'file', 106, 'Validar foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'foto_persona correcta']
];

var persona_pruebas = [
    //dni
    //ADD
    ['persona', 'dni', 1, 1, 'ADD', {'dni': '1234567'}, 'dni_min_size_KO'],
    ['persona', 'dni', 1, 2, 'ADD', {'dni': ''}, 'dni_min_size_KO'],
    ['persona', 'dni', 2, 3, 'ADD', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 3, 4, 'ADD', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 3, 5, 'ADD', {'dni': '         '}, 'dni_format_KO'],
    ['persona', 'dni', 3, 6, 'ADD', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 3, 7, 'ADD', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 4, 8, 'ADD', {'dni': '12345678Z'}, true],
    //EDIT
    ['persona', 'dni', 5, 9, 'EDIT', {'dni': '1234567'}, 'dni_min_size_KO'],
    ['persona', 'dni', 5, 10, 'EDIT', {'dni': ''}, 'dni_min_size_KO'],
    ['persona', 'dni', 6, 11, 'EDIT', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 7, 12, 'EDIT', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 7, 13, 'EDIT', {'dni': '         '}, 'dni_format_KO'],
    ['persona', 'dni', 7, 14, 'EDIT', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 7, 15, 'EDIT', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 8, 16, 'EDIT', {'dni': '12345678Z'}, true],
    //SEARCH
    ['persona', 'dni', 9, 17, 'SEARCH', {'dni': '1234567890'}, 'dni_max_size_KO'],
    ['persona', 'dni', 10, 18, 'SEARCH', {'dni': '12345678A'}, 'dni_format_KO'],
    ['persona', 'dni', 11, 19, 'SEARCH', {'dni': ''}, true],
    ['persona', 'dni', 11, 20, 'SEARCH', {'dni': '         '}, true],
    ['persona', 'dni', 10, 21, 'SEARCH', {'dni': ' 12345678Z'}, 'dni_format_KO'],
    ['persona', 'dni', 10, 22, 'SEARCH', {'dni': '12345678Z '}, 'dni_format_KO'],
    ['persona', 'dni', 11, 23, 'SEARCH', {'dni': '12345678Z'}, true],

    //nombre_persona
    //ADD
    ['persona', 'nombre_persona', 12, 24, 'ADD', {'nombre_persona': 'A'}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 12, 25, 'ADD', {'nombre_persona': ''}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 13, 26, 'ADD', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 14, 27, 'ADD', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 14, 28, 'ADD', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 15, 29, 'ADD', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 15, 30, 'ADD', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 15, 31, 'ADD', {'nombre_persona': 'María José'}, true],
    //EDIT
    ['persona', 'nombre_persona', 16, 32, 'EDIT', {'nombre_persona': 'A'}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 16, 33, 'EDIT', {'nombre_persona': ''}, 'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 17, 34, 'EDIT', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 18, 35, 'EDIT', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 18, 36, 'EDIT', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 19, 37, 'EDIT', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 19, 38, 'EDIT', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 19, 39, 'EDIT', {'nombre_persona': 'María José'}, true],
    //SEARCH
    ['persona', 'nombre_persona', 20, 40, 'SEARCH', {'nombre_persona': 'a'.repeat(46)}, 'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 21, 41, 'SEARCH', {'nombre_persona': 'Ana123'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 21, 42, 'SEARCH', {'nombre_persona': 'Ana@'}, 'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 22, 43, 'SEARCH', {'nombre_persona': 'Al'}, true],
    ['persona', 'nombre_persona', 22, 44, 'SEARCH', {'nombre_persona': 'a'.repeat(45)}, true],
    ['persona', 'nombre_persona', 22, 45, 'SEARCH', {'nombre_persona': 'María José'}, true],

    //apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 23, 46, 'ADD', {'apellidos_persona': 'Lo'}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 23, 47, 'ADD', {'apellidos_persona': ''}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 24, 48, 'ADD', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 25, 49, 'ADD', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 25, 50, 'ADD', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 26, 51, 'ADD', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 26, 52, 'ADD', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 26, 53, 'ADD', {'apellidos_persona': 'García-López'}, true],
    //EDIT
    ['persona', 'apellidos_persona', 27, 54, 'EDIT', {'apellidos_persona': 'Lo'}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 27, 55, 'EDIT', {'apellidos_persona': ''}, 'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 28, 56, 'EDIT', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 29, 57, 'EDIT', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 29, 58, 'EDIT', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 30, 59, 'EDIT', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 30, 60, 'EDIT', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 30, 61, 'EDIT', {'apellidos_persona': 'García-López'}, true],
    //SEARCH
    ['persona', 'apellidos_persona', 31, 62, 'SEARCH', {'apellidos_persona': 'a'.repeat(101)}, 'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 32, 63, 'SEARCH', {'apellidos_persona': 'Perez123'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 32, 64, 'SEARCH', {'apellidos_persona': 'Perez@'}, 'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 33, 65, 'SEARCH', {'apellidos_persona': 'Ana'}, true],
    ['persona', 'apellidos_persona', 33, 66, 'SEARCH', {'apellidos_persona': 'a'.repeat(100)}, true],
    ['persona', 'apellidos_persona', 33, 67, 'SEARCH', {'apellidos_persona': 'García-López'}, true],

    //fechaNacimiento_persona
    //ADD
	['persona', 'fechaNacimiento_persona', 34, 68, 'ADD', {'fechaNacimiento_persona': '23'}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 34, 69, 'ADD', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 35, 70, 'ADD', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 36, 71, 'ADD', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 36, 72, 'ADD', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 37, 73, 'ADD', {'fechaNacimiento_persona': '23/09/2020'}, true],
    //EDIT
	['persona', 'fechaNacimiento_persona', 38, 74, 'EDIT', {'fechaNacimiento_persona': '23'}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 38, 75, 'EDIT', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
	['persona', 'fechaNacimiento_persona', 39, 76, 'EDIT', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 40, 77, 'EDIT', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 40, 78, 'EDIT', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 41, 79, 'EDIT', {'fechaNacimiento_persona': '23/09/2020'}, true],
    //SEARCH
	['persona', 'fechaNacimiento_persona', 42, 80, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020/extra'}, 'fechaNacimiento_persona_max_size_KO'],
    ['persona', 'fechaNacimiento_persona', 43, 81, 'SEARCH', {'fechaNacimiento_persona': '2020-09-23'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 44, 82, 'SEARCH', {'fechaNacimiento_persona': ''}, true],
    ['persona', 'fechaNacimiento_persona', 43, 83, 'SEARCH', {'fechaNacimiento_persona': '01/1a/2000'}, 'fechaNacimiento_persona_format_KO'],
    ['persona', 'fechaNacimiento_persona', 44, 84, 'SEARCH', {'fechaNacimiento_persona': '23/09/2020'}, true],

    //direccion_persona
    //ADD
    ['persona', 'direccion_persona', 45, 85, 'ADD', {'direccion_persona': 'Calle 1'}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 45, 86, 'ADD', {'direccion_persona': ''}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 46, 87, 'ADD', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 47, 88, 'ADD', {'direccion_persona': 'Calle @@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 48, 89, 'ADD', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 48, 90, 'ADD', {'direccion_persona': 'a'.repeat(200)}, true],
    //EDIT
    ['persona', 'direccion_persona', 49, 91, 'EDIT', {'direccion_persona': 'Calle 1'}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 49, 92, 'EDIT', {'direccion_persona': ''}, 'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 50, 93, 'EDIT', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 51, 94, 'EDIT', {'direccion_persona': 'Calle @@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 52, 95, 'EDIT', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 52, 96, 'EDIT', {'direccion_persona': 'a'.repeat(200)}, true],
    //SEARCH
    ['persona', 'direccion_persona', 53, 97, 'SEARCH', {'direccion_persona': 'a'.repeat(201)}, 'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 54, 98, 'SEARCH', {'direccion_persona': 'Calle @@@'}, 'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 55, 99, 'SEARCH', {'direccion_persona': 'Calle 1234'}, true],
    ['persona', 'direccion_persona', 55, 100, 'SEARCH', {'direccion_persona': 'a'.repeat(200)}, true],

    //telefono_persona
    //ADD
	['persona', 'telefono_persona', 56, 101, 'ADD', {'telefono_persona': '1234567'}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 56, 102, 'ADD', {'telefono_persona': ''}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 57, 103, 'ADD', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 58, 104, 'ADD', {'telefono_persona': '12345678'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 58, 105, 'ADD', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 59, 106, 'ADD', {'telefono_persona': '612345678'}, true],
    //EDIT
	['persona', 'telefono_persona', 60, 107, 'EDIT', {'telefono_persona': '1234567'}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 60, 108, 'EDIT', {'telefono_persona': ''}, 'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 61, 109, 'EDIT', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 62, 110, 'EDIT', {'telefono_persona': '12345678'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 62, 111, 'EDIT', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 63, 112, 'EDIT', {'telefono_persona': '612345678'}, true],
    //SEARCH
	['persona', 'telefono_persona', 64, 113, 'SEARCH', {'telefono_persona': '1234567890'}, 'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 65, 114, 'SEARCH', {'telefono_persona': '12345678'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 66, 115, 'SEARCH', {'telefono_persona': ''}, true],
    ['persona', 'telefono_persona', 65, 116, 'SEARCH', {'telefono_persona': '61234567a'}, 'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 66, 117, 'SEARCH', {'telefono_persona': '612345678'}, true],

    //email_persona
    //ADD
    ['persona', 'email_persona', 67, 118, 'ADD', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 119, 'ADD', {'email_persona': ''}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 120, 'ADD', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 67, 121, 'ADD', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 68, 122, 'ADD', {'email_persona': 'persona@example.com'}, true],
    //EDIT
    ['persona', 'email_persona', 69, 123, 'EDIT', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 124, 'EDIT', {'email_persona': ''}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 125, 'EDIT', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 69, 126, 'EDIT', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 70, 127, 'EDIT', {'email_persona': 'persona@example.com'}, true],
    //SEARCH
    ['persona', 'email_persona', 71, 128, 'SEARCH', {'email_persona': 'correo'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 72, 129, 'SEARCH', {'email_persona': ''}, true],
    ['persona', 'email_persona', 71, 130, 'SEARCH', {'email_persona': 'persona@'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 71, 131, 'SEARCH', {'email_persona': '@example.com'}, 'email_persona_format_KO'],
    ['persona', 'email_persona', 72, 132, 'SEARCH', {'email_persona': 'persona@example.com'}, true],

    //nuevo_foto_persona
    //ADD
    ['persona', 'nuevo_foto_persona', 73, 133, 'ADD', {nuevo_foto_persona: ''}, 'nuevo_foto_persona_exist_file_KO'],
	['persona', 'nuevo_foto_persona', 74, 134, 'ADD',{nuevo_foto_persona:{format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 74, 135, 'ADD',{nuevo_foto_persona:{format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
	['persona', 'nuevo_foto_persona', 75, 136, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 75, 137, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 75, 138, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 76, 139, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 77, 140, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'nuevo_foto_persona_max_size_file_KO'],
    ['persona', 'nuevo_foto_persona', 77, 141, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
	['persona', 'nuevo_foto_persona', 77, 142, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 78, 143, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'nuevo_foto_persona_format_KO'],
    ['persona', 'nuevo_foto_persona', 79, 144, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //EDIT
    ['persona', 'nuevo_foto_persona', 80, 145, 'EDIT', {nuevo_foto_persona: ''}, true],
	['persona', 'nuevo_foto_persona', 81, 146, 'EDIT', {nuevo_foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 81, 147, 'EDIT', {nuevo_foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
	['persona', 'nuevo_foto_persona', 82, 148, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 82, 149, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 82, 150, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'nuevo_foto_persona', 83, 151, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 84, 152, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'nuevo_foto_persona_max_size_file_KO'],
    ['persona', 'nuevo_foto_persona', 84, 153, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
	['persona', 'nuevo_foto_persona', 84, 154, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 85, 155, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'nuevo_foto_persona_format_KO'],
    ['persona', 'nuevo_foto_persona', 86, 156, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //SEARCH
    ['persona', 'nuevo_foto_persona', 87, 157, 'SEARCH', {nuevo_foto_persona: 'foto123.jpg'}, 'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 88, 158, 'SEARCH', {nuevo_foto_persona: 'f'.repeat(16) + '.jpg'}, 'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 88, 159, 'SEARCH', {nuevo_foto_persona: 'f'.repeat(15) + '.jpg'}, true],
    ['persona', 'nuevo_foto_persona', 89, 160, 'SEARCH', {nuevo_foto_persona: 'foto.jpg'}, true],

    //foto_persona
    //ADD
    ['persona', 'foto_persona', 90, 161, 'ADD', {foto_persona: ''}, 'foto_persona_exist_file_KO'],
    ['persona', 'foto_persona', 91, 162, 'ADD', {foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 91, 163, 'ADD', {foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 92, 164, 'ADD', {foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 92, 165, 'ADD', {foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 92, 166, 'ADD', {foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 93, 167, 'ADD', {foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 94, 168, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 94, 169, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
    ['persona', 'foto_persona', 94, 170, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 95, 171, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'foto_persona_format_KO'],
    ['persona', 'foto_persona', 96, 172, 'ADD', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //EDIT
    ['persona', 'foto_persona', 97, 173, 'EDIT', {foto_persona: ''}, true],
    ['persona', 'foto_persona', 98, 174, 'EDIT', {foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_min_name_file_KO'],
    ['persona', 'foto_persona', 98, 175, 'EDIT', {foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 99, 176, 'EDIT', {foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 99, 177, 'EDIT', {foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 99, 178, 'EDIT', {foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    ['persona', 'foto_persona', 100, 179, 'EDIT', {foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 101, 180, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 101, 181, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}}, true],
    ['persona', 'foto_persona', 101, 182, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}}, 'foto_persona_max_size_file_KO'],
    ['persona', 'foto_persona', 102, 183, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}}, 'foto_persona_format_KO'],
    ['persona', 'foto_persona', 103, 184, 'EDIT', {foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}}, true],
    //SEARCH
    ['persona', 'foto_persona', 104, 185, 'SEARCH', {foto_persona: 'f'.repeat(16) + '.jpg'}, 'foto_persona_max_name_file_KO'],
    ['persona', 'foto_persona', 104, 186, 'SEARCH', {foto_persona: 'f'.repeat(15) + '.jpg'}, true],
    ['persona', 'foto_persona', 106, 187, 'SEARCH', {foto_persona: 'ab.jpg'}, true],
    ['persona', 'foto_persona', 104, 188, 'SEARCH', {foto_persona: 'abc.jpg'}, true],
    ['persona', 'foto_persona', 105, 189, 'SEARCH', {foto_persona: 'foto123.jpg'}, 'foto_persona_format_name_file_KO'],
    ['persona', 'foto_persona', 106, 190, 'SEARCH', {foto_persona: 'foto.jpg'}, true]
];