/*
    # Set

    Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

let myArr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos (arr) {
    const mySet = new Set(arr);
    return [... mySet]; // Uso do Spread para retornar outra array
}

console.log(valoresUnicos(myArr))
