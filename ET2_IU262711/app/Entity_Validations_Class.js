/**
 * clase para refactorizar los metodos existentes en Validations. NO se pueden crear metodos nuevos.
 */
class entity_validations extends Validations{
    /**
     * Crea la gestión de la entidad `Entity_Validations_Class`. Si `esTest` es distinto de `'test'`, monta también la interfaz.
     */
    constructor(){
        super();
    }
    //Soluciona problema con los selects que devuelven undefined
    /**
     * Comprueba que el valor tiene al menos minsize caracteres. Sustituye a Validations.min_size.
     * @param {*} valor Valor a comprobar
     * @param {number} minsize Longitud mínima
     * @returns {boolean}
     */
    min_size(valor, minsize){
        return String(valor ?? '').length >= minsize;
    }

    /**
     * Comprueba que el valor tiene como máximo maxsize caracteres. Sustituye a Validations.max_size.
     * @param {*} valor Valor a comprobar
     * @param {number} maxsize Longitud máxima
     * @returns {boolean}
     */
    max_size(valor, maxsize){
        return String(valor ?? '').length <= maxsize;
    }

    /**
     * Comprueba que el valor cumple la expresión regular. Sustituye a Validations.format.
     * @param {*} valor Valor a comprobar
     * @param {RegExp} exprreg Expresión regular que debe cumplir
     * @returns {boolean}
     */
    format(valor, exprreg){
        return new RegExp(exprreg).test(String(valor ?? ''));
    }
}