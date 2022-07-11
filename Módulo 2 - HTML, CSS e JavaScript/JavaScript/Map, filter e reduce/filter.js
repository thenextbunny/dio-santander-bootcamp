/*
    # Filter
    Filtre e retorne todos os números pares de um array.
*/

const numbers = [1, 3, 4, 5, 8, 10, 22, 33];

// Modo 1
function filterEven(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 == 0;
}

console.log(filterEven(numbers));

// Modo 2
function filterOdd(arr) {
    return arr.filter((item) => {
        return item % 2 !== 0;
    });
}

console.log(filterOdd(numbers));



