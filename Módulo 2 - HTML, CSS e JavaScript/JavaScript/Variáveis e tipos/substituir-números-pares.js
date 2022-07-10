/*
    # Substituir números pares 

    Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

    Exemplo: 
    Input -> [1, 3, 4, 6, 80, 33, 23, 90]
    Output -> [1, 3, 0, 0, 0, 33, 23, 0]
    Input -> []
    Output -> -1
*/

function substituiNumerosPares(arr) {
	if (!arr.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < arr.length; i++) {
		if (numPar(arr[i]) && naoZero(arr[i])) {
			console.log(`Mudando ${arr[i]} para 0...`);
			arr[i] = 0;
		} else if (!naoZero(arr[i])) {
			console.log('Você já vale 0...');
		}
	}
	console.log(arr);
}

substituiNumerosPares([1, 3, 4, 6, 80, 33, 23, 90]);