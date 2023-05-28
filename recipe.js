

let recipecard = document.getElementById("recipecard")
let originalcard = document.getElementById("originalcard")
let body = document.getElementsByClassName("body")
let resres = document.getElementById("resres")
let comres = document.getElementById("comres")





let askrecipe = document.getElementById("askrecipe");
askrecipe.addEventListener("click", showrecipe)

function showrecipe(meal) {



    let searchInputTxt = document.getElementById("searchinput").value


    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`;
    fetch(url).then(response => response.json()).then(data => {
        originalcard.innerHTML = "  "
        if (data.meals) {
            data.meals.forEach(meal => {
                console.log(meal)
                originalcard.innerHTML += `
                <div id="recipecard">
        <img src = "${meal.strMealThumb}" alt = "food">
        <span id="recipename">${meal.strMeal}</span>
        <button id="getrecipe">Get Recipe</button>
        </div>`


                let getrecipe = document.getElementById("getrecipe")
                getrecipe.addEventListener("click", appearrecipe)
                function appearrecipe() {
                    comres.style.display = "block"
                    comres.innerHTML = `
                    <div id="resres"><button id="cancelrecipe">Close</button>
                    <h1>Recipe Guide</h1>
                    <p>
                   ${meal[0].strInstructions}
                    </p>
                    </div>
                    
                  `
                    let cancelrecipe = document.getElementById("cancelrecipe")
                    cancelrecipe.addEventListener("click", disappearrecipe)
                    function disappearrecipe() {

                        comres.style.display = "none"
                        console.log("Apple")
                    }


                }
            })

        }
        else {


            console.log("a")
            originalcard.innerHTML = `
            
            <div id="errormessage">
            <div id="errortext"></div>
            <p>No Recipe available with the provided ingredient.</p>
            <button id="homebut">Home</button>
          </div>
            </div >`

            let homebut = document.getElementById("homebut")
            homebut.addEventListener("click", reverthome)
            function reverthome() {
                location.reload()
            }
        }
    })
}