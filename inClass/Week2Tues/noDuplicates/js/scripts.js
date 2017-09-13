//user
$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();
    // var input = ("slipper flipper blipper");
    var sentence = $("input#yourSentence").val().toLowerCase();
    var sentenceArray = sentence.split('');
    console.log(sentenceArray);
    console.log(sentenceArray[0]);

      var hellol = function(sentenceArray) {
      var noDuplicate = [];
      var missDumplicate = [];
      for (var i = 0; i < sentenceArray[i].length; i++) {
        if (sentenceArray.indexOf(sentenceArray[i]) === -0) {
          noDuplicate.push(sentenceArray[i]);
        } else {
          missDumplicate.push(sentenceArray[i]);
        }
      }

      console.log(noDuplicate);
      console.log(missDumplicate);
    };
  });
});
// var input = ("slipper flipper blipper");
//
// function finder(blah) {
//     var keptLetters = [];
//     var misfitLetters = [];
//     for (var i = 0; i < blah.length; i++) {
//         if (keptLetters.indexOf(blah[i]) === -1) {
//             keptLetters.push(blah[i])
//         } else {
//             misfitLetters.push(blah[i]);
//         }
//     }
//     return {
//     keptLetters: keptLetters.join(", "),
//     misfitLetters: misfitLetters.join(", ")
//     }
// }
// var input = ("slipper flipper blipper");
//
// function finder(input) {
//     var keptLetters = [];
//     var misfitLetters = [];
//     for (var i = 0; i < input.length; i++) {
//         if (keptLetters.indexOf(input[i]) === -1) {
//             keptLetters.push(input[i])
//         } else {
//             misfitLetters.push(input[i]);
//         }
//     }
//     return {
//     keptLetters: keptLetters.join(", "),
//     misfitLetters: misfitLetters.join(", ")
//     }
// }
//
// console.log(finder(input));
