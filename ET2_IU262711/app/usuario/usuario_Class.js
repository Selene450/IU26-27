class usuario extends AbstractEntidad{
    constructor(esTest = null){
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'usuario';
        this.columnasamostrar = ['dni', 'usuario', 'contrasena', 'id_rol'];
        this.mostrarespecial = [];
        this.claves = ['dni'];

        if (esTest !== 'test'){
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_usuario');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation(){
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_dni" for="dni">DNI</label>
                <input type="text" id="dni" name="dni">
                <span id="span_error_dni"><a id="error_dni"></a></span>
                <br>

                <label class="label_usuario" for="usuario">Usuario</label>
                <input type="text" id="usuario" name="usuario">
                <span id="span_error_usuario"><a id="error_usuario"></a></span>
                <br>

                <label class="label_contrasena" for="contrasena">Contraseña</label>
                <input type="password" id="contrasena" name="contrasena">
                <span id="span_error_contrasena"><a id="error_contrasena"></a></span>
                <br>

                <label class="label_id_rol" for="id_rol">ID de rol</label>
                <input type="text" id="id_rol" name="id_rol">
                <span id="span_error_id_rol"><a id="error_id_rol"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

}