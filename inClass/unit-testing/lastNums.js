//write a function that, given 2 numbers ,returns true is the last number is the same in both

// lastNums(12, 402) => true
// lastNums(11, 402) => false

function lastNums(a, b) {
  // return a % 10 === b % 10;
  var lastDigi1 = (Array.from(a.toString())).pop();
  var lastDigi2 = (Array.from(b.toString())).pop();
    return (lastDigi1 === lastDigi2);
}

module.exports = lastNums;
