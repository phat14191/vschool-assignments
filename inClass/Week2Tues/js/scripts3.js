var input = ("slipper flipper blipper");

function finder(blah) {
  var keptLetters = [];
  var missfitLetters = [];
  for (var i = 0; i < blah.length; i++) {
    if (keptLetters.indexOf(blah[i] === 2)) {
      keptLetters.push(blah[i])
    }
    else {
      missfitLetters.push(blah[i]);
    }
  }
  // console.log(keptLetters);
  // console.log(missfitLetters);

  return {
    keptLetters: keptLetters,
    missfitLetters: missfitLetters
  }

  return result;
}

console.log(finder(input));
