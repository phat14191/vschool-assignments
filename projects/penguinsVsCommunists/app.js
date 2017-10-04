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
  // sendNuke(party, onHit, onMiss);
}
//repeat change to atack
flipCoin();























//
