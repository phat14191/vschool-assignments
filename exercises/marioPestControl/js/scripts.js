// document.addEventListener("DOMContentLoaded", function(event) {
//   event.preventDefault();
// goom("goombaTotal");
// boom("boomTotal");
// cheep("totalCheep");

// document.getElementById("allResult").addEventListener("click", function () {
//     var goombaTotal = document.getElementById("goomba-total").innerHTML;
//     var bobombTotal = document.getElementById("bob-omb-total").innerHTML;
//     var cheepTotal = document.getElementById("Cheep-cheeps-total").innerHTML;
//     var myResult = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
//     document.getElementById("allResult").innerHTML = myResult;
//     });


var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);
var goom = document.getElementById("goomba-count").addEventListener("input", function() {
  var goombaCount = parseInt(document.getElementById("goomba-count").value);
  var goombaTotal = goombaPrice * goombaCount;
  document.getElementById("goomba-total").innerHTML = goombaTotal
  console.log(goombaTotal);
  });

  var boomPrice = parseInt(document.getElementById("Bob-ombs-price").innerHTML);
  var boom =
  document.getElementById("Bob-ombs-count").addEventListener("input", function() {
    var boomCount = parseInt(document.getElementById("Bob-ombs-count").value);
    var boomTotal = boomPrice * boomCount;
    document.getElementById("Bob-ombs-total").innerHTML = boomTotal;
    console.log(boomTotal);
  });

    var cheepPrie = parseInt(document.getElementById("Cheep-cheeps-price").innerHTML);
    var cheep = document.getElementById("Cheep-cheeps-count").addEventListener("input", function() {
      var cheepCount = parseInt(document.getElementById("Cheep-cheeps-count").value);
      var totalCheep = cheepCount * cheepPrie;
      document.getElementById("Cheep-cheeps-total").innerHTML = totalCheep;
      console.log(totalCheep);
    });



  document.getElementById("allResult").addEventListener("click", function() {
    var goombaTotal = document.getElementById("goomba-total").innerHTML;
    console.log(goombaTotal);
    var bobombTotal = document.getElementById("Bob-ombs-total").innerHTML;
    var cheepTotal = document.getElementById("Cheep-cheeps-total").innerHTML;
    var myResult = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
    document.getElementById("allResult").innerHTML = "Your total price is: " + myResult;
 });

    // document.getElementById("totalAllPrice").innerHTML = totalCheep + boomTotal + goombaTotal;

// });
