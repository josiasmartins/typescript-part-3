export function domInjector(seletor: string) {
    // target: se vc colocar na propriedade estática de uma class, retorna uma função contructora
    // se não for: ele retorna o prototype dessa classe;
    return function(target: any, propertyKey: string) {
        console.log(propertyKey);

        const getter = function() {
            const elemento = document.querySelector(seletor);
            return elemento;
        }
    }
}