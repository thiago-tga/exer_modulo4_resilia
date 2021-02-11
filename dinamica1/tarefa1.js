//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function somar (...array) {
    let soma = 0;
    for (let n of array){
        soma += n
    }
    return soma;
};
console.log(somar(...array));

// ou usando reduce:

const somaArray = ((array).reduce((soma, numero) => soma + numero));
console.log(somaArray);