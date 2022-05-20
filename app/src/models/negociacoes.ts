import { ModeloInterface } from './../interfaces/objeto.interface.js';
import { Comparavel } from './../interfaces/comparavel.interface.js';
import { Imprimivil } from '../utils/imprimivil.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements ModeloInterface<Negociacoes> {
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

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
