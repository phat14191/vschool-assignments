var readline = require("readline-sync");
var name = readline.question("What your name of player? ");
console.log("Welcome to Colossal Adventure " + name + "!!!");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max- min + 1)) + min;
}
// random function damage
function randomFunc() {
var random = getRandomInt(1, 3);
  return random;
}
// random function change to escape when you walk
function randomEscape() {
var randomEsc = getRandomInt(1, 4);
  return randomEsc === 4; // if false will fight
}
//Test
// randomFunc();
// console.log(randomFunc());

function player(){
  this.name = name;
  this.hp = 10;
  this.strength = 5;
  this.exp = 5;
  this.inventory = [];
  // this.giftHP = 8;
  this.changeToEscape = true;
  this.live = true;
}
// create New Player with Object
var newPlayer = new player();
console.log(newPlayer);


function Enemies(){
  this.name = name;
  this.hp = 10;
  this.strength = 5;
  this.exp = 5;
  this.inventory = [];
  this.giftHP = 8;
  this.live = true;
}
// create New Play
newPlayer.live = false;
console.log(newPlayer);









//
