  //empty ready to push
var parties = [];
var firstAttack = "";
var secondAttack = "";
var partyAttacking = "";
var attacked = "";

//create constructor name and population
class Party{
  constructor(name, population) {
    this.Name = name;
    this.Population = population;
  }
}

  //creat two parties
var penguins = new Party("Penguins", 1000000);
var communist = new Party("Communist", 1000000);

  //push
parties.push(penguins);
// console.log(parties);
parties.push(communist);
// console.log(parties);
console.log("")
console.log("They are " + parties[0].Population + " " + parties[0].Name + " and " + parties[1].Population + " " + parties[1].Name + " to begin the WAR!!!.")
console.log("");

// function random whos attack first
function flipCoin() {
  var coin = Math.random();
  if(coin < .5) {
    firstAttack = parties[0].Name;
    secondAttack = parties[1].Name;
  } else {
    firstAttack = parties[1].Name;
    secondAttack = parties[0].Name;
  }
  console.log("The " + firstAttack + " will ATTACT first.")
  console.log("")
  sendNuke(partyAttacking, onHit, onMiss);
}
//repeat change to atack
flipCoin();

//sendNuke flipCoin -> if attacted -> 50% on hit or NONE//
function sendNuke(partyAttacking, onHit, onMiss) {
  partyAttacking = firstAttack;
  if (parties[0].Population > 0 && parties[1].Population > 0) {
    var hitChance = Math.random();
    if (hitChance <.5) {
      onMiss(partyAttacking, onHit, onMiss);
    } else {
      onHit(partyAttacking, onHit, onMiss);
    }
  } else {
    if (parties[0].Population > parties[1].Population) {
      console.log("")
      console.log("**************************")
      console.log("The ***Penguins*** is Won!!!")
      console.log("")
    } else {
      console.log("")
      console.log("**************************")
      console.log("The ***Communists*** is Won!!! ")
      console.log("")
    }
  }
}

function responseNuke(partyAttacking, onHit, onMiss) {
  partyAttacking = secondAttack;
  if (parties[0].Population > 0 && parties[1].Population > 0) {
    var hitChance = Math.random();
    if (hitChance <.5) {
      onMiss(partyAttacking, onHit, onMiss)
    } else {
      onHit(partyAttacking, onHit, onMiss);
    }
  } else {
    if (parties[0].Population > parties[1].Population) {
      console.log("")
      console.log("######################")
      console.log("The ***Communists*** is Won!!!")
      console.log("")
    } else {
      console.log("")
      console.log("######################")
      console.log("The ***Penguins*** is Won!!! ")
      console.log("")
    }
  }
}

function onMiss(partyAttacking, onHit, onMiss) {
  console.log("The " + partyAttacking + " MISSED their nuke")
  if (partyAttacking === firstAttack) {
    responseNuke(partyAttacking, onHit, onMiss);
  } else {
    sendNuke(partyAttacking, onHit, onMiss);
  }
}

function onHit(partyAttacking, onHit, onMiss) {
  var ranDamage = Math.floor(Math.random() * 100000) + 100000;
  if (partyAttacking === firstAttack && firstAttack === "Penguins") {
    parties[1].Population = (parties[1].Population - ranDamage)
    console.log("The ---Penguins--- success FIRE " + ranDamage + " BOOMBOOM -> The communists have " + parties[1].Population + " populations remaining");
    responseNuke(partyAttacking, onHit, onMiss);
  } else if (partyAttacking === firstAttack && firstAttack !== "Penguins") {
    parties[0].Population = (parties[0].Population - ranDamage);
    console.log("The Communists success FIRE " + ranDamage + " BOOMBOOM -> The Penguins have " + parties[0].Population + " populations remaining");
    responseNuke(partyAttacking, onHit, onMiss);
  } else if (partyAttacking === secondAttack && secondAttack === "Penguins"){
    parties[1].Population = (parties[1].Population - ranDamage);
    console.log("The ---Penguis--- success FIRE " + ranDamage + " BOOMBOOM -> The Communists have " + parties[1].Population + " populations remaining");
    sendNuke(partyAttacking, onHit, onMiss);
  } else {
    parties[0].Population = (parties[0].Population - ranDamage);
    console.log("The Communists success FIRE " + ranDamage + " BOOMBOOM -> The Penguins have " + parties[0].Population + " populations remaining");
    sendNuke(partyAttacking, onHit, onMiss);
  }
}



















//
