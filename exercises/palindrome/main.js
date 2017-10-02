
// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.
function isPalindrome(word){
    var toLower = word.toLowerCase();
    var noSpace = toLower.replace(/\s/g, '');
    var letterArray = noSpace.split("");
    var reversed = letterArray.reverse();
    var final = reversed.join("");
    console.log(final);
    //
    return word.toLowerCase().replace(/\W/g, "").split("").reverse().join("") === word.toLowerCase().replace(/\W/g, "")
}
console.log(isPalindrome("aB cD s"));
module.exports = isPalindrome;








//
