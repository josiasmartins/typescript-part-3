export function domInjector(seletor: string) {
    // target: se vc colocar na propriedade estática de uma class, retorna uma função contructora
    // se não for: ele retorna o prototype dessa classe;
    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionado o getter para a propriedade ${propertyKey}`)
        console.log(propertyKey);

        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        )
    }
}