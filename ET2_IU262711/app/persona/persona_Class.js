/**
 * Gestión de la entidad `persona`, con validaciones de DNI, fecha de nacimiento y fichero de foto.
 * @extends AbstractEntidad
 */
class persona extends AbstractEntidad {

	/**
	 * Crea la gestión de la entidad `persona`. Si `esTest` es distinto de `'test'`, monta también la interfaz.
	 * @param {string|null} [esTest=null] `'test'` para instanciar sin montar la interfaz
	 */
	constructor(esTest = null) {

		super();

		this.esTest = esTest == 'test';
		this.columnasamostrar = ['dni', 'nombre_persona', 'foto_persona'];
		this.mostrarespecial = ['foto_persona', 'fechaNacimiento_persona'];
		this.nombreentidad = 'persona';

		this.dom = new entity_dom_fields();
		this.instalarLimpiezaMensajesError();
		this.validations = new Validations();
		this.access_functions = new ExternalAccess();
		this.dnisDisponibles = null;


		//init
		if (esTest == 'test') { }
		else {
			//visualizar seccion tabla y botones
			document.getElementById('IU_manage_entity').style.display = 'block';
			document.getElementById('add_search_columns').style.display = 'block';
			this.dom.mostrarControlesEntidad();
			document.getElementById('text_title_page').className = 'text_titulo_page_' + this.nombreentidad;

			//crear el formulario vacio
			document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

			//invocar busqueda en back con el formulario vacio
			this.SEARCH();
		}
	}

	/**
	 * Envuelve `dom.mostrar_error_campo` para quitar la clase de error del campo antes de mostrar uno nuevo.
	 * @returns {void}
	 */
	instalarLimpiezaMensajesError() {
		const mostrarError = this.dom.mostrar_error_campo.bind(this.dom);
		this.dom.mostrar_error_campo = (id, codigoError) => {
			document.getElementById('error_' + id)?.removeAttribute('class');
			mostrarError(id, codigoError);
		};
	}

	/**
	 * Devuelve el HTML de los campos del formulario de la entidad.
	 * @returns {string}
	 */
	manual_form_creation() {
		var form_content = `
			<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

				<label class="label_dni">dni</label>
				<input type='select' id='dni' name='dni'></input>
				<span id="span_error_dni"><a id="error_dni"></a></span>
				<br>
				
				<label class="label_nombre_persona">Nombre de pila</label>
				<input type='text' id='nombre_persona' name='nombre_persona' ></input>
				<span id="span_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
				<br>
				
				<label class="label_apellidos_persona">apellidos</label>
				<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
				<span id="span_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
				<br>
				
				<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
				<input type='date' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
				<span id="span_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
				
				<br>
				<label class="label_direccion_persona">Dirección Postal</label>
				<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
				<span id="span_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
				<br>

				<label class="label_telefono_persona">Teléfono Persona</label>
				<input type='text' id='telefono_persona' name='telefono_persona'></input>
				<span id="span_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
				
				<br>
				<label class="label_email_persona">Correo Electronico</label>
				<input type='text' id='email_persona' name='email_persona'></input>
				<span id="span_error_email_persona" ><a id="error_email_persona"></a></span>

				<br>
				<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
				<input type='text' id='foto_persona' name='foto_persona'></input>
				<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
				<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
				
				<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
				<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
				<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
				<br>

			</form>
		`;
		return form_content;

	}

	/**********************************************************************************************
		fields validations for ADD
	***********************************************************************************************/

	/** 
		
		@return	{string} Error code of field value (fieldname_validationfunction_ko) or
		@return {bool} true due the field value is correct

	*/
	async cargarUsuariosDisponibles(dniSeleccionado = '', incluirOcupados = false) {
		const selectDni = document.getElementById('dni');
		selectDni.disabled = true;
		this.dnisDisponibles = null;
		try {
			const [respuestaUsuarios, respuestaPersonas] = await Promise.all([
				this.access_functions.peticionBackGeneral('', 'usuario', 'SEARCH'),
				incluirOcupados
					? Promise.resolve({ code: 'RECORDSET_VACIO' })
					: this.access_functions.peticionBackGeneral('', 'persona', 'SEARCH')
			]);
			const obtenerRegistros = (respuesta, entidad) => {
				if (respuesta.code === 'RECORDSET_VACIO') {
					return [];
				}
				if (respuesta.code === 'RECORDSET_DATOS' && Array.isArray(respuesta.resource)) {
					return respuesta.resource;
				}
				throw new Error(respuesta.code || 'text_error_cargar_datos');
			};
			const usuarios = obtenerRegistros(respuestaUsuarios, 'usuarios');
			const personas = obtenerRegistros(respuestaPersonas, 'personas');
			const dnisOcupados = new Set(personas
				.map(persona => String(persona.dni))
				.filter(dni => dni !== String(dniSeleccionado)));
			const usuariosSeleccionados = incluirOcupados
				? usuarios
				: usuarios.filter(usuario => !dnisOcupados.has(String(usuario.dni)));
			this.dnisDisponibles = new Set(usuariosSeleccionados.map(usuario => String(usuario.dni)));

			const opcionVacia = document.createElement('option');
			opcionVacia.value = '';
			opcionVacia.textContent = '';
			selectDni.replaceChildren(opcionVacia);
			usuariosSeleccionados.forEach(usuario => {
				const opcion = document.createElement('option');
				opcion.value = usuario.dni;
				opcion.textContent = usuario.dni;
				selectDni.appendChild(opcion);
			});
			selectDni.value = dniSeleccionado;
		} catch (error) {
			this.dom.abrirModalError(error.message || 'text_error_cargar_usuarios');
		} finally {
			selectDni.disabled = false;
		}
	}

	/**
	 * Comprueba que el DNI elegido exista en usuario y no esté ya asociado a una persona.
	 * @returns {true|string} true si está disponible; código de error si no.
	 */
	validarDniPersonaDisponible() {
		if (this.esTest) {
			return true;
		}
		if (this.dnisDisponibles === null) {
			this.dom.mostrar_error_campo('dni', 'dni_persona_no_verificado_KO');
			return false;
		}
		const dni = document.getElementById('dni').value;
		if (!this.dnisDisponibles.has(String(dni))) {
			this.dom.mostrar_error_campo('dni', 'dni_persona_ocupado_KO');
			return false;
		}
		return true;
	}

	/**
	 * Validación personalizada `personalize_fechaNacimiento_persona`, usada cuando no sirven las validaciones estándar de Validations.
	 * @param {string} fechaNacimiento Valor o identificador del campo a validar
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	personalize_fechaNacimiento_persona(fechaNacimiento) {
		const partes = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/.exec(fechaNacimiento);
		if (!partes) {
			return false;
		}
		const dia = Number(partes[1]);
		const mes = Number(partes[2]);
		const anio = Number(partes[3]);
		const diasPorMes = [31, (anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)) ? 29 : 28,
			31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return dia <= diasPorMes[mes - 1];
	}

	/**
	 * Validación personalizada `personalize_fechaNacimiento_persona_no_futura`, usada cuando no sirven las validaciones estándar de Validations.
	 * @param {string} fechaNacimiento Valor o identificador del campo a validar
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	personalize_fechaNacimiento_persona_no_futura(fechaNacimiento) {
		const partes = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(fechaNacimiento);
		if (!partes || !this.personalize_fechaNacimiento_persona(fechaNacimiento)) {
			return false;
		}
		const [, dia, mes, anio] = partes;
		const fechaISO = `${anio}-${mes}-${dia}`;
		const hoy = new Date();
		const hoyISO = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
		return fechaISO <= hoyISO;
	}

	/**
	 * Validación personalizada `personalize_telefono_persona`, usada cuando no sirven las validaciones estándar de Validations.
	 * @param {string} telefono Valor o identificador del campo a validar
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	personalize_telefono_persona(telefono) {
		return /^[679][0-9]{8}$/.test(telefono);
	}


	//ADD

	/**
	 * Valida el campo `nombre_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_nombre_persona_validation() {
		const nombre = document.getElementById('nombre_persona').value;
		if (nombre.length < 2) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_min_size_KO');
			return 'nombre_persona_min_size_KO';
		}
		if (nombre.length > 45) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_KO');
			return 'nombre_persona_max_size_KO';
		}
		if (!this.validations.format('nombre_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_KO');
			return 'nombre_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	/**
	 * Valida el campo `apellidos_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_apellidos_persona_validation() {
		const apellidos = document.getElementById('apellidos_persona').value;
		if (apellidos.length < 3) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_min_size_KO');
			return 'apellidos_persona_min_size_KO';
		}
		if (apellidos.length > 100) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_KO');
			return 'apellidos_persona_max_size_KO';
		}
		if (!this.validations.format('apellidos_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_KO');
			return 'apellidos_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	/**
	 * Valida el campo `fechaNacimiento_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_fechaNacimiento_persona_validation() {
		const campoFecha = document.getElementById('fechaNacimiento_persona');
		const esSelectorFecha = campoFecha.type === 'date';
		const fechaNacimiento = esSelectorFecha && campoFecha.value
			? this.cambiarformatoFecha(campoFecha.value)
			: campoFecha.value;
		if (fechaNacimiento.length < 10) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_min_size_KO');
			return 'fechaNacimiento_persona_min_size_KO';
		}
		if (fechaNacimiento.length > 10) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_KO');
			return 'fechaNacimiento_persona_max_size_KO';
		}
		const formatoFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
		const formatoValido = esSelectorFecha
			? formatoFecha.test(fechaNacimiento)
			: this.validations.format('fechaNacimiento_persona', formatoFecha.source);
		if (!formatoValido) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		if (!this.personalize_fechaNacimiento_persona(fechaNacimiento)) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_KO');
			return 'fechaNacimiento_persona_personalized_KO';
		}
		if (!this.personalize_fechaNacimiento_persona_no_futura(fechaNacimiento)) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_future_KO');
			return 'fechaNacimiento_persona_future_KO';
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	/**
	 * Valida el campo `direccion_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_direccion_persona_validation() {
		const direccion = document.getElementById('direccion_persona').value;
		if (direccion.length < 10) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_min_size_KO');
			return 'direccion_persona_min_size_KO';
		}
		if (direccion.length > 200) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_KO');
			return 'direccion_persona_max_size_KO';
		}
		if (!this.validations.format('direccion_persona', '^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ .;,\\-/]+$')) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_KO');
			return 'direccion_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	/**
	 * Valida el campo `telefono_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_telefono_persona_validation() {
		const telefono = document.getElementById('telefono_persona').value;
		if (telefono.length < 9) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_min_size_KO');
			return 'telefono_persona_min_size_KO';
		}
		if (telefono.length > 9) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_KO');
			return 'telefono_persona_max_size_KO';
		}
		if (!this.validations.format('telefono_persona', '^[0-9]{9}$')) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_KO');
			return 'telefono_persona_format_KO';
		}
		if (!this.personalize_telefono_persona(telefono)) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_personalized_KO');
			return 'telefono_persona_personalized_KO';
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	/**
	 * Valida el campo `email_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_email_persona_validation() {
		const email = document.getElementById('email_persona').value;
		if (email.length < 5) {
			this.dom.mostrar_error_campo('email_persona', 'email_persona_min_size_KO');
			return 'email_persona_min_size_KO';
		}
		if (email.length > 45) {
			this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_KO');
			return 'email_persona_max_size_KO';
		}
		if (!this.validations.format(
			'email_persona',
			"^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$"
		)) {
			this.dom.mostrar_error_campo('email_persona', 'email_persona_format_KO');
			return 'email_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	/**
	 * Valida el campo `nuevo_foto_persona` en la acción `ADD`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	ADD_nuevo_foto_persona_validation() {
		if (!this.validations.exist_file('nuevo_foto_persona')) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_exist_file_KO');
			return 'nuevo_foto_persona_exist_file_KO';
		}
		const nombreFichero = document.getElementById('nuevo_foto_persona').files[0].name;
		const nombreSinExtension = nombreFichero.replace(/\.(jpg|jpeg)$/i, '');
		if (!this.personalize_nuevo_foto_persona__min_name_file_validation(nombreSinExtension)) {
			return 'nuevo_foto_persona_min_name_file_KO';
		}
		if (!this.personalize_nuevo_foto_persona__max_name_file_validation(nombreSinExtension)) {
			return 'nuevo_foto_persona_max_name_file_KO';
		}
		if (!this.validations.format_name_file('nuevo_foto_persona', '^[a-zA-Z]{3,15}\\.(jpg|jpeg)$')) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_format_name_file_KO');
			return 'nuevo_foto_persona_format_name_file_KO';
		}
		if (!this.validations.max_size_file('nuevo_foto_persona', 2000000)) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_max_size_file_KO');
			return 'nuevo_foto_persona_max_size_file_KO';
		}
		if (!this.validations.type_file('nuevo_foto_persona', ['image/jpeg'])) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_type_file_KO');
			return 'nuevo_foto_persona_type_file_KO';
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;
	}

	/**
	 * Validación personalizada `personalize_nuevo_foto_persona__min_name_file_validation`, usada cuando no sirven las validaciones estándar de Validations.
	 * @param {string} nombreFichero Valor o identificador del campo a validar
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	personalize_nuevo_foto_persona__min_name_file_validation(nombreFichero) {
		if (nombreFichero.length < 3) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_min_name_file_KO');
			return false;
		}
		return true;
	}

	/**
	 * Validación personalizada `personalize_nuevo_foto_persona__max_name_file_validation`, usada cuando no sirven las validaciones estándar de Validations.
	 * @param {string} nombreFichero Valor o identificador del campo a validar
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	personalize_nuevo_foto_persona__max_name_file_validation(nombreFichero) {
		if (nombreFichero.length > 15) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_max_name_file_KO');
			return false;
		}
		return true;
	}

	/**
	 * Comprueba todos los campos de la acción `ADD` antes de enviarla al back.
	 * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
	 */
	ADD_submit_persona() {

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.nombre_persona = this.ADD_nombre_persona_validation();
		set_result.apellidos_persona = this.ADD_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.ADD_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.ADD_direccion_persona_validation();
		set_result.telefono_persona = this.ADD_telefono_persona_validation();
		set_result.email_persona = this.ADD_email_persona_validation();
		set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;

	}

	//
	//EDIT
	//

	/**
	 * Valida el campo `nombre_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_nombre_persona_validation() {

		return this.ADD_nombre_persona_validation();

	}

	/**
	 * Valida el campo `apellidos_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_apellidos_persona_validation() {
		return this.ADD_apellidos_persona_validation();
	}

	/**
	 * Valida el campo `fechaNacimiento_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_fechaNacimiento_persona_validation() {
		return this.ADD_fechaNacimiento_persona_validation();
	}

	/**
	 * Valida el campo `direccion_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_direccion_persona_validation() {
		return this.ADD_direccion_persona_validation();
	}

	/**
	 * Valida el campo `telefono_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_telefono_persona_validation() {
		return this.ADD_telefono_persona_validation();
	}

	/**
	 * Valida el campo `email_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_email_persona_validation() {
		return this.ADD_email_persona_validation();
	}

	/**
	 * Valida el campo `nuevo_foto_persona` en la acción `EDIT`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	EDIT_nuevo_foto_persona_validation() {

		if (!(this.validations.exist_file('nuevo_foto_persona'))) {
			this.dom.mostrar_exito_campo('nuevo_foto_persona');
			return true;
		}
		const nombreFichero = document.getElementById('nuevo_foto_persona').files[0].name;
		const nombreSinExtension = nombreFichero.replace(/\.(jpg|jpeg)$/i, '');
		if (!(this.personalize_nuevo_foto_persona__min_name_file_validation(nombreSinExtension))) {
			return "nuevo_foto_persona_min_name_file_KO";
		}
		if (!(this.personalize_nuevo_foto_persona__max_name_file_validation(nombreSinExtension))) {
			return "nuevo_foto_persona_max_name_file_KO";
		}
		if (!(this.validations.format_name_file('nuevo_foto_persona', '^[a-zA-Z]{3,15}\\.(jpg|jpeg)$'))) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_format_name_file_KO');
			return "nuevo_foto_persona_format_name_file_KO";
		}

		if (!(this.validations.max_size_file('nuevo_foto_persona', 2000000))) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_max_size_file_KO');
			return "nuevo_foto_persona_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_foto_persona', ['image/jpeg']))) {
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_type_file_KO');
			return "nuevo_foto_persona_type_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	/**
	 * Comprueba todos los campos de la acción `EDIT` antes de enviarla al back.
	 * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
	 */
	EDIT_submit_persona() {

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.nombre_persona = this.EDIT_nombre_persona_validation();
		set_result.apellidos_persona = this.EDIT_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.EDIT_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.EDIT_direccion_persona_validation();
		set_result.telefono_persona = this.EDIT_telefono_persona_validation();
		set_result.email_persona = this.EDIT_email_persona_validation();
		set_result.nuevo_foto_persona = this.EDIT_nuevo_foto_persona_validation();

		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;

	}

	/**
	 * Prepara el formulario para enviar la fecha en formato `dd/mm/aaaa`.
	 * El input date conserva su valor ISO porque no admite mostrar otro formato.
	 * @returns {Function} Restaura el formulario tras completar el envío.
	 */
	prepararFechaNacimientoParaEnvio() {
		const formulario = document.getElementById('form_iu');
		const campoFecha = formulario.elements.namedItem('fechaNacimiento_persona');
		if (!campoFecha.value) {
			return () => {};
		}

		const campoOculto = document.createElement('input');
		campoOculto.type = 'hidden';
		campoOculto.name = campoFecha.name;
		campoOculto.value = this.cambiarformatoFecha(campoFecha.value);
		const estabaDeshabilitado = campoFecha.disabled;
		campoFecha.disabled = true;
		formulario.appendChild(campoOculto);

		return () => {
			campoOculto.remove();
			campoFecha.disabled = estabaDeshabilitado;
		};
	}

	/**
	 * Envía el alta con la fecha de nacimiento en formato `dd/mm/aaaa`.
	 * @returns {Promise<void>}
	 */
	async ADD() {
		const restaurarFormulario = this.prepararFechaNacimientoParaEnvio();
		try {
			await super.ADD();
		} finally {
			restaurarFormulario();
		}
	}

	/**
	 * Envía la modificación con la fecha de nacimiento en formato `dd/mm/aaaa`.
	 * @returns {Promise<void>}
	 */
	async EDIT() {
		const restaurarFormulario = this.prepararFechaNacimientoParaEnvio();
		try {
			await super.EDIT();
		} finally {
			restaurarFormulario();
		}
	}

	//SEARCH

	/**
	 * Consulta la entidad en el back y muestra las tuplas que cumplen el filtro.
	 * @returns {Promise<void>}
	 */
	async SEARCH() {
		const respuesta = await this.access_functions.peticionBackGeneral('', this.nombreentidad, 'SEARCH');
		let registros;
		if (respuesta.code === 'RECORDSET_VACIO') {
			registros = [];
		} else if (respuesta.code === 'RECORDSET_DATOS' && Array.isArray(respuesta.resource)) {
			registros = respuesta.resource;
		} else {
			throw new Error(respuesta.code || 'text_error_buscar');
		}

		const formulario = document.getElementById('form_iu');
		const filtros = formulario
			? Array.from(formulario.elements)
				.filter(campo => campo.name && campo.value.trim() !== '')
				.map(campo => [campo.name, campo.value.trim().toLocaleLowerCase()])
			: [];
		const resultados = registros.filter(registro => filtros.every(([campo, consulta]) => {
			const valor = registro[campo];
			const valores = valor && typeof valor === 'object' ? Object.values(valor) : [valor];
			return valores.some(elemento =>
				String(elemento ?? '').toLocaleLowerCase().includes(consulta)
			);
		}));

		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.hide_element('Div_IU_form');
		if (resultados.length > 0) {
			this.datos = resultados;
			this.atributos = Object.keys(resultados[0]);
			this.dom.show_element('IU_manage_entity');
			this.crearTablaDatos(this.datos, this.mostrarespecial);
		} else {
			document.getElementById('IU_manage_table').style.display = 'block';
			document.getElementById('IU_manage_table').innerHTML = window.traduccion.RECORDSET_VACIO;
			document.getElementById('IU_manage_table').className = 'RECORDSET_VACIO';
		}
		setLang();
	}


	/**
	 * Valida el campo `nombre_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_nombre_persona_validation() {
		const nombre = document.getElementById('nombre_persona').value;
		if (nombre.trim() === '') {
			this.dom.mostrar_exito_campo('nombre_persona');
			return true;
		}
		if (nombre.length > 45) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_KO');
			return 'nombre_persona_max_size_KO';
		}
		if (!this.validations.format('nombre_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")) {
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_KO');
			return 'nombre_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	/**
	 * Valida el campo `apellidos_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_apellidos_persona_validation() {
		const apellidos = document.getElementById('apellidos_persona').value;
		if (apellidos.trim() === '') {
			this.dom.mostrar_exito_campo('apellidos_persona');
			return true;
		}
		if (apellidos.length > 100) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_KO');
			return 'apellidos_persona_max_size_KO';
		}
		if (!this.validations.format('apellidos_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")) {
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_KO');
			return 'apellidos_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	/**
	 * Valida el campo `fechaNacimiento_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_fechaNacimiento_persona_validation() {
		const campoFecha = document.getElementById('fechaNacimiento_persona');
		const esSelectorFecha = campoFecha.type === 'date';
		const fechaNacimiento = esSelectorFecha && campoFecha.value
			? this.cambiarformatoFecha(campoFecha.value)
			: campoFecha.value;
		if (fechaNacimiento.trim() === '') {
			this.dom.mostrar_exito_campo('fechaNacimiento_persona');
			return true;
		}
		if (fechaNacimiento.length > 10) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_KO');
			return 'fechaNacimiento_persona_max_size_KO';
		}
		const formatoFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
		const formatoValido = esSelectorFecha
			? formatoFecha.test(fechaNacimiento)
			: this.validations.format('fechaNacimiento_persona', formatoFecha.source);
		if (!formatoValido) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		if (!this.personalize_fechaNacimiento_persona(fechaNacimiento)) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_KO');
			return 'fechaNacimiento_persona_personalized_KO';
		}
		if (!this.personalize_fechaNacimiento_persona_no_futura(fechaNacimiento)) {
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_future_KO');
			return 'fechaNacimiento_persona_future_KO';
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	/**
	 * Valida el campo `direccion_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_direccion_persona_validation() {
		const direccion = document.getElementById('direccion_persona').value;
		if (direccion.trim() === '') {
			this.dom.mostrar_exito_campo('direccion_persona');
			return true;
		}
		if (direccion.length > 200) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_KO');
			return 'direccion_persona_max_size_KO';
		}
		if (!this.validations.format('direccion_persona', '^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ .;,\\-/]+$')) {
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_KO');
			return 'direccion_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	/**
	 * Valida el campo `telefono_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_telefono_persona_validation() {
		const telefono = document.getElementById('telefono_persona').value;
		if (telefono.trim() === '') {
			this.dom.mostrar_exito_campo('telefono_persona');
			return true;
		}
		if (telefono.length > 9) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_KO');
			return 'telefono_persona_max_size_KO';
		}
		if (!this.validations.format('telefono_persona', '^[0-9]{1,9}$')) {
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_KO');
			return 'telefono_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	/**
	 * Valida el campo `email_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_email_persona_validation() {
		const email = document.getElementById('email_persona').value;
		if (email.trim() === '') {
			this.dom.mostrar_exito_campo('email_persona');
			return true;
		}
		if (email.length > 45) {
			this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_KO');
			return 'email_persona_max_size_KO';
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	/**
	 * Valida el campo `foto_persona` en la acción `SEARCH`.
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	SEARCH_foto_persona_validation() {
		const foto = document.getElementById('foto_persona').value.trim();
		if (foto === '') {
			this.dom.mostrar_exito_campo('foto_persona');
			return true;
		}
		if (foto.length > 20) {
			this.dom.mostrar_error_campo('foto_persona', 'foto_persona_max_size_KO');
			return 'foto_persona_max_size_KO';
		}
		this.dom.mostrar_exito_campo('foto_persona');
		return true;
	}

	/**
	 * Validación personalizada `personalize_validar_nombre_foto_persona`, usada cuando no sirven las validaciones estándar de Validations.
	 * @param {string} id Valor o identificador del campo a validar
	 * @param {string} [opcional=false] Valor o identificador del campo a validar
	 * @returns {true|string} `true` si es correcto; código de error si no.
	 */
	personalize_validar_nombre_foto_persona(id, opcional = false) {
		const nombreFichero = document.getElementById(id).value.split(/[\\/]/).pop();
		if (nombreFichero === '' && opcional) {
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		const nombreSinExtension = nombreFichero.replace(/\.[^.]*$/, '');
		if (nombreSinExtension.length < 3) {
			this.dom.mostrar_error_campo(id, 'foto_persona_min_size_KO');
			return 'foto_persona_min_size_KO';
		}
		if (nombreSinExtension.length > 15) {
			this.dom.mostrar_error_campo(id, 'foto_persona_max_size_KO');
			return 'foto_persona_max_size_KO';
		}
		if (!/^[a-zA-Z]{3,15}\.(jpg|jpeg)$/i.test(nombreFichero)) {
			this.dom.mostrar_error_campo(id, 'foto_persona_format_KO');
			return 'foto_persona_format_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	/**
	 * Comprueba todos los campos de la acción `SEARCH` antes de enviarla al back.
	 * @returns {true|Object} `true` si todos son correctos; si no, el resultado de cada campo.
	 */
	SEARCH_submit_persona() {
		const set_result = {
			nombre_persona: this.SEARCH_nombre_persona_validation(),
			apellidos_persona: this.SEARCH_apellidos_persona_validation(),
			fechaNacimiento_persona: this.SEARCH_fechaNacimiento_persona_validation(),
			direccion_persona: this.SEARCH_direccion_persona_validation(),
			telefono_persona: this.SEARCH_telefono_persona_validation(),
			email_persona: this.SEARCH_email_persona_validation(),
			foto_persona: this.SEARCH_foto_persona_validation(),
		};
		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;
	}

	/**
	 * Construye el formulario para EDIT partiendo del formulario básico definido manualmente
	 *  
	 * @param {Object} fila objeto con los datos de la ocurrencia a modificar
	 * 
	 */
	createForm_EDIT(fila) {

		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_persona_EDIT');		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		const inputDni = document.getElementById('dni');
		const campoDni = document.createElement('input');
		campoDni.type = 'text';
		campoDni.id = 'dni';
		campoDni.name = 'dni';
		campoDni.value = fila.dni;
		campoDni.readOnly = true;
		inputDni.replaceWith(campoDni);
		this.dom.show_element('Div_IU_form', 'block');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.EDIT_submit_' + this.nombreentidad + '())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/' + fila.foto_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'EDIT');
		document.getElementById('dni').removeAttribute('onblur');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('foto_persona', 'readonly', 'true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	/**
	 * Prepara el formulario modal de la acción `DELETE` sobre la fila indicada.
	 * @param {Object} fila Tupla de la fila pulsada
	 * @returns {void}
	 */
	createForm_DELETE(fila) {
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_persona_DELETE');		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
		this.dom.assign_property_value('form_iu', 'onsubmit', 'entidad.DELETE(); return false;');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/' + fila.foto_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);


		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	/**
	 * Prepara el formulario modal de la acción `SHOWCURRENT` sobre la fila indicada.
	 * @param {Object} fila Tupla de la fila pulsada
	 * @returns {void}
	 */
	createForm_SHOWCURRENT(fila) {
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_persona_SHOWCURRENT');		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/' + fila.foto_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	/**
	 * Prepara el formulario modal de la acción `ADD`.
	 * @returns {void}
	 */
	createForm_ADD() {
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_persona_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		const inputDni = document.getElementById('dni');
		const selectDni = document.createElement('select');
		selectDni.id = 'dni';
		selectDni.name = 'dni';
		inputDni.replaceWith(selectDni);
		this.dom.show_element('Div_IU_form', 'block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.ADD_submit_' + this.nombreentidad + '())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('foto_persona');
		this.dom.hide_element('link_foto_persona');

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'ADD');
		document.getElementById('dni').removeAttribute('onchange');
		this.cargarUsuariosDisponibles();

		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
	}

	/**
	 * Prepara el formulario modal de la acción `SEARCH`.
	 * @returns {void}
	 */
	createForm_SEARCH() {
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form', 'class', 'text_contenido_titulo_form_persona_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		const inputDni = document.getElementById('dni');
		const selectDni = document.createElement('select');
		selectDni.id = 'dni';
		selectDni.name = 'dni';
		inputDni.replaceWith(selectDni);
		this.dom.show_element('Div_IU_form', 'block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.dom.validarsubmit(entidad.SEARCH_submit_' + this.nombreentidad + '())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.hide_element('link_foto_persona');

		// rellenar valores
		// en SEARCH no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'SEARCH');
		document.getElementById('dni').removeAttribute('onchange');
		this.cargarUsuariosDisponibles('', true);

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	/**
	 * Modifica el formato del string de fecha recibido como parametro a la salida que queremos
	 * recibe aaaa-mm-dd y devuelve dd/mm/aaaa
	 * 
	 * @param {*} stringfecha 
	 * @returns fecha en formato dd/mm/aaaa
	 */
	cambiarformatoFecha(stringfecha){

		var elementos = stringfecha.split('-');

		var day = elementos[2];
		var month = elementos[1];
		var year = elementos[0];
		
		return day+'/'+month+'/'+year;

	}

	/**
	 * transforma el valor de la columna a mostrar en la tabla de datos de la entidad del back
	 * 
	 * @param {string} columna nombre de la columna a modificar
	 * @param {any} valor valor inicial de la columna
	 * @returns {any} nuevo valor transformado de la columna
	 */

	/**
	 * Devuelve el valor a mostrar en la tabla para una columna de `mostrarespecial`, en lugar del valor real de la tupla.
	 * @param {string} columna Nombre de la columna
	 * @param {*} valor Valor real de la tupla
	 * @returns {*}
	 */
	cambiarmostrarespecial(columna, valor) {
		var nuevovalor = valor;
		switch (columna) {
			case 'foto_persona':
				nuevovalor = `<a href='http://193.147.87.202/ET2/filesuploaded/files_foto_persona/` + valor + `'>` + valor + `</a>`;
				return nuevovalor;
				break;
			case 'fechaNacimiento_persona':
				nuevovalor = this.cambiarformatoFecha(valor);
				return nuevovalor;
				break;
			default:
				return nuevovalor;
		}
	}





}
