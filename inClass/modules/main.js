// Set module.export to a function expression
const greet1 = require("./greet2");
greet1.puppies();


const greet2 = require("./greet2");
greet2.greet();

const Person = require("./person");
const sammy = new Person("Sammy", 42);
sammy.speak();
