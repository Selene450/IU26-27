class rol extends AbstractEntidad{
    constructor(esTest = null){
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'rol';
        this.columnasamostrar = ['id_rol', 'rol_name', 'rol_description'];
        this.mostrarespecial = [];
        this.claves = ['id_rol'];

        if (esTest !== 'test'){
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_rol');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation(){
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_id_rol" for="id_rol">ID de rol</label>
                <input type="text" id="id_rol" name="id_rol">
                <span id="span_error_id_rol"><a id="error_id_rol"></a></span>
                <br>

                <label class="label_rol_name" for="rol_name">Nombre del rol</label>
                <input type="text" id="rol_name" name="rol_name">
                <span id="span_error_rol_name"><a id="error_rol_name"></a></span>
                <br>

                <label class="label_rol_description" for="rol_description">Descripción del rol</label>
                <textarea rows="5" cols="33" id="rol_description" name="rol_description"></textarea>
                <span id="span_error_rol_description"><a id="error_rol_description"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

  
}
