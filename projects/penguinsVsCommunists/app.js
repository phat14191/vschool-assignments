// constructor function and use the new keyword to instantiate the parties)
class obj {
  constructor(name, parties, population, isSurvive) {
    this.name = name;
    this.parties = parties;
    this.population = population;
    this.isSurvive = isSurvive;
  }
}

var penguins = new obj("Penguin", "Peace", 1000000, true);
var communists = new obj("Communist", "War", 1000000, true);

console.log(penguins);
console.log(communists);

// random 1 or 2 who will attack first
function flipCoin() {
  var ranNum = Math.floor((Math.random() * 2) + 1);
  if (ranNum === 1) {
    //the Penguin attact first
    //function attact();
  } else if (ranNum === 2) {
    // the Communist attact
  }
};

function sendNuke(party, onHit, onMiss) {
  //1st parameter party is javascripts object
  
}
