var ask = require("readline-sync");

var isPlayerAlive = true;
var isDonePlaying = "n";

var player = {
  name: "",
  exp: 0,
  hp: 10,
  strength: 7,
  inventory: []
};

var pokemon = {
  name: "Pokemon",
  exp: 5,
  hp: 5,
  giftHP: 3,
  strength: 5,
  inventory: ["Fire Ball"],
  haveAttack: true
};

var squirtle = {
  name: "Squirtle",
  exp: 6,
  hp: 7,
  giftHP: 3,
  strength: 7,
  inventory: ["Sword"],
  haveAttack: true
};

var charmander = {
  name: "Charmander",
  exp: 17,
  hp: 10,
  giftHP: 13,
  strength: 11,
  inventory: ["Monkey King Bar"],
  haveAttack: true
};

player.name = ask.question("What's your name? ");

console.log("Welcome to Colossal Adventure " + player.name + "!!!");

while (isPlayerAlive === true) {
  if (isPlayerAlive === false) {
    console.log(player);
    console.log("GAME OVER");
    break;
  }
  keepWalking();
}


function keepWalking() {
  var doesWalk = ask.question("To keep WALKING type ..w..\nto see your INVENTORY type ..i.. \nto QUIT to play type ..q.. ");
  // console.log("");
  console.log(" ");
  if (doesWalk !== "w" && doesWalk !== "i" && doesWalk !== "q") {
    console.log("Please just press 'w' to play!!!!");
  } else if (doesWalk === "w") {
    doesEnemyAppear();
  } else if (doesWalk === "i") {
    console.log(player);
    console.log("");
  } else if (doesWalk !== "w" && doesWalk !== "i") {
    isDonePlaying = ask.question("Are you done playing? type y ");
  };
  if(isDonePlaying !== "n") {
    console.log("Thank for trying  " + player.name + "!!!");
    isPlayerAlive = false;
  };
};

//33% chance to meet enemy
function doesEnemyAppear() {
  var ranNum = Math.floor(Math.random() * 3); // 0 1 2 ->
  if (ranNum === 1) {
    determineEnemy();
    isPlayerRunning();
  } else {
    console.log("You random nothing, just type ..w.. to get a chance to get WILD ENEMY appeared")
  };
};

function determineEnemy() {
  var ranNum = Math.floor(Math.random() * 12);
  if (ranNum <= 5) {
    enemyIs = pokemon;
  } else if (ranNum > 5 && ranNum <= 10) {
    enemyIs = squirtle;
  } else if (ranNum > 10 && ranNum <= 13) {
    enemyIs = charmander;
  };
};

function isPlayerRunning() {
  console.log("Your enemy appear: " + enemyIs.name + "!");
  choices = ["Fight untill you die! ", "Run ", "Die... "];
  var runFightOrDie = parseInt(ask.keyInSelect(choices, "what do you want to do? ") + 1);
  if (runFightOrDie === 1) {
    combat(enemyIs);
  } else if (runFightOrDie === 2) {
    isRunSuccessful();
  } else if (runFightOrDie === 3) {
  console.log(enemyIs.name + " hit your face " + player.name + "! GAME OVER!!! ")
  isPlayerAlive = false;
  };
};

function isRunSuccessful() {
  var ranNum = Math.floor(Math.random() * 2);
  if (ranNum === 0) {
    console.log("You got away, but your dignity didn't ");
  } else if (ranNum === 1) {
    console.log("Combat enemy")
    combat(enemyIs);
  };
};

function combat(enemy) {
  while (enemyIs.hp > 0 && player.hp > 0) {
    playerAttacts();
    if(enemyIs.hp <= 0) {
      console.log(enemyIs.name + " has been defeated! Great work, " + player.name);
      gainSpoils();
      break
    };
    enemyAttacts();
    if (player.hp <= 0) {
      console.log(enemiIs.name + " Killed you, thanks for play the game " + player.name + " .Game Over");
      isPlayerAlive = false;
    };
  };
  battleReset();
};

function playerAttacts() {
  enemyDamage = Math.floor(player.strength * Math.random());
  enemyIs.hp = enemyIs.hp - enemyDamage;
  console.log("You attacked " + enemyIs.name + " for " + enemyDamage + " damage! " + enemyIs.name + " has " + enemyIs.hp + " HP left!!! ");
};

function enemyAttacts() {
  player.inventory.push(enemyIs.inventory);
  player.hp = player.hp + enemyIs.giftHP;
  player.exp = player.exp + enemyIs.exp;
  player.strength = Math.floor(player.exp * .5) + 5;
  console.log(player.name + " " + enemyIs.inventory + ", gained" + enemyIs.exp + " exp, and " + enemyIs.giftHP + " HP for slaying " + enemyIs.name + ".\n" + player.name + " now has " + player.hp + " HP, " + player.strength + " strength, and " + player.exp + " experience. \n")
};

function gainSpoils() {
  player.inventory.push(enemyIs.inventory);
  player.hp = player.hp + enemyIs.giftHP;
  player.exp = player.exp + enemyIs.exp;
  player.strength = Math.floor(player.exp * 5) + 5;
  console.log(player.name + " so the " + enemyIs.name + " droped " + enemyIs.inventory + ", gained " + enemyIs.exp + " exp, and " + enemyIs.giftHP + " HP for splaying " + enemyIs.name + ".\n" + player.name + " now has " + player.hp + " HP, " + player.strength + " strength, and " + player.exp + " experience. \n")
};

function battleReset() {
  player.strength = Math.floor(player.exp * 0.2) + 7;

  pokemon.hp = 5;
  pokemon.strength++;
  pokemon.giftHP++;

  squirtle.hp = 7;
  squirtle.strength++;
  squirtle.giftHP++;

  charmander.hp = 10;
  charmander.strength++;
  charmander.giftHP++;
};















//
