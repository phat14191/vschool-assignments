// Write a function thay accepts a strign
//
// function printString(str) {
//   for ( var i = 0; i = str.lenght; i++) {
//     console.log(str[i]);
//   }
// }
//
// printString("My String");


// function findLetter(str, letter) {
//   for (var i = 0; i < str.length; i++)  {
//     if (letter === str[i]) {
//       console.log(i);
//       return;
//     } else {
//       console.log("Your're an idiot");
//       return " You're an idiot";
//     }
//   }
// }
//
// findLetter ("Hi there", "i");

// function find42(arr) {
//   for ( var i = 0; i < arr.length; i++) {
//     if (arr[i] === 42) {
//       console.log("We found 42 at index", i);
//       return;
//     }
//   }
//   console.log("Didn't find 42 in this array");
// }
//
// find42([1,2,3,4,5,6,7,8,52,42,2,2,4,2,3]);
// find42([1,2,3,4,5]);

var arr = [12 ,32, -2000, 44, 2323, 1, -4, 1232144];

function loop4(arr) {
  var smallNum = arr[0];
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];

    }
  }
  console.log(smallNum);
}

loop4(arr);
