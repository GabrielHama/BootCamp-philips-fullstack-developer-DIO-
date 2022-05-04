function soma (){
    let n1 = Number(prompt("insira o primeiro valor"));
    let n2 = Number(prompt("insira o segundo valor "));
    let soma = n1 + n2;

    (n1 == n2) ? (soma > 10 ) ? (soma > 20 ) ? alert(`Os numero ${n1} e ${n2} são iguais e a soma deles é ${soma}, que é maior que 10 e maior que 20.` ) : alert(`Os numero ${n1} e ${n2} são iguais e a soma deles é ${soma}, que é maior que 10 e menor que 20.` )  
    :alert(`Os numero ${n1} e ${n2} são iguais e a soma deles é ${soma}. que é menor que 10 e menor que 20 `) 
    :(soma > 10 ) ? (soma > 20) ? alert(`Os numero ${n1} e ${n2} não são iguais e a soma deles é ${soma}. que é maior que 10 e maior que 20 `):
    alert(`Os numeor ${n1} e ${n2} não são iguais e a soma deles é ${soma}. que é maior que 10 e menor que 20`): alert(`Os numeros ${n1} e ${n2} não são iguais e a soma deles é ${soma}. que é menor que 10 e menor que 20.`);
}
soma();