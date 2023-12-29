// Ask the user for presents to add to the christmas list
const userInput = prompt("What would you like for Christmas?")

// Split user input string into an array of separate elements
const userArray = userInput.split(" ");

// Starting presents array
const myPresents = ["combine harvester", "tractor", "digger", "money", "road sweeper", "train"]

// Join user inputted presents array to the presents array
presents = myPresents.concat(userArray)

// function which runs a for loop to add each present in the array to the message to be printed to the console
// checks for first and last elements in the array to get the correct syntax for the message
function getPresentsList(presents) {
  // Start of message to be printed to the console
  let message = "For Christmas please can I have a "
  for (present of presents) {
    if (present == presents[0]) {
      message = message + present
    } else if (present == presents[presents.length -1]) {
      message = message + " and " + present + "."
    } else {
      message = message + ", " + present
    }
  }
  console.log(message)
}

// Call function with the presents array
getPresentsList(presents)

// Adds "cement mixer" to the end of the array
presents.push("cement mixer")
getPresentsList(presents)

// Removes the last element in the array
presents.pop()
getPresentsList(presents)

// Adds elements to the front of the array
presents.unshift("game", "car wash")
getPresentsList(presents)

// Removes the first element in the array
presents.shift()
getPresentsList(presents)

// Prints presents[0] and [1] to the console but does not alter the array
slice = presents.slice(0,2)
console.log(`The two presents I would like most for Christmas are a ${slice[0]} and a ${slice[1]}.`)

// Remove 3 presents starting with the 3rd present at index 2 in the array
presents.splice(2,3)
getPresentsList(presents)

// Add "magnetic letters" and "jigsaw" at index 2 in the array
presents.splice(2, 0, "magnetic letters", "jigsaw")
getPresentsList(presents)

// Replace present at index 3 with "boat"
presents.splice(3, 1, "boat")
getPresentsList(presents)

// Object including object method
const santaFacts = {
  name: "Saint Nicholas",
  lives: "North Pole",
  getSantaFacts: function() {
    console.log(`Santa's real name is ${this.name} and he lives at the ${this.lives}.`)
  }
}

// Call object method
santaFacts.getSantaFacts()

// Function to count down the days left of Christmas using a while loop
function twelveDaysOfChristmas(dayOfChristmas) {
  while(dayOfChristmas <= 12) {
    console.log(`There are ${12 - dayOfChristmas} days of Christmas left`)
    dayOfChristmas++
  }
}

twelveDaysOfChristmas(4)
