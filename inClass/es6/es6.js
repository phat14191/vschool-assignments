// const ages = [12, 23, 34, 1000]
// console.log(Math.max(...ages));
//
// const names1 = ["Nonie", "Miley", "Bruttney"];
// const names2 = ["Justin", "Harry", "Markymark"];
//
// const singers = [...names1, ...names2];
// console.log(singers);

// var addExcitement = function(name) {
//   return name + "!!1!!1";
// }
//         //single can take () out
// const speak = (name) => `${name}!!1!!1`;
//
// console.log(speak("Jamie"));

console.log(this);
const person = {
  name: "Niall",
  age: 21,
  sing: () => {
    console.log(`My name is ${this.name} and I'm ${this.age}`)
  }
}

const func = person.sing.blind(person); // blind sing to person obj
func();
