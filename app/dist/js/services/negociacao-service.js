import { Negociacao } from '../models/negociacao.js';
export class NegociacaoService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => {
            return res.json();
        })
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacao-service.js.map