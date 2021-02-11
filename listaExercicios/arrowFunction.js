//Transforme as funções declarativas abaixo em Arrow Functions
// const upperName = function (name) {
//     return name.toUpperCase();
//   };

const upperName = ((name)=>name.toUpperCase());
console.log(upperName("thiago"));

//   function myFunction(p1, p2) {
//     return p1 * p2;
//   };

const myFunction = ((p1,p2) => p1*p2);
console.log(myFunction(20,2));

//   function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
//   };
const toCelsius = ((fahrenheit) =>(5 / 9) * (fahrenheit - 32));
console.log(toCelsius(30));