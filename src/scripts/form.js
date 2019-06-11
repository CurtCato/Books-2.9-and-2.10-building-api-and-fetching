// event listener for form
let searchInput = document.querySelector("#search-input")
document.querySelector("#search-btn").addEventListener("click", () => {
  let apiUrl = "https://api.edamam.com/api/food-database/parser"
  let apiId = app_keys.app_id
  let apiKey = app_keys.app_key
  fetch(`${apiUrl}?ingr=${searchInput.value}&app_id=${apiId}&app_key=${apiKey}`)
  .then( foodData => foodData.json())
  .then( food => {
    document.querySelector("#search-results").innerHTML = ""
    addFoodComponentToDom(createFoodSearchComponent(food), "search-results")
  })
})