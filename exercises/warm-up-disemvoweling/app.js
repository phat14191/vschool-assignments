// const input = "Pickle Rick!";
// const arr = input.replace(/\s+/g, '');
// const inputArr = arr.toLowerCase();
// console.log(inputArr);

// function findVowels(input) {
//   const arr = input.replace(/\s+/g, '');
//   const inputArr = arr.toLowerCase();
//   const vowels = [];
//   const str = [];
//    for (let i = 0; i < inputArr.length; i++) {
//     //  console.log(inputArr[i]);
//      if (inputArr[i] === "a" || inputArr[i] === "e" || inputArr[i] === "i" || inputArr[i] === "o" || inputArr[i] === "u") {
//         vowels.push(inputArr[i]);
//      } else {
//        str.push(inputArr[i]);
//      }
//    }
//    return vowels.join(", ");
//    return str;
//   //  console.log(str)
//   }
//
// console.log(findVowels("Pickle Rick!"));

const disemvowel = function(str) {
  let output = {
    str: "",
    vowels: ""
  }
  let vowels = "aeiou";
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      output.vowels += str[i];
    } else if(str[i].match(/\s/)) {
      continue;
    } else {
      output.str += str[i];
    }
  }
  return output;
}


//
// disemvowel("Pickle Rick!")
// console.log(disemvowel("test"));
module.exports = disemvowel;
