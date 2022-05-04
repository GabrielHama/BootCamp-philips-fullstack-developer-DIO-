//alert("Tudo certo!");

/*function funcao(){
    console.log('Teste');
}
funcao();
*/

function calculadora (){
    const operacao = Number(prompt('escolha uma operação: \n 1 - Soma \n 2 - Subtração \n 3 - Divisão\n 4 - Multiplicação \n 5 - potenciação'))

    let n1 = Number(prompt ('insira o primeiro valor'));
    let n2 = Number(prompt ('insira o segundo valor'));
    let resultado;

    switch(operacao){
        case 1: 
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                break;
        case 2: 
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                break;
        case 3: 
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                break;
        case 4: 
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                break;
        case 5: 
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                break;
        default:
            alert('Erro');
                break;
    }
    
}
calculadora();