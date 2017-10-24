var add = require("./Addition");
var divide = require("./Division");
var exponentiation = require("./Exponentiation");
var mul = require("./Multiplication");
var sub = require("./Subtraction");

// add(4,5);
// divide(4,5);
// exponentiation(4,5);
// mul(4,5);
// sub(4,5);

function calculator(a, b, method) {
  switch (method) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "divide":
      return a / b;
    case "exponentiation":
      return Math.pow(a, b);
    default:
      return `please pass method to calculator`
  }
}

console.log(calculator(2,4, "add"));
console.log(calculator(2,4, "divide"));
console.log(calculator(2,4, "exponentiation"));
console.log(calculator(2,4, "sub"));
console.log(calculator(2,4, "mul"));
