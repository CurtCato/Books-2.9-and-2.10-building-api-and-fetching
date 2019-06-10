// function to inject HTML into DOM
const formatFoodItem = (taco) => {
    return `
    <article>
        <h1>${taco.name}</h1>
        <h2>${taco.category}</h2>
        <p>${taco.ethnicity}</p>
        <p>${taco.ingredients}</p>
        </article>
    `
}

function createFoodSearchComponent(foodObj) {
    return `
      <h2>${foodObj.text}</h2>
      <h3>${foodObj.parsed[0].food.label}</h3>
      <img src=${foodObj.parsed[0].food.image}>
    `
}

function addFoodComponentToDom(foodComponent, element) {
    document.querySelector(`#${element}`).innerHTML += foodComponent
}

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