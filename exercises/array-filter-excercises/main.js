//1) Filter all numbers out of the array that are less than 5
function fiveAndGreaterOnly(arr) {
  var five = arr.filter(function(num) {
    if (num >= 5) {
    return num >=5
    }
  });
  return five;
};

//ES6
function fiveAndGreaterOnly(arr) {
  var five = arr.filter((num) => {
    if (num >= 5) {
    return num >=5
    }
  });
  return five;
};

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// 2) Filter all numbers out of the array that are odd
function evensOnly(arr) {
  var evens = arr.filter(function(num) {
    if (num % 2 === 0) {
      return num;
    }
  });
  return evens;
};
//ES 6
function evensOnly(arr) {
  var evens = arr.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  return evens;
};

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// 3) Filter all strings out of the array that are less than 5 characters long
function fiveCharactersAndLessOnly(arr) {
  var five = arr.filter(function(str) {
    return str.length <= 5;
  });
  return five;
};
//ES6
function fiveCharactersAndLessOnly(arr) {
  var five = arr.filter((str) => {
    return str.length <= 5;
  });
  return five;
};
console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"]

// 4) Filter out all the people who do not belong to the club
function peopleWhoBelongToTheIlluminati(arr){
  var belong = arr.filter(function(str) {
    if (str.member === true) {
      return str.member;
    }
  });
  return belong;
}

//ES6
function peopleWhoBelongToTheIlluminati(arr){
  var belong = arr.filter((str) => {
    if (str.member === true) {
      return str.member;
    }
  });
  return belong;
}

console.log(peopleWhoBelongToTheIlluminati([
    {
      name: "Angelina Jolie",
      member: true
    },{
      name: "Eric Jones",
      member: false
    },{
      name: "Paris Hilton",
      member: true
    },{
      name: "Kayne West",
      member: false
    },{
      name: "Bob Ziroll",
      member: true
    }
  ])
);

//ES6
// 5) Filter out all the people who are not old enough to see 'The Matrix' (18)
const ofAge = arr => {
    const ageChecker = arr.filter((person) => {
        return person.age >= 18;
    });
    return ageChecker;
}

console.log(ofAge([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));















//
