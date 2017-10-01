
var timer = document.getElementById("timer");
var time = 6;
var colors = ["#ffffff", "#ff0000", "#660000", "#FFA019", "#E49591"];
// setInterval that up
function setTime() {

  time --;
  timer.innerHTML = time;
  timer.style.color = colors[time];
  if (time === 0){
    document.getElementById("output").innerHTML = "THE END OF THE WORLD HAS COME UPON US";
    clearInterval(myVar);
  }
}

var myVar = setInterval(setTime, 1000);






















//   function alertFunc() {
//     alert("Hello!");
//
//   }
//
// myTime(5000);
