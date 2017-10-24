//Add a function express as a property of module.exports

// module.exports.greet = function() {
//   console.log("Hello from greet2.js");
// };
//
// module.exports.puppies = function() {
//   console.log("WOOF!");
// };

function greet() {
  console.log("Hello from greet2.js");
};

function puppies() {
  console.log("WOOF!");
};

module.exports = {
  greet,
  puppies
}
