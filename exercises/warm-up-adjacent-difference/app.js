const inputArray = ["something", "something else", "a", "nother thing"];

let longest = 0;
let indexOfLongest = 0;

function check(inputArray) {
  for(let i = 0; i < inputArray.length - 2; i++) {
    let threeEle = [...inputArray[i], ...inputArray[i+1], ...inputArray[i+2]].length;
    console.log(threeEle);
      if(threeEle > longest) {
        longest = threeEle;
        indexOfLongest = i;
      }
  }
  return inputArray.slice(indexOfLongest, indexOfLongest + 3);
}

console.log(check(inputArray))
module.exports = check;
