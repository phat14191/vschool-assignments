// Given a string and a non-negative int n, we'll say that the "front" of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the "front"
//
// Use TDD (Test-driven development) in solving this problem.

// "string" & Number > 0 -> if true

//return  "front" : "" first 3 char//


function check(str, n) {

    let newString = str.slice(0, 3);
    let strInt = "";
    for (let i = 0; i < n; i++) {
      strInt += newString;
    }
    return strInt;
}

// console.log(check("hello", 5));


// var str = "abcddsa";
// var strArray = str.split("").splice(0, 3).join("");
// console.log(strArray);
// console.log(typeof("hello"));

module.export = check;
