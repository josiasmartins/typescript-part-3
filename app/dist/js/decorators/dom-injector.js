export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(propertyKey);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
    };
}
