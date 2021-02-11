//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
var getShirtsColorsAmount = (({products:{shirts:{colors}}})=> colors.length);
console.log(getShirtsColorsAmount(company));
 
//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};
const {shirts,socks}= clothes;
const clothesNoPants = {shirts,socks};
console.log(clothesNoPants);

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arrNoFirst = (([out,...arr])=>arr)
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arrNoFirst(arr),...arrNoFirst(arr2)];
console.log(arr3)


//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];
const personsName = [...persons].map((person)=> `${person.firstname} ${person.lastname}`);
console.log(personsName)
