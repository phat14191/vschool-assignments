// how about if type = array
// how to let them know ....

// function checkData(type1, type2, type3) {
//   if (typeof type1 === Number && type2 !== Number) {
//     return false;
//   } else if (type1 === Boolean && type2 !== Boolean) {
//     return false;
//   } else if (type1 === String && type2 !== String) {
//     return false;
//   } else if (type2 === Boolean && type3 !== Boolean) {
//     return false;
//   } else if (type2 === String && type3 !== String) {
//     return false;
//   } else if (type2 === Number && type3 !== Number) {
//     return false;
//   } else {
//     return true;
//   }
// };
//
// console.log(checkData(1, 2, 3));

// function checkData(id1, id2, id3) {
//   var type1  = is1.split(" ")
//
// }
// var id1 = [["a"],["b"],["c"]];
//
// console.log(id1[0]);
// console.log(typeof(id1));

// var type1 = id1.split(" ");
// console.log(type1)
// console.log(typeof("hello"));
// console.log(typeof(1));
// console.log(typeof(true));


// module.exports = check;

function checkTypes(arr) {
  // flatten array spread
//   let newArray = [];
//   for (let i  = 0; i < arr.length; i++) {
//     newArray = newArray.concat(arr[i]);
//   }
//   for (let i = 0; i < newArray.length -1; i++) {
//     if(typeof newArray[i] !== typeof newArray[i+1]) {
//       return false;
//     }
//   }
// }

const flattened = arr.reduce((prev, curr) => {
  return prev.concat(curr);
}, []);
console.log(flattened);

console.log(checkTypes([[1,2,3],["a","b","c"],[true, true, true]]))


//loop through array
  //concat currentArray to a new array
  //OR
  //push items to a new array operator

//OR
//use reduce to flatten array
//check every item and see if they're the same data type
// .every array method
// OR
// loop through array and see if typeof every item is the same as ithe item


















//
