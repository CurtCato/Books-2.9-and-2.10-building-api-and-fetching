// variable linked to container in DOM
// const foodContainer = document.querySelector(".foodList")

// functions to return promis objects
function getLocalFood() {
    return fetch("http://localhost:8088/food")
    .then(localData => localData.json())
}

function getAPIFood(barcode) {
    return fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then( data => data.json())
}

function addAPIData(foodArr) {
    foodArr.forEach( foodItem => {
      getAPIFood(foodItem.barcode)
      .then( foodItemFromApi => {
          console.log(foodItemFromApi)
          foodItem.ingredients = foodItemFromApi.product.ingredients_text
          addFoodComponentToDom(formatFoodItem(foodItem), "food-list")
      })
    })
}

// // function to inject HTML into DOM
// const formatFoodItem = (taco) => {
//     console.log("work damn it")
//     return `
//     <article>
//         <h1>${taco.name}</h1>
//         <h2>${taco.category}</h2>
//         <p>${taco.ethnicity}</p>
//         <p>${taco.ingredients}</p>
//         </article>
//     `
// }

// fetch("http://localhost:8088/food")
//     .then(response => response.json())
//     .then(myParsedFoods => {
//         myParsedFoods.forEach(food => {
//             // console.log(food) // Should have a `barcode` property

//             // Now fetch the food from the Food API
//             fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
//                 .then(response => response.json())
//                 .then(productInfo => {
//                     food.ingredients = productInfo.product.ingredients_text
                  

//                     // Produce HTML representation
//                     const foodAsHTML = formatFoodItem(food) 
                  

//                     // Add representaiton to DOM
//                     foodContainer.innerHTML += foodAsHTML
//                 })
//         })
//     })

