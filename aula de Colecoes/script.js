function getAdmin(map){
    let admins = [];
    for([key,value] of map){
        if (value === 'Admin') {
            admins.push(key);   
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Joao','Admin');
usuarios.set('Jorge','User');
usuarios.set('Luiza','User');

console.log(getAdmin(usuarios));

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}
console.log(valoresUnicos(array));