//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]
const fetch = require('node-fetch');
function recebeReceitas(){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
    .then((response)=>
    {
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>
    {   
        const ingredientes = (data)=>{
            let itens = ""
            for (let i=1;i<21;i++){
                idItem = data.meals[0].strIngredientsi
                itens += `${idItem}, `
            }
            return itens;
        }
        console.log(ingredientes(data));
        const receita = `
        Nome: ${data.meals[0].strMeal}
        ID: ${data.meals[0].idMeal}
        Região: ${data.meals[0].strArea}
        Ingredientes: ${ingredientes(data)} // tentei fazer uma função pra retornar todos os ingredientes pq n queria fazer a concatenação dos 20 na mão mas n conesegui ;/
        Instruções: ${data.meals[0].strInstructions}`

        return console.log(receita);
    })
}
recebeReceitas();
