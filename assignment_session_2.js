// Ask if the user is hungry and thirsty
window.alert("Welcome to my program")
const hungry = prompt("Are you hungry?")
const thirsty= prompt("Would you like a drink?")

// Decide what to print to the console based on the users answers
if ((hungry === "Yes" || hungry === "yes") && (thirsty === "Yes" || thirsty === "yes")) {
  console.log("Let me make you a meal")
} else if ((hungry === "No" || hungry === "no") && (thirsty === "Yes" || thirsty === "yes")) {
  console.log("Let me make you a drink")
} else if ((hungry === "Yes" || hungry === "yes") && (thirsty === "No" || thirsty === "no")) {
  console.log("Let me get you a snack")
} else {
  console.log("Lets watch a movie")
}

// check if you have drunk enough drinks today
let number_of_drinks = 2
if (number_of_drinks < 5) {
  console.log("You should have a drink")
}

// function to combine ingredients to make a meal
function makeTea(ingredient1, ingredient2, ingredient3) {
  const ingredients = ingredient1 + ", " + ingredient2 + ", " + ingredient3
  return ingredients
}

// variables to set the ingredients
let ingredient_1 = "chicken"
let ingredient_2 = "pasta"
let ingredient_3 = "cheese sauce"

// call the function
let ingredients = makeTea(ingredient_1, ingredient_2, ingredient_3)

// print to console the returned value from the function
console.log(ingredients)

// change the ingredients using the variables
ingredient_1 = "beef"
ingredient_2 = "rice"
ingredient_3 = "curry sauce"

// call the function again
ingredients = makeTea(ingredient_1, ingredient_2, ingredient_3)

// print to console the returned value from the function
console.log(ingredients)

// function including a switch statement to decide what text to return depending on the time of day
function get_time_of_day(time_of_day) {
  switch (time_of_day) {
    case "morning":
      return text = "Time for breakfast"
      break
    case "lunchtime":
      return text = "Time for lunch"
      break
    case "teatime":
      return text = "Time for tea"
      break
    default:
      return text = "Let's have fun"
  }
}

// set time of day variable
let time_of_day = "teatime"

// call get_time_of_day function
time_of_day_statement = get_time_of_day(time_of_day)

// print to console the returned value from the function
console.log(time_of_day_statement)
