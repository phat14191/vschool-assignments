

   function findDifferent(arr1, arr2) {
   //combie the arrays
   const combined = [...arr1, ...arr2];
      //check first and last index
     return combined.filter(item => combined.indexOf(item) === combined.lastIndexOf(item))
      //if the same, push to unique arrays
   //return unique array
 }

// function difference(arr1,)


console.log(findDifferent([1, 2, 3, 7, 6, 6], [2, 3, 4, 1, 2]));
// module.exports = findDifferent;
