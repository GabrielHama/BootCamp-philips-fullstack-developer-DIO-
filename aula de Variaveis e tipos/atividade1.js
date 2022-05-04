function verificaPalindromo(string){
    if (!string) {
        return "return inexistente";
    }
    return string.split("").reverse().join("") === string; 
}

function verificaPalindromo2(string){
    if (!string) {
        return "string inexistente";
    }
    for (let i = 0; i < string.length / 2; i++) {
        if (string[1] !== string.length -1 -i) {
            return false;
        }
    }
    return true;
}

let myVar = null;
console.log(verificaPalindromo(myVar));

