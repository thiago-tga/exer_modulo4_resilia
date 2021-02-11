//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
var newNumbers = numbers.map((number)=> Math.sqrt(number));
console.log(newNumbers);

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4]
var numbersMult=numbers.map((number)=> number * 10);
console.log(numbersMult);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
var age18 = ages.filter((age)=> age>=18);
console.log(age18)

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];
const dogList = data.filter((animal)=> animal.type == "dog");
const dogName = dogList.map((dog)=> dog.name);
console.log(dogName)

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
const sumAgeDog = dogList
.map((dog)=>dog.age)
.reduce((sum,age) => sum + age);
console.log(sumAgeDog)
