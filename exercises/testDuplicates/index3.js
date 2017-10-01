function isCaps(letter) {
  return letter === letter.toUpperCase();
}
console.log(isCaps("a"))

   //-> Hello
var strArray = str.split("");

function findCaps(str) {
  var str = "";
  for ( i = 0; i <str.length; i++) {
    if (isCaps(strArray[i])) {
      str += str[i].toUpperCase();
    } else {
      str += str[i].toLowerCase();
    }
  }
  return str;
}

console.log(findCaps("ascMdsA"))
