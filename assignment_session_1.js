// Used the alert() method the display an alert box with my message to the user
alert("Why not have a go at guessing the number on the dice")

// User prompt to guess the number on the dice
const usersNumber = prompt("Please enter a number between 1 and 6")

// Create a random number as though you were rolling a dice
const diceNumber = Math.floor(Math.random() * 6) + 1;

// Print message to the user on the console using interpolation
console.log(`The dice rolled a ${diceNumber}`)

// Print message to the user on the console using concatenation
console.log("Your guess was " + usersNumber)
