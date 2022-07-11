/*
    # Map
    Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/

const apple = {
    value: 2,
};

const orange = {
    value: 3,
};

const numbers = [1, 2];

// Com this
function mapWithThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
};

console.log('this -> maça', mapWithThis(numbers, apple));
console.log('this -> orange', mapWithThis(numbers, orange));

// Sem this
function mapWithoutThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
};

console.log(mapWithoutThis(numbers));