// const inputArray = ["something", "something else", "a", "nother thing"];
//
// let longest = 0;
// let indexOfLongest = 0;
//
// function check(inputArray) {
//   for(let i = 0; i < inputArray.length - 2; i++) {
//     let threeEle = [...inputArray[i], ...inputArray[i+1], ...inputArray[i+2]].length;
//     console.log(threeEle);
//       if(threeEle > longest) {
//         longest = threeEle;
//         indexOfLongest = i;
//       }
//   }
//   return inputArray.slice(indexOfLongest, indexOfLongest + 3);
// }

arr = ["this", "a", "an", "array"]

const findLongestCombined = (arr) => {
    let longestLengthSoFar = 0;
    let longestArraySoFar = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let testArray = [];

        let current = arr[i];
        let next = arr[i+1];
        let third = arr[i+2];

        testArray.push(current, next, third);
        if (testArray.join("").length > longestLengthSoFar) {
            longestLengthSoFar = testArray.join("").length;
            longestArraySoFar = testArray;
        }
    }
    return longestArraySoFar;
}

console.log(findLongestCombined(arr));

module.exports = findLongestCombined;
