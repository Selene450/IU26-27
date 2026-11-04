/**
 * clase para refactorizar los metodos existentes en Validations. NO se pueden crear metodos nuevos.
 */
class entity_validations extends Validations{
    constructor(){
        super();
    }
    //Soluciona problema con los selects que devuelven undefined
    min_size(valor, minsize){
        return String(valor ?? '').length >= minsize;
    }

    max_size(valor, maxsize){
        return String(valor ?? '').length <= maxsize;
    }

    format(valor, exprreg){
        return new RegExp(exprreg).test(String(valor ?? ''));
    }
}