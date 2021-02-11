//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.
const fetch = require('node-fetch');

function recebeNomes(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    .then((response)=>{
        if (response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        listaPratos = [];
        for (let i=0;i<10;i++){
            listaPratos.push(data.meals[i].strMeal);
        }
        return console.log(listaPratos);
    })
}
recebeNomes();