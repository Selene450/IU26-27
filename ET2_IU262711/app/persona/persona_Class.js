class persona extends AbstractEntidad{

	constructor(esTest=null){
		
		super();

		this.columnasamostrar = ['dni','nombre_persona', 'foto_persona'];
		this.mostrarespecial = ['foto_persona','fechaNacimiento_persona'];
		this.nombreentidad = 'persona';

		this.dom = new dom_fields();
		this.validations = new Validations();
		this.access_functions = new ExternalAccess();


		//init
		if (esTest == 'test'){}
		else{
			//visualizar seccion tabla y botones
			document.getElementById('IU_manage_entity').style.display = 'block';
			document.getElementById('add_search_columns').style.display = 'block';
			document.getElementById('text_title_page').className = 'text_titulo_page_'+this.nombreentidad;
			
			//crear el formulario vacio
			document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

			//invocar busqueda en back con el formulario vacio
			this.SEARCH();
		}

	}	

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
		var form_content = `
			<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

				<label class="label_dni">dni</label>
				<input type='text' id='dni' name='dni'></input>
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
				<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
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
	ADD_dni_validation(){
		const dni = document.getElementById('dni').value;
		if (dni.length < 9){
			this.dom.mostrar_error_campo('dni', 'dni_min_size_KO');
			return 'dni_min_size_KO';
		}
		if (dni.length > 9){
			this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');
			return 'dni_max_size_KO';
		}
		if (!this.validations.format('dni', '^[0-9]{8}[A-Z]$')){
			this.dom.mostrar_error_campo('dni', 'dni_format_KO');
			return 'dni_format_KO';
		}
		if (!(this.personalize_dni('dni'))){
			this.dom.mostrar_error_campo('dni','dni_personalized_validate_dni_KO');
			return "dni_personalized_validate_dni_KO";
		}
		
		this.dom.mostrar_exito_campo('dni');
		return true;

	}

	async cargarUsuariosDisponibles(dniSeleccionado = ''){
		const selectDni = document.getElementById('dni');
		try {
			const respuesta = await this.access_functions.peticionBackGeneral('', 'usuario', 'SEARCH');
			let usuarios;
			if (respuesta.code === 'RECORDSET_VACIO') {
				usuarios = [];
			} else if (respuesta.code === 'RECORDSET_DATOS' && Array.isArray(respuesta.resource)) {
				usuarios = respuesta.resource;
			} else {
				throw new Error(respuesta.code || 'No se pudieron cargar los usuarios.');
			}

			const opcionVacia = document.createElement('option');
			opcionVacia.value = '';
			opcionVacia.textContent = '';
			selectDni.replaceChildren(opcionVacia);
			usuarios.forEach(usuario => {
				const opcion = document.createElement('option');
				opcion.value = usuario.dni;
				opcion.textContent = usuario.dni;
				selectDni.appendChild(opcion);
			});
			selectDni.value = dniSeleccionado;
		} catch (error) {
			this.dom.abrirModalError(error.message || 'No se pudieron cargar los usuarios.');
		}
	}

	/**
	 * 
	 * @param {string} id id of the DNI field to validate
	 * @returns {bool} true if the dni is valid or false if the dni is not valid
	 */
	personalize_dni(id){
		
		const dni = document.getElementById(id).value;
		const dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
		const letter = dni_letters.charAt(parseInt(dni, 10) % 23);
		
    	return letter == dni.charAt(8);
	}

	validar_texto_persona(id, minSize, maxSize, formato, opcional=false){
		const valor = document.getElementById(id).value;
		if (opcional && valor.trim() === ''){
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		if (minSize !== null && valor.length < minSize){
			const codigo = `${id}_min_size_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (maxSize !== null && valor.length > maxSize){
			const codigo = `${id}_max_size_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (formato && !formato.test(valor)){
			const codigo = `${id}_format_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validar_nombre_foto_guardada(id, obligatorio=false, minNameLength=3){
		const elemento = document.getElementById(id);
		const esFichero = elemento.type === 'file';
		const valor = esFichero
			? elemento.files[0]?.name || ''
			: elemento.value.split(/[\\/]/).pop();
		if (esFichero && obligatorio && !elemento.files.length){
			const codigo = `${id}_exist_file_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (valor.trim() === ''){
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		const partes = /^(.+)\.(jpg|jpeg)$/i.exec(valor);
		if (!partes){
			const codigo = `${id}_format_name_file_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (minNameLength !== null && partes[1].length < minNameLength){
			const codigo = `${id}_min_name_file_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (partes[1].length > 15){
			const codigo = `${id}_max_name_file_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (!/^[a-zA-Z]+$/.test(partes[1])){
			const codigo = `${id}_format_name_file_KO`;
			this.dom.mostrar_error_campo(id, codigo);
			return codigo;
		}
		if (esFichero){
			if (elemento.files[0].size > 2000000){
				const codigo = `${id}_max_size_file_KO`;
				this.dom.mostrar_error_campo(id, codigo);
				return codigo;
			}
			if (elemento.files[0].type !== 'image/jpeg'){
				const codigo = `${id}_format_KO`;
				this.dom.mostrar_error_campo(id, codigo);
				return codigo;
			}
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_ko) 
			or
			{bool} true due the field value is correct

	*/

	ADD_nombre_persona_validation(){
		return this.validar_texto_persona('nombre_persona', 2, 45, /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$/);
	}

	validar_nombre_nuevo_foto_persona(){
		const nombreFichero = document.getElementById('nuevo_foto_persona').files[0].name;
		const indiceExtension = nombreFichero.lastIndexOf('.');
		const nombre = indiceExtension === -1
			? nombreFichero
			: nombreFichero.slice(0, indiceExtension);

		if (nombre.length < 3){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_min_name_file_KO');
			return 'nuevo_foto_persona_min_name_file_KO';
		}
		if (nombre.length > 15){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_name_file_KO');
			return 'nuevo_foto_persona_max_name_file_KO';
		}
		if (!(this.validations.format_name_file('nuevo_foto_persona','^[a-zA-Z]{3,15}\\.(jpg|jpeg)$'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_KO');
			return 'nuevo_foto_persona_format_name_file_KO';
		}
		return true;
	}

	ADD_nuevo_foto_persona_validation(){

		if (!(this.validations.exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_exist_file_KO');
			return "nuevo_foto_persona_exist_file_KO";
		}
		const validacionNombre = this.validar_nombre_nuevo_foto_persona();
		if (validacionNombre !== true){
			return validacionNombre;
		}
		if (!(this.validations.max_size_file('nuevo_foto_persona',2000000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_KO');
			return "nuevo_foto_persona_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_KO');
			return "nuevo_foto_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	/**
	 
		@param
		@return	{bool} true if all fields validations are ok or 
		@return {object} object with the ids of elements and error code if field validation is not ok and true if field validation is ok
	*/
	ADD_submit_persona(){

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.dni = this.ADD_dni_validation();
		set_result.nombre_persona = this.ADD_nombre_persona_validation();
		set_result.apellidos_persona = this.ADD_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.ADD_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.ADD_direccion_persona_validation();
		set_result.telefono_persona = this.ADD_telefono_persona_validation();
		set_result.email_persona = this.ADD_email_persona_validation();
		set_result.foto_persona = this.ADD_foto_persona_validation();
		set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;

	}

	EDIT_nombre_persona_validation(){

		return this.ADD_nombre_persona_validation();

	}

	ADD_apellidos_persona_validation(){
		return this.validar_texto_persona('apellidos_persona', 3, 100, /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$/);
	}

	EDIT_apellidos_persona_validation(){
		return this.ADD_apellidos_persona_validation();
	}

	ADD_fechaNacimiento_persona_validation(){
		return this.validar_texto_persona(
			'fechaNacimiento_persona',
			10,
			10,
			/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/
		);
	}

	EDIT_fechaNacimiento_persona_validation(){
		return this.ADD_fechaNacimiento_persona_validation();
	}

	ADD_direccion_persona_validation(){
		return this.validar_texto_persona('direccion_persona', 10, 200, /^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ .;,\-/]+$/);
	}

	EDIT_direccion_persona_validation(){
		return this.ADD_direccion_persona_validation();
	}

	ADD_telefono_persona_validation(){
		return this.validar_texto_persona('telefono_persona', 9, 9, /^[0-9]{9}$/);
	}

	EDIT_telefono_persona_validation(){
		return this.ADD_telefono_persona_validation();
	}

	ADD_email_persona_validation(){
		return this.validar_texto_persona(
			'email_persona',
			5,
			254,
			/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/
		);
	}

	EDIT_email_persona_validation(){
		return this.ADD_email_persona_validation();
	}

	EDIT_nuevo_foto_persona_validation(){

		if (!(this.validations.exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_exito_campo('nuevo_foto_persona');
			return true;
		}
		const validacionNombre = this.validar_nombre_nuevo_foto_persona();
		if (validacionNombre !== true){
			return validacionNombre;
		}
		if (!(this.validations.max_size_file('nuevo_foto_persona',2000000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_KO');
			return "nuevo_foto_persona_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_KO');
			return "nuevo_foto_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	/**
	 
		@param
		@return	{bool} true if all fields validations are ok or 
		@return {object} object with the ids of elements and error code if field validation is not ok and true if field validation is ok
	*/
	EDIT_submit_persona(){

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.dni = this.EDIT_dni_validation();
		set_result.nombre_persona = this.EDIT_nombre_persona_validation();
		set_result.apellidos_persona = this.EDIT_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.EDIT_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.EDIT_direccion_persona_validation();
		set_result.telefono_persona = this.EDIT_telefono_persona_validation();
		set_result.email_persona = this.EDIT_email_persona_validation();
		set_result.foto_persona = this.EDIT_foto_persona_validation();
		set_result.nuevo_foto_persona = this.EDIT_nuevo_foto_persona_validation();

		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;

	}

	SEARCH_dni_validation(){
		const dni = document.getElementById('dni').value;
		if (dni.trim() === ''){
			this.dom.mostrar_exito_campo('dni');
			return true;
		}
		if (!this.validations.max_size('dni', 9)){
			this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');
			return 'dni_max_size_KO';
		}
		if (!this.validations.format('dni', '^[0-9]{8}[A-Z]$')){
			this.dom.mostrar_error_campo('dni', 'dni_format_KO');
			return 'dni_format_KO';
		}
		if (!this.personalize_dni('dni')){
			this.dom.mostrar_error_campo('dni', 'dni_personalized_validate_dni_KO');
			return 'dni_personalized_validate_dni_KO';
		}
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	SEARCH_submit_persona(){
		const set_result = {
			dni: this.SEARCH_dni_validation(),
			nombre_persona: this.SEARCH_nombre_persona_validation(),
			apellidos_persona: this.SEARCH_apellidos_persona_validation(),
			fechaNacimiento_persona: this.SEARCH_fechaNacimiento_persona_validation(),
			direccion_persona: this.SEARCH_direccion_persona_validation(),
			telefono_persona: this.SEARCH_telefono_persona_validation(),
			email_persona: this.SEARCH_email_persona_validation(),
			foto_persona: this.SEARCH_foto_persona_validation(),
			nuevo_foto_persona: this.SEARCH_nuevo_foto_persona_validation()
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
	createForm_EDIT(fila){

		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_EDIT');		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		const inputDni = document.getElementById('dni');
		const selectDni = document.createElement('select');
		selectDni.id = 'dni';
		selectDni.name = 'dni';
		inputDni.replaceWith(selectDni);
		this.dom.show_element('Div_IU_form','block');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);
		this.cargarUsuariosDisponibles(fila.dni);
		
		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('foto_persona','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	createForm_DELETE(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_DELETE');		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
		this.dom.assign_property_value('form_iu', 'onsubmit', 'entidad.DELETE(); return false;');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);


		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	createForm_SHOWCURRENT(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_SHOWCURRENT');		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');

	}

	createForm_ADD(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		const inputDni = document.getElementById('dni');
		const selectDni = document.createElement('select');
		selectDni.id = 'dni';
		selectDni.name = 'dni';
		inputDni.replaceWith(selectDni);
		this.dom.show_element('Div_IU_form','block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
		
		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('foto_persona');
		this.dom.hide_element('link_foto_persona');

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');
		this.cargarUsuariosDisponibles();

		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang(window.traduccion === textos_EN ? 'EN' : 'ES');
	}

	createForm_SEARCH(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
		
		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.hide_element('link_foto_persona');

		// rellenar valores
		// en SEARCH no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

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

	cambiarmostrarespecial(columna, valor){
		var nuevovalor = valor;
		switch(columna){
			case 'foto_persona':
				nuevovalor = `<a href='http://193.147.87.202/ET2/filesuploaded/files_foto_persona/`+valor+`'>`+valor+`</a>`;
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


	//ADD
	//
	//ADD_dni_validation(){return true;}
	//ADD_nombre_persona_validation(){return true;}
	ADD_foto_persona_validation(){
		return this.validar_nombre_foto_guardada('foto_persona', true);
	}
	//ADD_nuevo_foto_persona_validation(){return true;}

	//
	//EDIT
	//
	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}
	//EDIT_nombre_persona_validation(){return true;}
	EDIT_foto_persona_validation(){
		return this.validar_nombre_foto_guardada('foto_persona');
	}
	//EDIT_nuevo_foto_persona_validation(){return true;}

	//
	//SEARCH
	//

	SEARCH_nombre_persona_validation(){
		return this.validar_texto_persona('nombre_persona', null, 45, /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$/, true);
	}

	SEARCH_apellidos_persona_validation(){
		return this.validar_texto_persona('apellidos_persona', null, 100, /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$/, true);
	}

	SEARCH_fechaNacimiento_persona_validation(){
		return this.validar_texto_persona(
			'fechaNacimiento_persona',
			null,
			10,
			/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
			true
		);
	}

	SEARCH_direccion_persona_validation(){
		return this.validar_texto_persona('direccion_persona', null, 200, /^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ .;,\-/]+$/, true);
	}

	SEARCH_telefono_persona_validation(){
		return this.validar_texto_persona('telefono_persona', null, 9, /^[0-9]{9}$/, true);
	}

	SEARCH_email_persona_validation(){
		return this.validar_texto_persona(
			'email_persona',
			null,
			254,
			/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/,
			true
		);
	}

	SEARCH_foto_persona_validation(){
		return this.validar_nombre_foto_guardada('foto_persona', false, null);
	}

	SEARCH_nuevo_foto_persona_validation(){
		return this.validar_nombre_foto_guardada('nuevo_foto_persona', false, null);
	}

		
}
