import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDiaInterface } from './../interfaces/negociacao-do-dia.interface.js';

export class NegociacaoService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
         // fetch: recebe como parâmetro o endereço da API
         return fetch('http://localhost:8080/dados')
         // then: retorna uma resposta
         .then(res => {
             // res.json: converte a resposta para o JSON
             return res.json()
         })
         .then((dados: NegociacoesDoDiaInterface[]) => {
             return dados.map(dadoDeHoje => {
                 return new Negociacao(
                     new Date(), 
                     dadoDeHoje.vezes, 
                     dadoDeHoje.montante)
             })
         })
    }
}