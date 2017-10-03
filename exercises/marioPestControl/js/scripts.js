// document.addEventListener("DOMContentLoaded", function(event) {
//   event.preventDefault();
// goom("goombaTotal");
// boom("boomTotal");
// cheep("totalCheep");

document.getElementById("allResult").addEventListener("click", function () {
    var goombaTotal = document.getElementById("goomba-total").innerHTML;
    var bobombTotal = document.getElementById("bob-omb-total").innerHTML;
    var cheepTotal = document.getElementById("Cheep-cheeps-total").innerHTML;
    var myResult = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
    document.getElementById("allResult").innerHTML = myResult;
    });


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

/////JQUERY


// var goombaPrice = parseInt($("#goomba-price").html());
// var goom = $("#goomba-count").on("input", function() {
//   var goombaCount = parseInt($("#goomba-count").val());
//   var goombaTotal = goombaPrice * goombaCount;
//   $("#goomba-total").innerHTML = goombaTotal
//   console.log(goombaTotal);
//   });
//
//   var boomPrice = parseInt($("#Bob-ombs-price").html());
//   var boom =
//   $("#Bob-ombs-count").on("input", function() {
//     var boomCount = parseInt($("#Bob-ombs-count").val());
//     var boomTotal = boomPrice * boomCount;
//     $("#Bob-ombs-total").html() = boomTotal;
//     console.log(boomTotal);
//   });
//
//     var cheepPrie = parseInt($("#Cheep-cheeps-price").html());
//     var cheep = $("#Cheep-cheeps-count").on("input", function() {
//       var cheepCount = parseInt($("#Cheep-cheeps-count").val());
//       var totalCheep = cheepCount * cheepPrie;
//       $("#Cheep-cheeps-total").html() = totalCheep;
//       console.log(totalCheep);
//     });
//
//
//   $("#allResult").on("click", function() {
//     var goombaTotal = $("#goomba-total").html();
//     console.log(goombaTotal);
//     var bobombTotal = $("#Bob-ombs-total").html();
//     var cheepTotal = $("#Cheep-cheeps-total").html();
//     var myResult = parseInt(cheepTotal) + parseInt(bobombTotal) + parseInt(goombaTotal);
//     $("#allResult").html() = "Your total price is: " + myResult;
//  });
//
