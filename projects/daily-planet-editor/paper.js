/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here. For example, the `while` loop
at the end has syntax problems, not logic problems. It shouldn't be an infinite loop,
but the way to fix that is not to change the structure of the while loop.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var Enemies = ["Lex",
                "Batman",
                "Darkseid",
                "Brainiac",
                "General Zod",
                "Doomsday"];

  var clarkKent = true;
  var superMan = false;

function whoWins (isThereKryptonite, enemyName) {
  if (isThereKryptonite === enemyName){
    return "Superman beats " + enemyName + ", of course";
  } else if (isThereKryptonite !== enemyName) {
    return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
  }
  console.log (whoWins (isThereKryptonite, enemies[i]));
};


function howAttractedIsLoisLaneToMe(enemies) {
  for ( var i = 0; i < enemies[i].length; i++ ) {
    if ( i % 2 === 0) {
      // 1 is not at all attracted, 10 is "super" attracted...
      return Math.floor((Math.random() * 10) + 1);
    }
  }
  console.log(howAttractedIsLoisLaneToMe(enemies));
};

while (clarkKent === true) {
  console.log ("I'm just a nerdy columnist");
  var phoneBoothQuickChange = Math.random();
  if ( phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
  } else {
    superman = true;
    console.log("Now I'm Superman!");
  }
}
