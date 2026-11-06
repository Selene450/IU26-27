    var persona_def_tests = [
    //Campo dni no necesita tests ya que se valida en la entidad Usuario y en la entidad Persona solo eliges un dni de los existentes en Usuario

    //Campo nombre_persona
    //ADD
    ['persona', 'nombre_persona', 'input', 1, 'Validar min_size de nombre_persona en ADD', 'min_size', 'ADD', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 2, 'Validar max_size de nombre_persona en ADD', 'max_size', 'ADD', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 3, 'Validar formato de nombre_persona en ADD', 'format', 'ADD', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 4, 'Validar nombre_persona correcto en ADD', 'valid', 'ADD', true, 'nombre_persona correcto'],
    //EDIT
    ['persona', 'nombre_persona', 'input', 5, 'Validar min_size de nombre_persona en EDIT', 'min_size', 'EDIT', 'nombre_persona_min_size_KO', 'El campo nombre_persona debe tener al menos 2 caracteres'],
    ['persona', 'nombre_persona', 'input', 6, 'Validar max_size de nombre_persona en EDIT', 'max_size', 'EDIT', 'nombre_persona_max_size_KO', 'El campo nombre_persona debe tener como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 7, 'Validar format de nombre_persona en EDIT', 'format', 'EDIT', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 8, 'Validar nombre_persona correcto en EDIT', 'valid', 'EDIT', true, 'nombre_persona correcto'],
    //SEARCH
    ['persona', 'nombre_persona', 'input', 9, 'Validar max_size de nombre_persona en SEARCH', 'max_size', 'SEARCH', 'nombre_persona_max_size_KO', 'El campo nombre_persona tiene como maximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 10, 'Validar format de nombre_persona en SEARCH', 'format', 'SEARCH', 'nombre_persona_format_KO', 'El campo nombre_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 11, 'Validar nombre_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'nombre_persona correcto'],

    //Campo apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 'input', 12, 'Validar min_size de apellidos_persona en ADD', 'min_size', 'ADD', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 13, 'Validar max_size de apellidos_persona en ADD', 'max_size', 'ADD', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 14, 'Validar format de apellidos_persona en ADD', 'format', 'ADD', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 15, 'Validar apellidos_persona correcto en ADD', 'valid', 'ADD', true, 'apellidos_persona correcto'],
    //EDIT
    ['persona', 'apellidos_persona', 'input', 16, 'Validar min_size de apellidos_persona en EDIT', 'min_size', 'EDIT', 'apellidos_persona_min_size_KO', 'El campo apellidos_persona debe tener al menos 3 caracteres'],
    ['persona', 'apellidos_persona', 'input', 17, 'Validar max_size de apellidos_persona en EDIT', 'max_size', 'EDIT', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona debe tener como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 18, 'Validar format de apellidos_persona en EDIT', 'format', 'EDIT', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 19, 'Validar apellidos_persona correcto en EDIT', 'valid', 'EDIT', true, 'apellidos_persona correcto'],
    //SEARCH
    ['persona', 'apellidos_persona', 'input', 20, 'Validar max_size de apellidos_persona en SEARCH', 'max_size', 'SEARCH', 'apellidos_persona_max_size_KO', 'El campo apellidos_persona tiene como maximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 21, 'Validar format de apellidos_persona en SEARCH', 'format', 'SEARCH', 'apellidos_persona_format_KO', 'El campo apellidos_persona debe ser alfabetico incluyendo n, acentos, puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 22, 'Validar apellidos_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'apellidos_persona correcto'],

    //Campo fechaNacimiento_persona
    //ADD
    ['persona', 'fechaNacimiento_persona', 'date', 23, 'Validar fecha obligatoria en ADD', 'min_size', 'ADD', 'fechaNacimiento_persona_min_size_KO', 'La fecha de nacimiento es obligatoria'],
    ['persona', 'fechaNacimiento_persona', 'date', 24, 'Validar fecha correcta en ADD', 'valid', 'ADD', true, 'Fecha de nacimiento correcta'],
    ['persona', 'fechaNacimiento_persona', 'date', 25, 'Validar que la fecha en ADD no sea futura', 'personalized', 'ADD', 'fechaNacimiento_persona_future_KO', 'La fecha de nacimiento no puede ser futura'],
    //EDIT
    ['persona', 'fechaNacimiento_persona', 'date', 26, 'Validar fecha obligatoria en EDIT', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_KO', 'La fecha de nacimiento es obligatoria'],
    ['persona', 'fechaNacimiento_persona', 'date', 27, 'Validar fecha correcta en EDIT', 'valid', 'EDIT', true, 'Fecha de nacimiento correcta'],
    ['persona', 'fechaNacimiento_persona', 'date', 28, 'Validar que la fecha en EDIT no sea futura', 'personalized', 'EDIT', 'fechaNacimiento_persona_future_KO', 'La fecha de nacimiento no puede ser futura'],
    //SEARCH
    ['persona', 'fechaNacimiento_persona', 'date', 29, 'Validar que la fecha en SEARCH no sea futura', 'personalized', 'SEARCH', 'fechaNacimiento_persona_future_KO', 'La fecha de nacimiento no puede ser futura'],
    ['persona', 'fechaNacimiento_persona', 'date', 30, 'Validar fecha vacía o correcta en SEARCH', 'valid', 'SEARCH', true, 'Fecha de nacimiento correcta'],

    //Campo direccion_persona
    //ADD
    ['persona', 'direccion_persona', 'input', 31, 'Validar min_size de direccion_persona en ADD', 'min_size', 'ADD', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 32, 'Validar max_size de direccion_persona en ADD', 'max_size', 'ADD', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 33, 'Validar format de direccion_persona en ADD', 'format', 'ADD', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 34, 'Validar direccion_persona correcta en ADD', 'valid', 'ADD', true, 'direccion_persona correcta'],
    //EDIT
    ['persona', 'direccion_persona', 'input', 35, 'Validar min_size de direccion_persona en EDIT', 'min_size', 'EDIT', 'direccion_persona_min_size_KO', 'El campo direccion_persona debe tener al menos 10 caracteres'],
    ['persona', 'direccion_persona', 'input', 36, 'Validar max_size de direccion_persona en EDIT', 'max_size', 'EDIT', 'direccion_persona_max_size_KO', 'El campo direccion_persona debe tener como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 37, 'Validar format de direccion_persona en EDIT', 'format', 'EDIT', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 38, 'Validar direccion_persona correcta en EDIT', 'valid', 'EDIT', true, 'direccion_persona correcta'],
    //SEARCH
    ['persona', 'direccion_persona', 'input', 39, 'Validar max_size de direccion_persona en SEARCH', 'max_size', 'SEARCH', 'direccion_persona_max_size_KO', 'El campo direccion_persona tiene como maximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 40, 'Validar format de direccion_persona en SEARCH', 'format', 'SEARCH', 'direccion_persona_format_KO', 'El campo direccion_persona debe ser alfanumerico con n, acentos, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 41, 'Validar direccion_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'direccion_persona correcta'],

    //Campo telefono_persona
    //ADD
    ['persona', 'telefono_persona', 'input', 42, 'Validar min_size de telefono_persona en ADD', 'min_size', 'ADD', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 43, 'Validar max_size de telefono_persona en ADD', 'max_size', 'ADD', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 44, 'Validar format de telefono_persona en ADD', 'format', 'ADD', 'telefono_persona_format_KO', 'El campo telefono_persona debe contener 9 cifras'],
    ['persona', 'telefono_persona', 'input', 45, 'Validar prefijo de telefono_persona en ADD', 'personalized', 'ADD', 'telefono_persona_personalized_KO', 'Numero no valido en Espana: debe empezar por 6, 7 o 9'],
    ['persona', 'telefono_persona', 'input', 46, 'Validar telefono_persona correcto en ADD', 'valid', 'ADD', true, 'telefono_persona correcto'],
    //EDIT
    ['persona', 'telefono_persona', 'input', 47, 'Validar min_size de telefono_persona en EDIT', 'min_size', 'EDIT', 'telefono_persona_min_size_KO', 'El campo telefono_persona debe tener al menos 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 48, 'Validar max_size de telefono_persona en EDIT', 'max_size', 'EDIT', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 49, 'Validar format de telefono_persona en EDIT', 'format', 'EDIT', 'telefono_persona_format_KO', 'El campo telefono_persona debe contener 9 cifras'],
    ['persona', 'telefono_persona', 'input', 50, 'Validar prefijo de telefono_persona en EDIT', 'personalized', 'EDIT', 'telefono_persona_personalized_KO', 'Numero no valido en Espana: debe empezar por 6, 7 o 9'],
    ['persona', 'telefono_persona', 'input', 51, 'Validar telefono_persona correcto en EDIT', 'valid', 'EDIT', true, 'telefono_persona correcto'],
    //SEARCH
    ['persona', 'telefono_persona', 'input', 52, 'Validar max_size de telefono_persona en SEARCH', 'max_size', 'SEARCH', 'telefono_persona_max_size_KO', 'El campo telefono_persona debe tener como maximo 9 caracteres'],
    ['persona', 'telefono_persona', 'input', 53, 'Validar format de telefono_persona en SEARCH', 'format', 'SEARCH', 'telefono_persona_format_KO', 'El campo telefono_persona debe contener 9 cifras'],
    ['persona', 'telefono_persona', 'input', 54, 'Validar telefono_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'telefono_persona correcto'],

    //Campo email_persona
    //ADD
    ['persona', 'email_persona', 'input', 55, 'Validar min_size de email_persona en ADD', 'min_size', 'ADD', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 56, 'Validar max_size de email_persona en ADD', 'max_size', 'ADD', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 57, 'Validar format de email_persona en ADD', 'format', 'ADD', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 58, 'Validar email_persona correcto en ADD', 'valid', 'ADD', true, 'email_persona correcto'],
    //EDIT
    ['persona', 'email_persona', 'input', 59, 'Validar min_size de email_persona en EDIT', 'min_size', 'EDIT', 'email_persona_min_size_KO', 'El email debe tener al menos 5 caracteres'],
    ['persona', 'email_persona', 'input', 60, 'Validar max_size de email_persona en EDIT', 'max_size', 'EDIT', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 61, 'Validar format de email_persona en EDIT', 'format', 'EDIT', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 62, 'Validar email_persona correcto en EDIT', 'valid', 'EDIT', true, 'email_persona correcto'],
    //SEARCH
    ['persona', 'email_persona', 'input', 63, 'Validar max_size de email_persona en SEARCH', 'max_size', 'SEARCH', 'email_persona_max_size_KO', 'El email no debe superar 45 caracteres'],
    ['persona', 'email_persona', 'input', 64, 'Validar format de email_persona en SEARCH', 'format', 'SEARCH', 'email_persona_format_KO', 'El campo email_persona debe tener un formato de email valido'],
    ['persona', 'email_persona', 'input', 65, 'Validar email_persona correcto en SEARCH', 'valid', 'SEARCH', true, 'email_persona correcto'],

    //Campo nuevo_foto_persona
    //ADD
	['persona', 'nuevo_foto_persona', 'file', 66, 'Existe fichero en nuevo_foto_persona ADD', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_KO', 'No existe foto. Debe subir una foto en jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 67, 'Minimo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
	['persona', 'nuevo_foto_persona', 'file', 68, 'Maximo nombre fichero nuevo_foto_persona ADD', 'personalized', 'ADD', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 69, 'Tipo de fichero nuevo_foto_persona ADD', 'type_file', 'ADD', 'nuevo_foto_persona_type_file_KO', 'Tipo de fichero incorrecto. Debe ser jpg o jpeg'],
	['persona', 'nuevo_foto_persona', 'file', 70, 'Formato nombre fichero nuevo_foto_persona ADD', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 71, 'Tamaño fichero nuevo_foto_persona ADD', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 72, 'Validar nuevo_foto_persona correcta en ADD', 'valid', 'ADD', true, 'nuevo_foto_persona correcta'],
    //EDIT
    ['persona', 'nuevo_foto_persona', 'file', 73, 'Existe fichero en nuevo_foto_persona EDIT', 'exist_file', 'EDIT', true, 'nuevo_foto_persona es opcional en EDIT: sin fichero es correcto'],
    ['persona', 'nuevo_foto_persona', 'file', 74, 'Minimo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_min_name_file_KO', 'Nombre de foto incorrecto. Debe tener al menos 3 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 75, 'Maximo nombre fichero nuevo_foto_persona EDIT', 'personalized', 'EDIT', 'nuevo_foto_persona_max_name_file_KO', 'Nombre de foto incorrecto. Debe tener como maximo 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 76, 'Formato nombre fichero nuevo_foto_persona EDIT', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'Nombre de foto incorrecto. Debe ser alfabetico y terminar en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 77, 'Tipo de fichero nuevo_foto_persona EDIT', 'type_file', 'EDIT', 'nuevo_foto_persona_type_file_KO', 'Tipo de fichero incorrecto. Debe ser jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 78, 'Tamaño fichero nuevo_foto_persona EDIT', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_KO', 'Tamaño de fichero excesivo. Debe ser menor de 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 79, 'Validar nuevo_foto_persona correcta en EDIT', 'valid', 'EDIT', true, 'nuevo_foto_persona correcta'],
    
    //Campo foto_persona: nombre del archivo guardado
    //SEARCH
    ['persona', 'foto_persona', 'input', 80, 'Validar max_size de foto_persona en SEARCH', 'max_size', 'SEARCH', 'foto_persona_max_size_KO', 'El nombre de la foto no puede superar las 15 letras antes de la extension'],
    ['persona', 'foto_persona', 'input', 81, 'Validar formato de foto_persona en SEARCH', 'format', 'SEARCH', 'foto_persona_format_KO', 'El nombre de la foto debe contener solo letras y terminar en .jpg o .jpeg'],
    ['persona', 'foto_persona', 'input', 82, 'Validar foto_persona correcta en SEARCH', 'valid', 'SEARCH', true, 'foto_persona correcta'],
];

var persona_pruebas = [


    //nombre_persona
    //ADD
    ['persona', 'nombre_persona', 1, 1, 'ADD', {'nombre_persona': 'A'},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 1, 2, 'ADD', {'nombre_persona': ''},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 2, 3, 'ADD', {'nombre_persona': 'a'.repeat(46)},'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 3, 4, 'ADD', {'nombre_persona': 'Ana123'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 3, 5, 'ADD', {'nombre_persona': 'Ana@'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 4, 6, 'ADD', {'nombre_persona': 'Al'},true],
    ['persona', 'nombre_persona', 4, 7, 'ADD', {'nombre_persona': 'a'.repeat(45)},true],
    ['persona', 'nombre_persona', 4, 8, 'ADD', {'nombre_persona': 'María José'},true],
    //EDIT
    ['persona', 'nombre_persona', 5, 9, 'EDIT', {'nombre_persona': 'A'},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 5, 10, 'EDIT', {'nombre_persona': ''},'nombre_persona_min_size_KO'],
    ['persona', 'nombre_persona', 6, 11, 'EDIT', {'nombre_persona': 'a'.repeat(46)},'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 7, 12, 'EDIT', {'nombre_persona': 'Ana123'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 7, 13, 'EDIT', {'nombre_persona': 'Ana@'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 8, 14, 'EDIT', {'nombre_persona': 'Al'},true],
    ['persona', 'nombre_persona', 8, 15, 'EDIT', {'nombre_persona': 'a'.repeat(45)},true],
    ['persona', 'nombre_persona', 8, 16, 'EDIT', {'nombre_persona': 'María José'},true],
    //SEARCH
    ['persona', 'nombre_persona', 9, 17, 'SEARCH', {'nombre_persona': 'a'.repeat(46)},'nombre_persona_max_size_KO'],
    ['persona', 'nombre_persona', 10, 18, 'SEARCH', {'nombre_persona': 'Ana123'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 10, 19, 'SEARCH', {'nombre_persona': 'Ana@'},'nombre_persona_format_KO'],
    ['persona', 'nombre_persona', 11, 20, 'SEARCH', {'nombre_persona': 'Al'},true],
    ['persona', 'nombre_persona', 11, 21, 'SEARCH', {'nombre_persona': 'a'.repeat(45)},true],
    ['persona', 'nombre_persona', 11, 22, 'SEARCH', {'nombre_persona': 'María José'},true],

    //apellidos_persona
    //ADD
    ['persona', 'apellidos_persona', 12, 23, 'ADD', {'apellidos_persona': 'Lo'},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 12, 24, 'ADD', {'apellidos_persona': ''},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 13, 25, 'ADD', {'apellidos_persona': 'a'.repeat(101)},'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 14, 26, 'ADD', {'apellidos_persona': 'Perez123'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 14, 27, 'ADD', {'apellidos_persona': 'Perez@'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 15, 28, 'ADD', {'apellidos_persona': 'Ana'},true],
    ['persona', 'apellidos_persona', 15, 29, 'ADD', {'apellidos_persona': 'a'.repeat(100)},true],
    ['persona', 'apellidos_persona', 15, 30, 'ADD', {'apellidos_persona': 'García-López'},true],
    //EDIT
    ['persona', 'apellidos_persona', 16, 31, 'EDIT', {'apellidos_persona': 'Lo'},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 16, 32, 'EDIT', {'apellidos_persona': ''},'apellidos_persona_min_size_KO'],
    ['persona', 'apellidos_persona', 17, 33, 'EDIT', {'apellidos_persona': 'a'.repeat(101)},'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 18, 34, 'EDIT', {'apellidos_persona': 'Perez123'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 18, 35, 'EDIT', {'apellidos_persona': 'Perez@'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 19, 36, 'EDIT', {'apellidos_persona': 'Ana'},true],
    ['persona', 'apellidos_persona', 19, 37, 'EDIT', {'apellidos_persona': 'a'.repeat(100)},true],
    ['persona', 'apellidos_persona', 19, 38, 'EDIT', {'apellidos_persona': 'García-López'},true],
    //SEARCH
    ['persona', 'apellidos_persona', 20, 39, 'SEARCH', {'apellidos_persona': 'a'.repeat(101)},'apellidos_persona_max_size_KO'],
    ['persona', 'apellidos_persona', 21, 40, 'SEARCH', {'apellidos_persona': 'Perez123'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 21, 41, 'SEARCH', {'apellidos_persona': 'Perez@'},'apellidos_persona_format_KO'],
    ['persona', 'apellidos_persona', 22, 42, 'SEARCH', {'apellidos_persona': 'Ana'},true],
    ['persona', 'apellidos_persona', 22, 43, 'SEARCH', {'apellidos_persona': 'a'.repeat(100)},true],
    ['persona', 'apellidos_persona', 22, 44, 'SEARCH', {'apellidos_persona': 'García-López'},true],

    //fechaNacimiento_persona
    //ADD
    ['persona', 'fechaNacimiento_persona', 23, 45, 'ADD', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
    ['persona', 'fechaNacimiento_persona', 24, 46, 'ADD', {'fechaNacimiento_persona': '2020-09-23'}, true],
    ['persona', 'fechaNacimiento_persona', 25, 47, 'ADD', {'fechaNacimiento_persona': `${new Date().getFullYear() + 1}-01-01`}, 'fechaNacimiento_persona_future_KO'],
    //EDIT
    ['persona', 'fechaNacimiento_persona', 26, 48, 'EDIT', {'fechaNacimiento_persona': ''}, 'fechaNacimiento_persona_min_size_KO'],
    ['persona', 'fechaNacimiento_persona', 27, 49, 'EDIT', {'fechaNacimiento_persona': '2020-09-23'}, true],
    ['persona', 'fechaNacimiento_persona', 28, 50, 'EDIT', {'fechaNacimiento_persona': `${new Date().getFullYear() + 1}-01-01`}, 'fechaNacimiento_persona_future_KO'],
    //SEARCH
    ['persona', 'fechaNacimiento_persona', 29, 51, 'SEARCH', {'fechaNacimiento_persona': `${new Date().getFullYear() + 1}-01-01`}, 'fechaNacimiento_persona_future_KO'],
    ['persona', 'fechaNacimiento_persona', 30, 52, 'SEARCH', {'fechaNacimiento_persona': ''}, true],
    ['persona', 'fechaNacimiento_persona', 30, 53, 'SEARCH', {'fechaNacimiento_persona': '2020-09-23'}, true],

    //direccion_persona
    //ADD
    ['persona', 'direccion_persona', 31, 54, 'ADD', {'direccion_persona': 'Calle 1'},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 31, 55, 'ADD', {'direccion_persona': ''},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 32, 56, 'ADD', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 33, 57, 'ADD', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 34, 58, 'ADD', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 34, 59, 'ADD', {'direccion_persona': 'a'.repeat(200)},true],
    //EDIT
    ['persona', 'direccion_persona', 35, 60, 'EDIT', {'direccion_persona': 'Calle 1'},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 35, 61, 'EDIT', {'direccion_persona': ''},'direccion_persona_min_size_KO'],
    ['persona', 'direccion_persona', 36, 62, 'EDIT', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 37, 63, 'EDIT', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 38, 64, 'EDIT', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 38, 65, 'EDIT', {'direccion_persona': 'a'.repeat(200)},true],
    //SEARCH
    ['persona', 'direccion_persona', 39, 66, 'SEARCH', {'direccion_persona': 'a'.repeat(201)},'direccion_persona_max_size_KO'],
    ['persona', 'direccion_persona', 40, 67, 'SEARCH', {'direccion_persona': 'Calle @@@@'},'direccion_persona_format_KO'],
    ['persona', 'direccion_persona', 41, 68, 'SEARCH', {'direccion_persona': 'Calle 1234'},true],
    ['persona', 'direccion_persona', 41, 69, 'SEARCH', {'direccion_persona': 'a'.repeat(200)},true],

    //telefono_persona
    //ADD
	['persona', 'telefono_persona', 42, 70, 'ADD', {'telefono_persona': '1234567'},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 42, 71, 'ADD', {'telefono_persona': ''},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 43, 72, 'ADD', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 44, 73, 'ADD', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 44, 74, 'ADD', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
	['persona', 'telefono_persona', 45, 75, 'ADD', {'telefono_persona': '123456789'},'telefono_persona_personalized_KO'],
	['persona', 'telefono_persona', 46, 76, 'ADD', {'telefono_persona': '612345678'},true],
	['persona', 'telefono_persona', 46, 77, 'ADD', {'telefono_persona': '712345678'},true],
	['persona', 'telefono_persona', 46, 78, 'ADD', {'telefono_persona': '912345678'},true],
    //EDIT
	['persona', 'telefono_persona', 47, 79, 'EDIT', {'telefono_persona': '1234567'},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 47, 80, 'EDIT', {'telefono_persona': ''},'telefono_persona_min_size_KO'],
	['persona', 'telefono_persona', 48, 81, 'EDIT', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 49, 82, 'EDIT', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 49, 83, 'EDIT', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
	['persona', 'telefono_persona', 50, 84, 'EDIT', {'telefono_persona': '123456789'},'telefono_persona_personalized_KO'],
	['persona', 'telefono_persona', 51, 85, 'EDIT', {'telefono_persona': '612345678'},true],
	['persona', 'telefono_persona', 51, 86, 'EDIT', {'telefono_persona': '712345678'},true],
	['persona', 'telefono_persona', 51, 87, 'EDIT', {'telefono_persona': '912345678'},true],
    //SEARCH
	['persona', 'telefono_persona', 52, 88, 'SEARCH', {'telefono_persona': '1234567890'},'telefono_persona_max_size_KO'],
    ['persona', 'telefono_persona', 53, 89, 'SEARCH', {'telefono_persona': '1234567a8'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 53, 90, 'SEARCH', {'telefono_persona': '61234567a'},'telefono_persona_format_KO'],
    ['persona', 'telefono_persona', 54, 91, 'SEARCH', {'telefono_persona': ''},true],
    ['persona', 'telefono_persona', 54, 92, 'SEARCH', {'telefono_persona': '612345678'},true],
    //email_persona
    //ADD
    ['persona', 'email_persona', 55, 93, 'ADD', {'email_persona': 'a@b'},'email_persona_min_size_KO'],
    ['persona', 'email_persona', 56, 94, 'ADD', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 57, 95, 'ADD', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 57, 96, 'ADD', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 57, 97, 'ADD', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 58, 98, 'ADD', {'email_persona': 'persona@example.com'},true],
    ['persona', 'email_persona', 58, 99, 'ADD', {'email_persona': 'a@b.c'},true],
    ['persona', 'email_persona', 58, 100, 'ADD', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    //EDIT
    ['persona', 'email_persona', 59, 101, 'EDIT', {'email_persona': 'a@b'},'email_persona_min_size_KO'],
    ['persona', 'email_persona', 60, 102, 'EDIT', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 61, 103, 'EDIT', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 61, 104, 'EDIT', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 61, 105, 'EDIT', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 62, 106, 'EDIT', {'email_persona': 'persona@example.com'},true],
    ['persona', 'email_persona', 62, 107, 'EDIT', {'email_persona': 'a@b.c'},true],
    ['persona', 'email_persona', 62, 108, 'EDIT', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    //SEARCH
    ['persona', 'email_persona', 63, 109, 'SEARCH', {'email_persona': 'a'.repeat(33) + '@' + 'b'.repeat(8) + '.com'},'email_persona_max_size_KO'],
    ['persona', 'email_persona', 64, 110, 'SEARCH', {'email_persona': 'correo'},'email_persona_format_KO'],
    ['persona', 'email_persona', 64, 111, 'SEARCH', {'email_persona': 'persona@'},'email_persona_format_KO'],
    ['persona', 'email_persona', 64, 112, 'SEARCH', {'email_persona': '@example.com'},'email_persona_format_KO'],
    ['persona', 'email_persona', 65, 113, 'SEARCH', {'email_persona': ''},true],
    ['persona', 'email_persona', 65, 114, 'SEARCH', {'email_persona': 'a'.repeat(32) + '@' + 'b'.repeat(8) + '.com'},true],
    ['persona', 'email_persona', 65, 115, 'SEARCH', {'email_persona': 'a@b.c'},true],

    //nuevo_foto_persona
    //ADD
    ['persona', 'nuevo_foto_persona', 66, 116, 'ADD', {},'nuevo_foto_persona_exist_file_KO'],
	['persona', 'nuevo_foto_persona', 67, 117, 'ADD',{nuevo_foto_persona:{format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 68, 118, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 68, 119, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 69, 120, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}},'nuevo_foto_persona_type_file_KO'],
    ['persona', 'nuevo_foto_persona', 70, 121, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_format_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 71, 122, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 71, 123, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 72, 124, 'ADD',{nuevo_foto_persona:{format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 72, 125, 'ADD', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 72, 126, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}},true],
    ['persona', 'nuevo_foto_persona', 72, 127, 'ADD', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    //EDIT
    ['persona', 'nuevo_foto_persona', 73, 128, 'EDIT', {},true],
	['persona', 'nuevo_foto_persona', 74, 129, 'EDIT', {nuevo_foto_persona: {format_name_file: 'fo.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_min_name_file_KO'],
	['persona', 'nuevo_foto_persona', 75, 130, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123456789012345.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
	['persona', 'nuevo_foto_persona', 75, 131, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(16) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_max_name_file_KO'],
    ['persona', 'nuevo_foto_persona', 76, 132, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto123.jpg', type_file: 'image/jpeg', max_size_file: 200000}},'nuevo_foto_persona_format_name_file_KO'],
	['persona', 'nuevo_foto_persona', 77, 133, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 200000}},'nuevo_foto_persona_type_file_KO'],
    ['persona', 'nuevo_foto_persona', 78, 134, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 3000000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 78, 135, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2100000}},'nuevo_foto_persona_max_size_file_KO'],
	['persona', 'nuevo_foto_persona', 79, 136, 'EDIT', {nuevo_foto_persona: {format_name_file: 'abc.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 79, 137, 'EDIT', {nuevo_foto_persona: {format_name_file: 'a'.repeat(15) + '.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    ['persona', 'nuevo_foto_persona', 79, 138, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 1999999}},true],
    ['persona', 'nuevo_foto_persona', 79, 139, 'EDIT', {nuevo_foto_persona: {format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 200000}},true],
    
    //foto_persona
    //SEARCH
    ['persona', 'foto_persona', 80, 140, 'SEARCH', {foto_persona: 'a'.repeat(16) + '.jpg'},'foto_persona_max_size_KO'],
    ['persona', 'foto_persona', 81, 141, 'SEARCH', {foto_persona: 'foto123.jpg'},'foto_persona_format_KO'],
    ['persona', 'foto_persona', 82, 142, 'SEARCH', {foto_persona: ''},true],
    ['persona', 'foto_persona', 82, 143, 'SEARCH', {foto_persona: 'abc.jpg'},true],
];