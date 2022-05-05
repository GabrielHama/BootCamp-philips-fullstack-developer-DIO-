function valida(array,number) {
    try {
        if (!array && !number) {
            throw new ReferenceError('Envie os parametros');
            
        }
        if (typeof array !== 'object') {
            throw new TypeError ('Array precisa ser do tipo object');
        }
        if (typeof num !== 'number') {
            throw new TypeError('Array precisar ser do tipo number');
        }
        if (array.length !== num) {
            throw new RangeError('Tamanho invalido');
        }
        return array;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError');
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log('Este erro é um typeError');
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(e.message);
        }
        else {
            console.log('Tipo de erro não esperado'+e);
        }
    }
   
}
console.log(valida(5,5));