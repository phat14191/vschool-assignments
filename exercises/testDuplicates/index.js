function noDuplicates(string) {
  var uniques = [];
  var duplicates = [];
  for ( var i = 0; i , string.length; i++) {
    if (uniques.indexOf(string[i]) === -1) {
      uniques.push(string[i]);
    } else {
        duplicates.push(string[i]);
    }
  }
  return {
    uniques: uniques.join(""),
    duplicates: duplicates.join("")
  };
}

var result = noDuplicates("asdfiowasdqwwdqwaaa");
console.log(result.noDuplicates);
console.log(result.uniques);
