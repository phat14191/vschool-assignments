//user
$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();
    // var input = ("slipper flipper blipper");
    var sentence = $("input#yourSentence").val().toLowerCase();
    var sentenceArray = sentence.split('');
    console.log(sentenceArray);
    console.log(sentenceArray[0]);
    //empty array push
    var noDuplicate = [];
    var missDumplicate = [];

      for (var i = 0; i < sentenceArray[i].length; i++) {
        if (sentenceArray.indexOf(sentenceArray[i]) === -1) {
          noDuplicate.push(sentenceArray[i]);
        }

        console.log(noDuplicate);
      }


  })
});
