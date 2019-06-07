// variable linked to container in DOM
const foodContainer = document.querySelector(".foodList")

// fetching data from .json and placing array in variable
// fetch("http://localhost:8088/food")
// .then(foods => foods.json())
// .then(parsedFoods => {
//     console.table(parsedFoods)
//     for(let i=0; i<parsedFoods.length; i++) {
//         foodContainer.innerHTML += formatFoodItem(parsedFoods[i])
//     }    
// })
// function to inject HTML into DOM
const formatFoodItem = (taco) => {
    console.log("work damn it")
    return `
    <article>
        <h1>${taco.name}</h1>
        <h2>${taco.category}</h2>
        <p>${taco.ethnicity}</p>
        <p>${taco.ingredients}</p>
        </article>
    `
}

fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            // console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients_text
                    // console.log(food.ingredients)

                    // Produce HTML representation
                    const foodAsHTML = formatFoodItem(food) 
                    // => {
                        // console.log(food)
                        // return`
                        // <p>${food.ingredients}</p>
                        // `
                    // }

                    // Add representaiton to DOM
                    foodContainer.innerHTML += foodAsHTML
                })
        })
    })

// fetch("https://world.openfoodfacts.org/api/v0/product/8410076472489.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         console.log(productInfo)
//     })
// fetch("https://world.openfoodfacts.org/api/v0/product/0077507015066.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         console.log(productInfo)
//     })
// fetch("https://world.openfoodfacts.org/api/v0/product/0286084095976.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         console.log(productInfo)
//     })
// fetch("https://world.openfoodfacts.org/api/v0/product/0029319910169.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         console.log(productInfo)
//     })
// fetch("https://world.openfoodfacts.org/api/v0/product/3250391414628.json")
//     .then(response => response.json())
//     .then(productInfo => {
//         console.log(productInfo)
//     })