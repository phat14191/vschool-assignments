// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

// isPalindrome("Star Rats!");  // true
// isPalindrome("palindrome");  // false

var str = "abc cba";
var strArray = str.split(" "); // ["abc"] ["cba"]


// var str1 = strArray[0];
// console.log(str1);
// var str1Array = str1.split("");
// console.log(str1Array);
//
// var str2 = strArray[1];
// console.log(str2);
// var str2Array = str2.split("");
// console.log(str2Array);
// var arrayStr2 = str2Array.reverse();

// function isPalindrome(word) {
//   var strArray = str.split(" "); // ["abc"] ["cba"]
//   var str1 = strArray[0];
//   var str1Array = str1.split("");
//
//   var str2 = strArray[1];
//   var str2Array = str2.split("");
//   var arrayStr2 = str2Array.reverse();
//     return (str1Array === arrayStr2);
// }

// function isPalindrome(word) {
//   var toLower = word.toLowerCase();
//   var noSpace = toLower.replace(/\W/g, "");
//   console.log(nospace);
//   var letterArray = toLower.split("");
//   var reversed = letterArray.reverse();
//   var final = reversed.join(""); // return string again
//   return word.toLowerCase()/repalce(/\W/g, "") === final;
// }
//
// module.exports = isPalindrome;

function isPalindrome(word){
    var toLower = word.toLowerCase();
    var noSpace = toLower.replace(/\s/g, '');
    var letterArray = noSpace.split("");
    var reversed = letterArray.reverse();
    var final = reversed.join("");
    console.log(final);
    //
    // return word.toLowerCase().replace(/\W/g, "").split("").reverse().join("") === word.toLowerCase().replace(/\W/g, "")
}
console.log(isPalindrome("aB cD s"));
// module.exports = isPalindrome;








//
