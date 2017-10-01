var readlineSync = require("readline-sync");

var wordResponse = "";
var definitionResponse = "";

var dictionary = {};

while (wordResponse !== "q" || definitionResponse !== "q"){
    var wordResponse = readlineSync.question("What word would you like to enter? ");

    if (wordResponse === "q") {
        break
    };

    if (dictionary[wordResponse]) { //underfine falsy
      console.log("the definition for " + wordResponse + " is: " + dictionary[wordResponse]);
    } else {
      var definitionResponse = readlineSync.question("What's the definition to that word? ");
      dictionary[wordResponse] = definitionResponse;
    }

}
