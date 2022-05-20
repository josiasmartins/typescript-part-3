/**
 *  abstract
 *      - não pode ser instanciada
 *      - obriga a implementar
 * 
 * **/
export abstract class Imprimivil {
    constructor() {};
    public abstract paraTexto(): string;
}
