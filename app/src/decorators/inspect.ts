    export  function inspect(
        target: any,
        propertyKey: string, // nome método
        descriptor: PropertyDescriptor // responsavel por referencia
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`--- Método ${propertyKey}`);
            console.log(`--- parametros: ${JSON.stringify(args)}`)
            const retorno = metodoOriginal.apply(this, args);
            console.log(`--- retorno: ${JSON.stringify(retorno)}`)
            return retorno;
        }

        return descriptor;
    }
