$(document).ready(function() {

  $("form#form-group").submit(function(event) {
    var sentence = $("input#yourSentence").val().toLowerCase();
    var sentenceArray = sentence.split('')
    console.log(sentenceArray);
    // event.preventDefault();
    sentenceArray.forEach(function(sentenceArray){
    $("div#output").append("<li>" + sentenceArray + "</li>");
    });
  event.preventDefault();  
  });
});
