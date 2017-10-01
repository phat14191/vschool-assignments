var myString = "bookkeeper larry";

function noDupes(str) {
  var strArray = str.split("");
    var extras = [];
    for ( var i = 0; i < strArray.length; i++) {
      var curLetter = strArray[i];

      while (strArray.indexOf(curLetter) !== strArray.lastIndexOf(curLetter)) {
        var lastIndex = strArray.lastIndexOf(curLetter);
        var extra = strArray.splice(lastIndex, 1);
        extras.push(extra[0]);
      }
    }
    console.log(strArray.join(""));
    console.log(extras.join(""));
}

noDupes("bookkeeper larry")
