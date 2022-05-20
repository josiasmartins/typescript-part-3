import { Imprimivil } from '../utils/imprimivil.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivil {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
