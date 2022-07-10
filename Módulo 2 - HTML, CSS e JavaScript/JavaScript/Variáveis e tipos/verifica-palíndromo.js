/* 
    # Verifica palíndromo

    Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

    Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

function verificaPalindromo(string) {
	if (!string) return 'Insira uma string';

    string = string.toLowerCase();

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(`${string} não é um palíndromo`);
		}
	}
	return console.log(`${string} é um palíndromo`);
}

verificaPalindromo('ovO')