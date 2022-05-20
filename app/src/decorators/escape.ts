export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            // constructor.name: consegue pegar o nome da classe
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }

    return descriptor;
}