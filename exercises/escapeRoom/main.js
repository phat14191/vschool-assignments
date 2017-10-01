var readline = require("readline-sync");
var gameIsOn = true;
var hasTheKey = false;

var name = readline.question("What is your name? ");
console.log(name + "! You lock in the room, and you will die if you don't get out!!!");

while (gameIsOn === true) {
  if(gameIsOn === false) {
    break
  }


hopes = ["Try to open the DOOR", "Put your hand in the dark hole in the wall", "hopefully you can find the key"];

var action = parseInt(readline.keyInSelect(hopes, "What do you want to do?") + 1);

console.log(action);

runAction(action);

  function runAction(num1) {
    if(num1 === 1 && hasTheKey === false) {
      console.log("The door is looked.");
    } else if
    (num1 === 1 && hasTheKey === true) {
      console.log("The door opens!!! Good to go!!!");
      return gameIsOn = false;
    } else if
    (num1 === 2) {
      console.log(name + " You're dead.")
      return gameIsOn = false;
    } else if
    (num1 === 3) {
      console.log("You found a key.")
      return hasTheKey = true;
    }
  }
}
