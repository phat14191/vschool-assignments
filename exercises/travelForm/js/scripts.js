


document.getElementById("result").addEventListener("click", function(event) {
  event.preventDefault();
var firstName = document.getElementById("firstName").value;

var lastName = document.getElementById("lastName").value;

var age = parseInt(document.getElementById("age").value);

var gender = document.getElementById("travelForm").genderOpts.value;
// 2ND WAY TO CHOOSE
// var genderOpts = document.getElementsByName("genderOpts");
// var gender = "";
// for (var i = 0; i < genderOpts.length; i++) {
//   if (genderOpts[i].checked === true) {
//     gender = genderOpts[i].value;
//   }
// };

var location = document.getElementById("travelForm").location.value;
//2ND WAY TO CHOESE
// var locationOpts = document.getElementsByName("location");
// var locat = "";
// for (var i = 0; i < locationOpts.length; i++) {
//   if (locationOpts[i].checked === true) {
//     locat = locationOpts[i].value;
//   }
// };

var dietary = document.getElementById("travelForm").dietary.value;
// 2ND WAY TO CHOESE
// var dietaryOpts = document.getElementsByName("dietary");
// var dietary = "";
// for (var i = 0; i < dietaryOpts.length; i++) {
// if (dietaryOpts[i].checked === true) {
//     dietary = dietaryOpts[i].value;
//   }
// };
  alert(" First name: " + firstName + "\n" + " Last name: " + lastName + "\n" + " Age: " + age + "\n" + " Gender: " + gender + "\n" + " Destination: " + location + "\n" + " Dietary: " + dietary);
});
