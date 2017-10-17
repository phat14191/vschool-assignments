//
//
// function gameOf3(num, count) {
//   if(num === 1) return count;
//   if (num % 3 === 0) {
//     count++;
//     return  gameOf3(num / 3, count);
//   } else if (num - 1 % 3 === 0) {
//     count++;
//     return  gameOf3((num - 1) / 3, count)
//   } else {
//     count++;
//     return  gameOf3 ((num + 1) / 3, count);
//   }
// }


function gameOf3(num) {
    let count = 0;
    while (num !== 1) {
        if (num % 3 === 0) {
            num = num / 3;
            count++;
        } else if ((num + 1) % 3 === 0) {
            num = (num + 1) / 3;
            count++;
        } else if ((num - 1) % 3 === 0) {
            num = (num - 1) / 3;
            count++;
        }
    }
    return count;
}


module.exports = gameOf3;
