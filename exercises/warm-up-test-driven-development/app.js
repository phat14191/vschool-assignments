// Given a string and a non-negative int n, we'll say that the "front" of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the "front"
//
// Use TDD (Test-driven development) in solving this problem.

// "string" & Number > 0 -> if true

//return  "front" : "" first 3 char//


function check(str, Number) {
  //empty {} to push
  var chars = {};
  if (Number >= 0 && str === typeof(String)) {
    //to get 3 char of str
    var strArray = str.split("").splice(0, 3).join("");
    return ("Front is the first 3 chars is: " + strArray);
  }
}

console.log(check("hello", 5));


// var str = "abcddsa";
// var strArray = str.split("").splice(0, 3).join("");
// console.log(strArray);
// console.log(typeof("hello"));

// module.export = check;
