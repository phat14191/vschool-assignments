// number, string, boolean, null
// Objects { Objects, Array, Functions }

const person1 = {
  name: 'Pho'
};

const person2 = {
  name: 'Pho'
};

person2 = 100;

const person3 = person2;
person2.name = 'pho';
let a = 5;
let b = a;
a = 6;

console.log(b);

console.log(person3 == person2);
console.log(person3);
