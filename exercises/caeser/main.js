//Caesar's Cipher
/*
Write a function that takes a string and an interger and shifts the string over in the alphabet by the ini number of characters

gotchas:
what if the shift puts the letter beyond the alphabet
what if the charaxcter is a space, number, or symbol
what if the shift is really big(1000)
*/
var readline = require("readline-sync");
var str = readline.question("What phrase would you like to encrypt?");
console.log(str + " will shift into your alphabet");
var shift = parseInt(readline.question("How many letters would you like to shift?"));
console.log(shift);

function cipher(str, shift) {
  // define alphabet (so that I can shift it to the next letter)
    var alphabet = "abcdefghijkmnopqrstuvwxyz";
    str = str.toLowerCase();
    var results = ""
    // var results = ""
    // loop through string
    for ( var i =0; i <str.length; i++) {
    var currentLetter = str[i];
    //   find the index in the alphabet of the current letter
    var index = alphabet.indexOf(currentLetter);
    if (index === -1) {
      results += currentLetter
    } else {
      var newIndex = index + shift;
      newIndex %= 26
      results += alphabet[newIndex];
    }
  }
  return results;
}
console.log(" Your Alphabet: abcdefghijkmnopqrstuvwxyz");
console.log("Your phrase: " + str + " Shift: " + shift);
console.log(cipher(str, shift));
// console.log(cipher("abc", 3));
// console.log(cipher("123", 1));
// console.log(cipher("xyz", 1000));
// console.log(cipher("ABC", 1));
// console.log(cipher("a c", 1));
