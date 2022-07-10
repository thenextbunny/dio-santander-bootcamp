/*
    # Manipulando o valor de this
    
    Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.
*/

const pessoa = {
    nome: 'Ana',
    idade: 50,
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

// Call
console.log(calculaIdade.call(pessoa, 30)) // objeto e parâmetro

// Apply 
console.log(calculaIdade.apply(pessoa, [30])); // objeto e parâmetro em colchetes

