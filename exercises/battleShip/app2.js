var readline = require("readline-sync");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max- min + 1)) + min;
}

// run other function get random
function isShip() {
var random = getRandomInt(1, 5);
  return random === 5;
}

function Location() {
  this.isShip = isShip();     // whenever I call they will run isShip
  this.hit = false;           // and check
  this.display = "~";
}
// Part 2

function makeGrid() {
  var gird = [];
  for (var i = 0; i < 10; i ++) {
    var row = [];
    for (var j = 0; j < 10; j++) {
      var newLocation = new Location();
      row.push(newLocation);
    }
    gird.push(row);
  }
  return gird;
}

function displayGrid(grid) {
  var display = "";
  for (var i = 0; i < grid.length; i++) {
    var row ="";
    for (var j = 0; j < grid[i].length; j++) {
      row += grid[i][j].display + "  ";
    }
    display += row + "\n";
  }
  console.log(display);
}

var grid = makeGrid();
displayGrid(grid);
var numShipSunk = 0;

function updateLocation(x, y) {
  var guessedLocation = grid[x][y];
  guessedLocation.hit = true;
  if (guessedLocation.isShip) {
    userGuess.display = "X";
    numShipSunk++;
    console.log("\n*** HIT!!! ****\n");
    console.log("You're hit " + numShipSunk + " ships so far.\n");
  } else {
    guessedLocation.display ="0";
    console.log("\n :( :( :( Missed It :( :( :( \n")
  }
}

//gets guess from the user
function userGuess() {
  var y = parseInt(readline.question("Gimme an X coordinate 1 - 10: ")) -1;
  var x = parseInt(readline.question("Gimme an X coordinate 1 - 10: ")) -1;
  // var guess = grid[x][y];
  while(x < 0 || x > 9 || y < 0 || y > 9) { // Keep asking them
    console.log("Only enter a number between 1 - 10")
    var y = parseInt(readline.question("Gimme an X coordinate 1 - 10: ")) -1;
    var x = parseInt(readline.question("Gimme an X coordinate 1 - 10: ")) -1;
  }
  updateLocation(x, y);
  displayGrid(grid);
}
  while (numShipSunk < 3) {
    userGuess();
  }
  console.log("You did it!")
