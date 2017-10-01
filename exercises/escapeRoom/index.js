
// 2. Write a function that takes an array of words and a character and return an array of each word that has that letter present
//  Such as: [“hello", "world"] "h" -> "h"


function filterWords(arr, char) {
  var matches = arr.filter(function(letter) {
    return letter.indexOf(char, "d") !== -1;
  });
  return matches;
}

console.log(filterWords(["abc", "acd", "def", "afg"], "d"));
