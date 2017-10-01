// // var grid = [
// //   [1, 6, 3, 4, 5, 1, 0, 9, 0, 9],
// //   [1, 1, 2, 4, 5, 1, 4, 6, 1, 2],
// //   [1, 2, 9, 4, 5, 2, 0, 9, 4, 0],
// //   [1, 2, 7, 11, 5, 1, 0, 0, 7, 0],
// //   [1, 4, 3, 4, 5, 1, 0, 5, 0, 0],
// //   [2, 2, 5, 33, 5, 1, 0, 0, 2, 0],
// //   [1, 4, 3, 4, 5, 4, 0, 9, 1, 0],
// //   [5, 2, 7, 9, 1, 4, 0, 6, 0, 0],
// //   [1, 9, 3, 4, 5, 1, 5, 0, 3, 2],
// //   [2, 2, 4, 4, 2, 9, 0, 23, 2, 7]
// // ]
// // // console.log(grid[1][1])
// //
// // var coordinates = [];
// // for ( var i = 0; i < grid.length; i++) {
// //   console.log(grid.length);
// //   coordinates.push(grid.length);
// // }
// // console.log(coordinates);
//
//
//
// // console.log(grid);
// var readline = require("readline-sync");
//
// // for loop that # of Items
// // for loop insert into an array that many 0's
//
// var ship = [];
// function createArray(amount) {
//   var arr = [];
//
//   for (var i = 0; i < amount; i++) {
//     var zeros = [];
//     for (var j = 0; j < amount; j++) {
//       zeros.push(0);
//     }
//     arr.push(zeros);
//   }
//   return arr;
// }
//
// var grid = createArray(5);
// console.log(grid);
//
// var y = parseInt(readline.question("Enter y: ")) -1;
// var x = parseInt(readline.question("Enter x: ")) -1;
//
// grid[x][y] = 1;
// console.log(grid);
// ship.push(createArray(5));
// console.log(ship);
// var mores = ["Do you want to get more coordinates?"];
//
// var addMore = parseInt(readline.keyInSelect(mores, "Add more coordinates?") + 1);
//
// console.log(addMore);
//
// addMoreAction(addMore);
//
// function addMoreAction(num1) {
//   if (num1 === 1) {
//     var y = parseInt(readline.question("Enter y: ")) -1;
//     var x = parseInt(readline.question("Enter x: ")) -1;
//     grid[x][y] = 2;
//     console.log(grid);
//   } else {
//   console.log(grid);
//   }
// }

var readline = require("readline-sync");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max- min + 1)) + min;
}

// run other function get random
function isShip() {
var random = getRandomInt(1, 5);
  return random === 5;
}

//wanna hit beginnin so hit= false
//display "~"
function Location() {
  this.isShip = isShip();     // whenever I call they will run isShip
  this.hit = false;           // and check
  this.display = "~";
}
// Part 2
// Make the grid of Locations
// need var Array to hold grid
// var grid = [];
// LOOP 10 times
  // create new row
  // loop 10 times
    // create a new Locations
    // push location to the row
  // push the row to the grid
// Part 2
// Make the grid of Locations
function makeGrid() {
// need var Array to hold grid var grid = [];
  var gird = [];
// LOOP 10 times
  for (var i = 0; i < 10; i ++) {
  // create new row
    var row = [];
    // loop 10 times
    for (var j = 0; j < 10; j++) {
      // create a new Locations
      var newLocation = new Location();
    // push location to the row
      row.push(newLocation);
    }
    // push the row to the grid
    gird.push(row);
  }
  return gird;
}

// Create A function to displayGrid
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
var numShipSunk = 0;   // what grid data of type => array
// console.log(grid);

function updateLocation(x, y) {
  var guessedLocation = grid[x][y];
  guessedLocation.hit = true; // HIT TRUE
  if (guessedLocation.isShip) {
    guessedLocation.display = "X";
    numShipSunk++;
    console.log("\n*** HIT!!! ****\n");
    console.log("You're hit " + numShipSunk + " ships so far.\n");
  } else {
    guessedLocation.display ="O";
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

  // console.log(guess);//
  //modify the location accordingly
  //change hit to true
    //if they hit a ship // change git to true
    // guessedLocation.hit = true;
    // //if location is a ship
    //   if (guessedLocation.isShip) {
    //   // change display to "X"
    //     guessedLocation.display = "X";
    //     numShipSunk++;
    //     console.log("\n*** HIT****\n");
    //     console.log("You've hit " + numShipSunk + " ships so far.`n`");
    //   } else {
    //     guessedLocation.display = "0";
    //     console.log("`Missed`");
    //     // change display to "O"
    //
    //   }

// game loop
// while numShipSunk < 5
  while (numShipSunk < 2) {
    userGuess();
  // play another round
  }
  console.log("You did it! Congratulations on beating Battleship!!!")






















//
