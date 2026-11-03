/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definición y para inclusión de nuevos métodos
 */
class entity_dom_fields extends dom_fields{
    constructor(){
        super();
        this.aplicarEstilosInterfaz();
    }

    aplicarEstilosInterfaz(){
        if (document.getElementById('estilos_interfaz_et2')){
            return;
        }

        const estilos = document.createElement('style');
        estilos.id = 'estilos_interfaz_et2';
        estilos.textContent = `
            :root {
                --et2-color-fondo: #f5f7fb;
                --et2-color-superficie: #ffffff;
                --et2-color-primario: #244a73;
                --et2-color-primario-hover: #193653;
                --et2-color-acento: #e8a94b;
                --et2-color-texto: #253247;
                --et2-color-secundario: #64748b;
                --et2-color-borde: #d7e0eb;
                --et2-color-error: #b42318;
                --et2-sombra: 0 8px 24px rgba(31, 51, 73, .08);
            }

            body {
                margin: 0;
                background: var(--et2-color-fondo);
                color: var(--et2-color-texto);
                font: 15px/1.5 Arial, Helvetica, sans-serif;
            }

            #header_page {
                box-sizing: border-box;
                min-height: 82px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 16px;
                padding: 14px 24px;
                background: var(--et2-color-primario);
                border: 0;
                color: white;
                text-align: center;
            }

            #header_page .text_titulo_app {
                color: white;
                font-size: 24px;
                font-weight: 700;
            }

            #header_page img {
                width: 36px;
                height: 28px;
                object-fit: cover;
                border: 2px solid rgba(255,255,255,.75);
                border-radius: 4px;
                cursor: pointer;
            }

            nav {
                padding: 10px 18px;
                background: var(--et2-color-superficie);
                border: 0;
                border-bottom: 1px solid var(--et2-color-borde);
                color: var(--et2-color-secundario);
                text-align: left;
                font-size: 14px;
            }

            nav > span { cursor: pointer; }

            #div-menu {
                background: var(--et2-color-superficie);
            }

            #div-menu ol {
                display: flex;
                flex-wrap: wrap;
                gap: 4px;
                margin: 0;
                padding: 10px 18px;
                list-style: none;
            }

            #div-menu li span {
                display: block;
                height: auto;
                padding: 7px 10px;
                border: 0;
                border-radius: 5px;
                color: var(--et2-color-primario);
                font-size: 14px;
                line-height: 1.4;
                cursor: pointer;
            }

            #div-menu li span:hover {
                background: #eaf0f7;
            }

            #IU_manage_entity {
                box-sizing: border-box;
                width: min(1440px, calc(100% - 40px));
                margin: 24px auto;
                padding: 20px;
                background: var(--et2-color-superficie);
                border: 1px solid var(--et2-color-borde);
                border-radius: 10px;
                box-shadow: var(--et2-sombra);
            }

            #title_page {
                margin-bottom: 16px;
                padding: 12px 16px;
                background: #f0f4f9;
                border: 0;
                border-left: 4px solid var(--et2-color-acento);
                border-radius: 5px;
                color: var(--et2-color-primario);
                font-size: 20px;
                font-weight: 700;
            }

            #add_search_columns {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
                margin-bottom: 16px;
            }

            #add_search_columns > img {
                box-sizing: border-box;
                width: 38px;
                height: 38px;
                padding: 5px;
                background: var(--et2-color-superficie);
                border: 1px solid var(--et2-color-borde);
                border-radius: 6px;
                cursor: pointer;
                object-fit: contain;
            }

            #add_search_columns > img:hover {
                background: #eaf0f7;
                border-color: var(--et2-color-primario);
            }

            #add_search_columns label,
            .selector_rol label {
                color: var(--et2-color-secundario);
                font-size: 14px;
                font-weight: 600;
            }

            #seleccioncolumnas {
                min-width: 180px;
                min-height: 38px;
            }

            #IU_manage_table {
                overflow-x: auto;
                border: 1px solid var(--et2-color-borde);
                border-radius: 7px;
            }

            #IU_manage_table table,
            #tablaresultadostest,
            .tabla_matriz {
                width: 100%;
                border-collapse: collapse;
                color: var(--et2-color-texto);
                font-size: 14px;
            }

            #IU_manage_table th,
            #IU_manage_table td,
            #tablaresultadostest th,
            #tablaresultadostest td,
            .tabla_matriz th,
            .tabla_matriz td {
                padding: 10px 12px;
                border: 1px solid var(--et2-color-borde);
                text-align: left;
                vertical-align: middle;
            }

            #IU_manage_table thead th,
            #tablaresultadostest thead th,
            .tabla_matriz thead th {
                background: #eaf0f7;
                color: var(--et2-color-primario);
                font-weight: 700;
            }

            #IU_manage_table tbody tr:nth-child(even),
            #tablaresultadostest tbody tr:nth-child(even),
            .tabla_matriz tbody tr:nth-child(even) {
                background: #f8fafc;
            }

            #IU_manage_table tbody tr:hover,
            .tabla_matriz tbody tr:hover {
                background: #eef4fa;
            }

            #IU_manage_table td img {
                width: 26px;
                height: 26px;
                margin: 0 4px;
                object-fit: contain;
                cursor: pointer;
                vertical-align: middle;
            }

            .div_IU_form {
                box-sizing: border-box;
                padding: 24px;
                background: rgba(25, 43, 62, .48);
            }

            .contenidoForm {
                box-sizing: border-box;
                top: 50%;
                left: 50%;
                width: min(760px, 94vw);
                height: min(780px, 90vh);
                margin: 0;
                padding: 24px;
                transform: translate(-50%, -50%);
                background: var(--et2-color-superficie);
                border: 1px solid var(--et2-color-borde);
                border-radius: 10px;
                box-shadow: 0 20px 60px rgba(0,0,0,.2);
            }

            .class_titulo_form {
                height: auto;
                margin: -24px -24px 20px;
                padding: 16px 24px;
                background: #eaf0f7;
                color: var(--et2-color-primario);
            }

            #class_contenido_titulo_form {
                position: static;
                display: block;
                transform: none;
                color: var(--et2-color-primario);
                font-size: 20px;
            }

            .formulario {
                top: auto;
                left: auto;
                display: grid;
                grid-template-columns: minmax(150px, 1fr) minmax(220px, 2fr);
                align-items: center;
                gap: 10px 14px;
                padding: 0;
            }

            .formulario label {
                color: var(--et2-color-texto);
                font-weight: 600;
            }

            .formulario input:not([type="submit"]):not([type="file"]),
            .formulario select,
            .formulario textarea,
            #id_rol {
                box-sizing: border-box;
                width: 100%;
                min-height: 38px;
                padding: 8px 10px;
                background: white;
                border: 1px solid #bdc9d8;
                border-radius: 5px;
                color: var(--et2-color-texto);
                font: inherit;
            }

            .formulario textarea {
                min-height: 100px;
                resize: vertical;
            }

            .formulario input:focus,
            .formulario select:focus,
            .formulario textarea:focus,
            #id_rol:focus {
                outline: 3px solid rgba(36, 74, 115, .16);
                border-color: var(--et2-color-primario);
            }

            .formulario br { display: none; }
            .formulario span[id^="span_error_"] { grid-column: 2; color: var(--et2-color-error); }
            .formulario input[type="submit"] {
                grid-column: 2;
                justify-self: start;
                padding: 9px 18px;
                background: var(--et2-color-primario);
                border: 0;
                border-radius: 5px;
                color: white;
                font: inherit;
                font-weight: 700;
                cursor: pointer;
            }
            .formulario input[type="submit"]:hover { background: var(--et2-color-primario-hover); }

            .relacion-matriz {
                padding: 14px;
                background: var(--et2-color-superficie);
                border: 1px solid var(--et2-color-borde);
                border-radius: 8px;
                box-shadow: var(--et2-sombra);
            }

            .contenedor_matriz {
                max-width: 100%;
                max-height: 75vh;
                overflow: auto;
                border: 1px solid var(--et2-color-borde);
                border-radius: 6px;
            }

            .tabla_matriz {
                width: max-content;
                min-width: 100%;
                border-collapse: separate;
                border-spacing: 0;
            }

            .tabla_matriz th,
            .tabla_matriz td {
                min-width: 90px;
                padding: 8px 12px;
                text-align: center;
                background: var(--et2-color-superficie);
            }

            .tabla_matriz th.matriz-primera-columna {
                min-width: 190px;
                text-align: left;
            }

            .tabla_matriz th.matriz-cabecera {
                position: sticky;
                top: 0;
                z-index: 2;
                background: #eaf0f7;
            }

            .tabla_matriz .matriz-primera-columna {
                position: sticky;
                left: 0;
                z-index: 1;
                background: #f8fafc;
            }

            .tabla_matriz th.matriz-cabecera.matriz-primera-columna {
                z-index: 3;
                background: #eaf0f7;
            }

            .tabla_matriz input[type="checkbox"] {
                width: 17px;
                height: 17px;
                accent-color: var(--et2-color-primario);
                cursor: pointer;
            }

            .selector_rol { margin: 12px 0; }
            #estado_matriz { color: var(--et2-color-secundario); }

            #IU_Test_result_nofile {
                box-sizing: border-box;
                width: min(1440px, calc(100% - 40px));
                margin: 24px auto;
                overflow-x: auto;
            }

            #tablaresultadostest { min-width: 1000px; }
            #tablaresultadostest th,
            #tablaresultadostest td { padding: 7px 9px; }
            #tablaresultadostest tr.correcto { background: #e8f5ed; }
            #tablaresultadostest tr.incorrecto { background: #fdeceb; }

            #error_action_modal {
                box-sizing: border-box;
                width: min(480px, calc(100% - 32px));
                padding: 24px;
                border: 1px solid var(--et2-color-borde);
                box-shadow: 0 20px 60px rgba(0,0,0,.2);
            }

            #error_action_modal button {
                float: right;
                padding: 5px 10px;
                background: var(--et2-color-primario);
                border: 0;
                border-radius: 4px;
                color: white;
                cursor: pointer;
            }

            footer {
                margin-top: 32px;
                padding: 14px;
                background: #eaf0f7;
                border: 0;
                color: var(--et2-color-secundario);
                text-align: center;
            }

            @media (max-width: 640px) {
                #IU_manage_entity { width: calc(100% - 20px); margin: 12px auto; padding: 12px; }
                #header_page { flex-wrap: wrap; }
                #header_page .text_titulo_app { font-size: 19px; }
                .contenidoForm { padding: 16px; }
                .class_titulo_form { margin: -16px -16px 16px; padding: 12px 16px; }
                .formulario { grid-template-columns: 1fr; gap: 6px; }
                .formulario span[id^="span_error_"],
                .formulario input[type="submit"] { grid-column: 1; }
                #IU_Test_result_nofile { width: calc(100% - 20px); margin: 12px auto; }
            }
        `;
        document.head.appendChild(estilos);
    }
}

new entity_dom_fields();
