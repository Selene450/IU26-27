class persona extends AbstractEntidad{

	constructor(esTest=null){
		
		super();

		this.columnasamostrar = ['dni','nombre_persona', 'foto_persona'];
		this.mostrarespecial = ['foto_persona','fechaNacimiento_persona'];
		this.nombreentidad = 'persona';

		this.dom = new dom_fields();
		this.instalarLimpiezaMensajesError();
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

	instalarLimpiezaMensajesError(){
		const mostrarError = this.dom.mostrar_error_campo.bind(this.dom);
		this.dom.mostrar_error_campo = (id, codigoError) => {
			document.getElementById('error_' + id)?.removeAttribute('class');
			mostrarError(id, codigoError);
		};
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

	/**
		@param
		@return
			{string} Error code of field value (fieldname_validationfunction_ko)
			or
			{bool} true due the field value is correct

	*/

	//ADD

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
		if (!this.personalize_dni('dni')){
			this.dom.mostrar_error_campo('dni', 'dni_personalized_validate_dni_KO');
			return 'dni_personalized_validate_dni_KO';
		}
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	ADD_nombre_persona_validation(){
		const nombre = document.getElementById('nombre_persona').value;
		if (nombre.length < 2){
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_min_size_KO');
			return 'nombre_persona_min_size_KO';
		}
		if (nombre.length > 45){
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_KO');
			return 'nombre_persona_max_size_KO';
		}
		if (!this.validations.format('nombre_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")){
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_KO');
			return 'nombre_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	ADD_apellidos_persona_validation(){
		const apellidos = document.getElementById('apellidos_persona').value;
		if (apellidos.length < 3){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_min_size_KO');
			return 'apellidos_persona_min_size_KO';
		}
		if (apellidos.length > 100){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_KO');
			return 'apellidos_persona_max_size_KO';
		}
		if (!this.validations.format('apellidos_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_KO');
			return 'apellidos_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	ADD_fechaNacimiento_persona_validation(){
		const fechaNacimiento = document.getElementById('fechaNacimiento_persona').value;
		if (fechaNacimiento.length < 10){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_min_size_KO');
			return 'fechaNacimiento_persona_min_size_KO';
		}
		if (fechaNacimiento.length > 10){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_KO');
			return 'fechaNacimiento_persona_max_size_KO';
		}
		if (!this.validations.format('fechaNacimiento_persona', '^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/[0-9]{4}$')){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	ADD_direccion_persona_validation(){
		const direccion = document.getElementById('direccion_persona').value;
		if (direccion.length < 10){
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_min_size_KO');
			return 'direccion_persona_min_size_KO';
		}
		if (direccion.length > 200){
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_KO');
			return 'direccion_persona_max_size_KO';
		}
		if (!this.validations.format('direccion_persona', '^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ .;,\\-/]+$')){
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_KO');
			return 'direccion_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	ADD_telefono_persona_validation(){
		const telefono = document.getElementById('telefono_persona').value;
		if (telefono.length < 9){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_min_size_KO');
			return 'telefono_persona_min_size_KO';
		}
		if (telefono.length > 9){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_KO');
			return 'telefono_persona_max_size_KO';
		}
		if (!this.validations.format('telefono_persona', '^[0-9]{9}$')){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_KO');
			return 'telefono_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	ADD_email_persona_validation(){
		const email = document.getElementById('email_persona').value;
		if (email.length < 5){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_min_size_KO');
			return 'email_persona_min_size_KO';
		}
		if (email.length > 254){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_KO');
			return 'email_persona_max_size_KO';
		}
		if (!this.validations.format(
			'email_persona',
			"^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$"
		)){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_format_KO');
			return 'email_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	ADD_nuevo_foto_persona_validation(){
		if (!this.validations.exist_file('nuevo_foto_persona')){
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_exist_file_KO');
			return 'nuevo_foto_persona_exist_file_KO';
		}
		const nombreFichero = document.getElementById('nuevo_foto_persona').files[0].name;
		const nombreSinExtension = nombreFichero.replace(/\.(jpg|jpeg)$/i, '');
		if (!this.personalize_nuevo_foto_persona__min_name_file_validation(nombreSinExtension)){
			return 'nuevo_foto_persona_min_name_file_KO';
		}
		if (!this.personalize_nuevo_foto_persona__max_name_file_validation(nombreSinExtension)){
			return 'nuevo_foto_persona_max_name_file_KO';
		}
		if (!this.validations.format_name_file('nuevo_foto_persona', '^[a-zA-Z]{3,15}\\.(jpg|jpeg)$')){
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_format_name_file_KO');
			return 'nuevo_foto_persona_format_name_file_KO';
		}
		if (!this.validations.max_size_file('nuevo_foto_persona', 2000000)){
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_max_size_file_KO');
			return 'nuevo_foto_persona_max_size_file_KO';
		}
		if (!this.validations.type_file('nuevo_foto_persona', ['image/jpeg'])){
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_type_file_KO');
			return 'nuevo_foto_persona_type_file_KO';
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;
	}

	personalize_nuevo_foto_persona__min_name_file_validation(nombreFichero){
		if (nombreFichero.length < 3){
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_min_name_file_KO');
			return false;
		}
		return true;
	}

	personalize_nuevo_foto_persona__max_name_file_validation(nombreFichero){
		if (nombreFichero.length > 15){
			this.dom.mostrar_error_campo('nuevo_foto_persona', 'nuevo_foto_persona_max_name_file_KO');
			return false;
		}
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
		set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;

	}

	//
	//EDIT
	//
	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}

	EDIT_nombre_persona_validation(){

		return this.ADD_nombre_persona_validation();

	}

	EDIT_apellidos_persona_validation(){
		return this.ADD_apellidos_persona_validation();
	}

	EDIT_fechaNacimiento_persona_validation(){
		return this.ADD_fechaNacimiento_persona_validation();
	}

	EDIT_direccion_persona_validation(){
		return this.ADD_direccion_persona_validation();
	}

	EDIT_telefono_persona_validation(){
		return this.ADD_telefono_persona_validation();
	}

	EDIT_email_persona_validation(){
		return this.ADD_email_persona_validation();
	}

	EDIT_nuevo_foto_persona_validation(){

		if (!(this.validations.exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_exito_campo('nuevo_foto_persona');
			return true;
		}
		const nombreFichero = document.getElementById('nuevo_foto_persona').files[0].name;
		const nombreSinExtension = nombreFichero.replace(/\.(jpg|jpeg)$/i, '');
		if (!(this.personalize_nuevo_foto_persona__min_name_file_validation(nombreSinExtension))){
			return "nuevo_foto_persona_min_name_file_KO";
		}
		if (!(this.personalize_nuevo_foto_persona__max_name_file_validation(nombreSinExtension))){
			return "nuevo_foto_persona_max_name_file_KO";
		}
		if (!(this.validations.format_name_file('nuevo_foto_persona','^[a-zA-Z]{3,15}\\.(jpg|jpeg)$'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_KO');
			return "nuevo_foto_persona_format_name_file_KO";
		}

		if (!(this.validations.max_size_file('nuevo_foto_persona',2000000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_KO');
			return "nuevo_foto_persona_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_KO');
			return "nuevo_foto_persona_type_file_KO";
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
		set_result.nuevo_foto_persona = this.EDIT_nuevo_foto_persona_validation();

		return Object.values(set_result).every(resultado => resultado === true)
			? true
			: set_result;

	}

	//SEARCH

	SEARCH_dni_validation(){
		const campoDni = document.getElementById('dni');
		const dni = campoDni.value;
		if (dni.trim() === ''){
			this.dom.mostrar_exito_campo('dni');
			return true;
		}
		if (!this.validations.max_size('dni', 9)){
			this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');
			return 'dni_max_size_KO';
		}
		if (!/^(?:[0-9]{1,9}|[0-9]{1,8}[A-Za-z])$/.test(dni)){
			this.dom.mostrar_error_campo('dni', 'dni_format_KO');
			return 'dni_format_KO';
		}
		campoDni.value = dni.toUpperCase();
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	async SEARCH(){
		const respuesta = await this.access_functions.peticionBackGeneral('', this.nombreentidad, 'SEARCH');
		let registros;
		if (respuesta.code === 'RECORDSET_VACIO'){
			registros = [];
		} else if (respuesta.code === 'RECORDSET_DATOS' && Array.isArray(respuesta.resource)){
			registros = respuesta.resource;
		} else {
			throw new Error(respuesta.code || 'No se pudieron buscar las personas.');
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
		if (resultados.length > 0){
			this.datos = resultados;
			this.atributos = Object.keys(resultados[0]);
			this.dom.show_element('IU_manage_entity');
			this.crearTablaDatos(this.datos, this.mostrarespecial);
		} else {
			document.getElementById('IU_manage_table').style.display = 'block';
			document.getElementById('IU_manage_table').innerHTML = 'No se han encontrado elementos que coincidan con la búsqueda';
			document.getElementById('IU_manage_table').className = 'RECORDSET_VACIO';
		}
		setLang();
	}


	SEARCH_nombre_persona_validation(){
		const nombre = document.getElementById('nombre_persona').value;
		if (nombre.trim() === ''){
			this.dom.mostrar_exito_campo('nombre_persona');
			return true;
		}
		if (nombre.length > 45){
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_KO');
			return 'nombre_persona_max_size_KO';
		}
		if (!this.validations.format('nombre_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")){
			this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_KO');
			return 'nombre_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	SEARCH_apellidos_persona_validation(){
		const apellidos = document.getElementById('apellidos_persona').value;
		if (apellidos.trim() === ''){
			this.dom.mostrar_exito_campo('apellidos_persona');
			return true;
		}
		if (apellidos.length > 100){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_KO');
			return 'apellidos_persona_max_size_KO';
		}
		if (!this.validations.format('apellidos_persona', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'-]+$")){
			this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_KO');
			return 'apellidos_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	SEARCH_fechaNacimiento_persona_validation(){
		const fechaNacimiento = document.getElementById('fechaNacimiento_persona').value;
		if (fechaNacimiento.trim() === ''){
			this.dom.mostrar_exito_campo('fechaNacimiento_persona');
			return true;
		}
		if (fechaNacimiento.length > 10){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_KO');
			return 'fechaNacimiento_persona_max_size_KO';
		}
		if (!this.validations.format(
			'fechaNacimiento_persona',
			'^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/[0-9]{4}$'
		)){
			this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	SEARCH_direccion_persona_validation(){
		const direccion = document.getElementById('direccion_persona').value;
		if (direccion.trim() === ''){
			this.dom.mostrar_exito_campo('direccion_persona');
			return true;
		}
		if (direccion.length > 200){
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_KO');
			return 'direccion_persona_max_size_KO';
		}
		if (!this.validations.format('direccion_persona', '^[A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ .;,\\-/]+$')){
			this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_KO');
			return 'direccion_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	SEARCH_telefono_persona_validation(){
		const telefono = document.getElementById('telefono_persona').value;
		if (telefono.trim() === ''){
			this.dom.mostrar_exito_campo('telefono_persona');
			return true;
		}
		if (telefono.length > 9){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_KO');
			return 'telefono_persona_max_size_KO';
		}
		if (!this.validations.format('telefono_persona', '^[0-9]{9}$')){
			this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_KO');
			return 'telefono_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	SEARCH_email_persona_validation(){
		const email = document.getElementById('email_persona').value;
		if (email.trim() === ''){
			this.dom.mostrar_exito_campo('email_persona');
			return true;
		}
		if (email.length > 254){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_KO');
			return 'email_persona_max_size_KO';
		}
		if (!this.validations.format(
			'email_persona',
			"^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$"
		)){
			this.dom.mostrar_error_campo('email_persona', 'email_persona_format_KO');
			return 'email_persona_format_KO';
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	SEARCH_foto_persona_validation(){
		const elemento = document.getElementById('foto_persona');
		const ruta = elemento.value;
		if (ruta.trim() === ''){
			this.dom.mostrar_exito_campo('foto_persona');
			return true;
		}
		const nombreFichero = ruta.split(/[\\/]/).pop();
		const partes = /^(.+)\.(jpg|jpeg)$/i.exec(nombreFichero);
		if (!partes){
			this.dom.mostrar_error_campo('foto_persona', 'foto_persona_format_name_file_KO');
			return 'foto_persona_format_name_file_KO';
		}
		if (partes[1].length > 15){
			this.dom.mostrar_error_campo('foto_persona', 'foto_persona_max_name_file_KO');
			return 'foto_persona_max_name_file_KO';
		}
		if (!/^[a-zA-Z]+$/.test(partes[1])){
			this.dom.mostrar_error_campo('foto_persona', 'foto_persona_format_name_file_KO');
			return 'foto_persona_format_name_file_KO';
		}
		this.dom.mostrar_exito_campo('foto_persona');
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




		
}
