var input = ("hello jallo meeloo");

function finder(input) {
    var keptLetters = [];
    var misfitLetters = [];
    for (var i = 0; i < input.length; i++) {
        if (keptLetters.indexOf(input[i]) === -1) {
            keptLetters.push(input[i])
        } else {
            misfitLetters.push(input[i]);
        }
    }
    return {
    keptLetters: keptLetters.join(", "),
    misfitLetters: misfitLetters.join(", ")
    }
}

console.log(finder(input));
