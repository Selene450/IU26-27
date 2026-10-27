class funcionalidad_accion extends AbstractEntidad{
    constructor(esTest = null){
        super();
        this.dom = new entity_dom_fields();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();
        this.nombreentidad = 'funcionalidad_accion';
        this.columnasamostrar = ['id_funcionalidad', 'id_accion'];
        this.mostrarespecial = [];
        this.claves = ['id_funcionalidad', 'id_accion'];

        if (esTest !== 'test'){
            document.getElementById('IU_manage_entity').style.display = 'block';
            document.getElementById('text_title_page').classList.add('text_titulo_page_funcionalidad_accion');
            document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
            this.SEARCH();
        }
    }

    manual_form_creation(){
        var forms_content = `
            <form id="form_iu" action="" method="POST" enctype="multipart/form-data" onsubmit="" class="formulario">
                <label class="label_id_funcionalidad" for="id_funcionalidad">ID de funcionalidad</label>
                <input type="text" id="id_funcionalidad" name="id_funcionalidad">
                <span id="span_error_id_funcionalidad"><a id="error_id_funcionalidad"></a></span>
                <br>

                <label class="label_id_accion" for="id_accion">ID de acción</label>
                <input type="text" id="id_accion" name="id_accion">
                <span id="span_error_id_accion"><a id="error_id_accion"></a></span>
                <br>
            </form>`;
        return forms_content;
    }

}
