const phrase = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."


function word(str) {
  var phraseArray = str.split(" ");
  var keepers = [];
  var throwArray = [];
  for (var i = 0; i < phraseArray.length; i++) {
    if (throwArray.indexOf(phraseArray[i]) === -1) {
      throwArray.push(phraseArray[i]);
    } else if (throwArray.indexOf(phraseArray[i]) !== -1 && keepers.indexOf(phraseArray[i]) === -1) {
      keepers.push(phraseArray[i])
    }
  }
  return keepers;
}

console.log(word(phrase));

module.exports = word;










//
