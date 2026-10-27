class accion extends AbstractEntidad{
    constructor(esTest = null){
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'accion';
        this.columnasamostrar = ['id_accion', 'nombre_accion', 'descrip_accion'];
        this.mostrarespecial = [];
        this.claves = ['id_accion'];

        if (esTest !== 'test'){
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_accion');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation(){
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_id_accion" for="id_accion">ID de acción</label>
                <input type="text" id="id_accion" name="id_accion">
                <span id="span_error_id_accion"><a id="error_id_accion"></a></span>
                <br>

                <label class="label_nombre_accion" for="nombre_accion">Nombre de acción</label>
                <input type="text" id="nombre_accion" name="nombre_accion">
                <span id="span_error_nombre_accion"><a id="error_nombre_accion"></a></span>
                <br>

                <label class="label_descrip_accion" for="descrip_accion">Descripción de acción</label>
                <textarea rows="5" cols="33" id="descrip_accion" name="descrip_accion"></textarea>
                <span id="span_error_descrip_accion"><a id="error_descrip_accion"></a></span>
                <br>
            </form>`;
        return forms_content;
    }
    
}
