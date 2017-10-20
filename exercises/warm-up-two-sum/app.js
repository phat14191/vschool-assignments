// const twoSum = function(nums, target) {
//     for (i =0; i < nums.length; i++) {
//         if (nums[i] + nums[i + 1] === target) {
//             return true;
//         } else if (nums[i] + nums[i + 2] === target) {
//             return true;
//         } else if (nums[i] + nums[i + 3] === target) {
//             return true;
//         } else return false;
//     }
// };
// console.log(twoSum(([2, 7, 11, 15]), 17));


// function twoSum(arr, sum) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++){
//     for (let k = i + 1; k < arr.length; k++){
//       if (arr[k] === sum - arr[i]){
//         result = [i, k]
//       }
//     }
//   }
//   return result
// }

function twoSum(arr, sum) {
  for (let i = 0; i < arr.length; i++){
    let candidate = sum - arr[i];
    let index = arr.indexOf(candidate);
    if(index !== i) return [i, index];
  }
}

module.exports = twoSum;



module.exports = twoSum;
