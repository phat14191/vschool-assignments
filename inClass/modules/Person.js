//export of a constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.speak = function() {
//   console.log("My name is " + this.name + " and I'm " + this.age + " years old")
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`"My name is "  ${this.name}  " and I'm " + ${this.age} " years old"`);
  }
}


module.exports = Person;
