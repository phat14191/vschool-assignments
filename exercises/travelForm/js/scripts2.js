



var travelForm = document.getElementById("travel-form");
function submission() {
  firstName = travelForm.firstname.value;
  lastName = travelForm.lastname.value;
  age = travelForm.age.value;

  gender = travelForm.gender.value;
  destination = travelForm.destination.value;
  // firstName = document.getElementById("first-name").value;
  diet = travelForm.diet;
  console.log(diet);

  var restrictions = [];

  for (i = 0; i < diet.length; i++) {
    if (diet[i].checked) {
    console.log(restrictions);
      restrictions.push(diet[i].value);
    }
  }
  alert(`First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}
Destination: ${destination}
Destriction: ${restrictions.join("\n")}`)

}
document.getElementById("submit").addEventListener("click", submission)
