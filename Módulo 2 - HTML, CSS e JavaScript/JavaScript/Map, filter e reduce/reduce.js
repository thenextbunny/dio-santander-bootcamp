/* 
    # Reduce
    1. Some todos os números de um array
    2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

// 1
function sum(arr) {
    return arr.reduce((prev, current) => {
        return prev + current;
    });
};

const numbers = [1, 2, 3, 4, 5]
//console.log(sum(numbers))

// 2
const products = [
    {
        name: 'Apple',
        price: 15
    },
    {
        name: 'Orange',
        price: 20
    }
]

let balance = 60;

function prices(balance, arr) {
    return arr.reduce((prev, current/*, index*/) => {
        //console.log('round', index + 1)
        //console.log({prev});
        //console.log({current});
        return prev - current.price;
    }, balance);
};

console.log(prices(balance, products))