var goombaPrice = parseInt(document.getElementById("goomba-price").innerHTML);

document.getElementById("goomba-count").addEventListener("input", function () {
  var goombaCount = parseInt(document.getElementById("goomba-count").value);
  var goombaTotal = 3 * goombaCount;
  document.getElementById("goomba-total").innerHTML = goombaTotal
});
