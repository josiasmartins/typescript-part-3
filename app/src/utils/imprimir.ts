import { Imprimivil } from './imprimivil.js';

export function imprimir(...objetos: Imprimivil[]) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}