var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function sortVoters(arr) {


    // separate out age groups into separate arrays
    // loop through voters
    // if age >=18 and <= 25 => push to young array
    // else if age >=26 and <= 35 => push to midArray
    // else if age >=36 and <= 55 => push to olderArray

    var youngins = [];
    var middleAged = [];
    var frailSeniorCitizens = [];

    for (var i = 0; i < arr.length; i++) {
        var thisVoter = arr[i];
        if (thisVoter.age >= 18 && thisVoter.age <= 25) {
            youngins.push(thisVoter);
        } else if (thisVoter.age >= 26 && thisVoter.age <= 35) {
            middleAged.push(thisVoter);
        } else if (thisVoter.age >= 36 && thisVoter.age <= 55) {
            frailSeniorCitizens.push(thisVoter);
        }
    }


// for each array
// check how many in each age group voted
// find out length of each array
// divide num voted / total num * 100
// log the percentage
  // Youngins
  var numYounginsVoted = 0;
  for (var i = 0; i < youngins.length; i++) {
    if (youngins[i].voted) {
      numYounginsVoted++;
    }
  }
  var younginsPercentage = numYounginsVoted / youngins.length * 100;
  console.log("18-25: " + younginsPercentage + "%");



  // Mids
  var numMidsVoted = 0;
  for (var i = 0; i < middleAged.length; i++) {
    if (middleAged[i].voted) {
      numMidsVoted++;
    }
  }
  var midsPercentage = numMidsVoted / middleAged.length * 100;
  console.log("26-35: " + midsPercentage + "%");



  // Oldies
  var numOldsVoted = 0;
  for (var i = 0; i < frailSeniorCitizens.length; i++) {
    if (frailSeniorCitizens[i].voted) {
      numOldsVoted++;
    }
  }
  var oldsPercentage = numOldsVoted / frailSeniorCitizens.length * 100;
  console.log("36-55: " + oldsPercentage + "%");
}

sortVoters(voters);
