//homwork 1: cho 2 so a va b, viet code log ra
function cal(num1, num2) {
  console.log("");
  console.log("_____BAI 1_____");

   console.log("A * B = " +(num1 * num2))
   console.log("A / B = " +(num1 / num2))
   console.log("A % B = " +(num1 % num2))
   console.log("");
}
// cal(5, 3);


//homework 2
const n = 87531;
function find(n) {
  console.log("");
  console.log("BAI 2");
  console.log("");
  const numArray = [];
  console.log ("Tim duoc: " + Math.round(n / 154));
  var limit = Math.round(n / 154)
  for (i = 1; i <= limit; i++) {
    numArray.push(i * 154);
    console.log(numArray);
    // anh van chua hieu khuc nay khi nao can return???
  }
  // console.log(numArray);

}
// find(500);


//homework3
function homework3(dong) {
  console.log("");
  console.log("BAI 3");
  console.log("");
  row1 = [];
  for (var i = 1; i <= dong; i++) {
    row1.push(i)
    console.log(row1)
  }
}
homework3(8);









//
