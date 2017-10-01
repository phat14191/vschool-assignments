
var inventory = [];

var pokemon = {
  mame: "pokemon",
  exp: 5,
  hp: 5,
  strength: 5,
  inventory: ["Fire Ball"],
  giftHP: 3
}

var squirtle = {
  mame: "Squirtle",
  exp: 6,
  hp: 6,
  strength: 6,
  inventory: ["Sword"],
  giftHP: 8
}

var charmander = {
  mame: "Charmander",
  exp: 15,
  hp: 9,
  strength: 6,
  inventory: ["Monkey King Bar"],
  giftHP: 8
}


//greetting + name
var readline = require("readline-sync");
// var name = readline.question("What your name of player? ");
// console.log("Welcome to Colossal Adventure " + name + "!!!");
function player() {
  var name = readline.question("What your name of player? ");
  console.log("Welcome to Colossal Adventure " + name + "!!!");
  this.name = name;
  this.hp = 10;
  this.strength = 6;
  this.exp = 5;
  this.inventory = [];
  // this.giftHP = 8;
  this.changeToEscape = true;
  this.live = true;
}
var newPlayer = new player();
console.log(newPlayer);

ask for walk
var walking = readline.question("what do you want to WALK to play? press (w) ");
// if not press w, change other stament
while(walking !== "w"){
  console.log("Please just press 'w' to play!!!!");
  walking = readline.question("Just press w, to play this AWESOME game!!!");

var playerIsLive = true;

while(playerIsLive === true) {
    walk();
}

  function walk(){
    var options = ["walk", "check inventory", "quit game press q"];
    var option = parseInt(readline.keyInSelect(options, "What would you like to do?")) + 1;
    if(option === 0){
      gameIsOver();
    };
    if (option === 1){
        whatHappenOnOurWalk();
    } else if (option === 2) {
        checkInventory();
    }
};

// while (playerIsLive === true) {
//   if(playerIsLive === false) {
//     break;
//   }
// }
function runSucessful(){
    var ranNum = Math.floor(Math.random() * 2);
    console.log(ranNum);
    if(ranNum === 0) {
      console.log("You ran away");
    } else if (ranNum === 1) {
      console.log("You can't escape, you have to fight Enemy");
      // combat coding
    };
};

function fight() {
  var randomDamage = Math.floor(Math.random() * 4);
  console.log(randomDamage);
}

function checkInventory(){
    console.log(inventory);
}


function whatHappenOnOurWalk(){
    console.log("walk");
    runSucessful();
}

wilhe ()

// function run(){
//   if
// }
//
// function fight() {
//   var
// }












//
