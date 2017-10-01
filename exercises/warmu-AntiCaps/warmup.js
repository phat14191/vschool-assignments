// antiCaps("Hello") Hello //
// antiCaps("racEcar") // racEcar
// antiCaps("bAnAnA") //bAnAnA

// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }
//
// function antiCaps(str) {
//   var newString = "";
//   for var (var i = 0; i < str.length; i++) {
//     if (isCaps(str[i])) {
//       newString += str[i].toLowerCase();
//
//     } else {
//       newString += str[i].toUpperCase();
//     }
//   }
//   return newString;
// }
//
// console.log(antiCaps('lsdsSDASDas'));

// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }
//
// function antiCaps(str) {
//   var newString = "";
//   for var (var i = 0; i < str.length; i++) {
//     if (isCaps(str[i])) {
//       newString += str[i].toLowerCase();
//
//     } else {
//       newString += str[i].toUpperCase();
//     }
//   }
//   return newString;
// }
//
// console.log(antiCaps('lsdsSDASDas'));

function antiCaps(str) {
  var lowers = "absddsewrerwer";
  var uppers = lowers.toUpperCase();
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    if (uppers.indexOf(str(i)) !== -1) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

console.log(antiCaps("dsadweSASDSD"));
