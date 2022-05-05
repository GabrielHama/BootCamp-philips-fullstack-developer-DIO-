const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Pedro',
		nota: 3,
		turma: '2C',
	},
];


function MediaFinal (alunos, media){
    let aprovados = [];
    for (let i =  0 ; i < alunos.length ; i++ ){

        const {nota,nome} = alunos[i];

        if (nota >=media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(MediaFinal(alunos,5));


const pessoa1 = {
    nome:'Maria', 
    idade: 30,
}
const pessoa2 = {
    nome:'Julia', 
    idade: 15,
}
const animal = {
    nome: 'Flora',
    idade: 5, 
    raça: "pug",
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1,30));
console.log(calculaIdade.apply(animal,[7]));
