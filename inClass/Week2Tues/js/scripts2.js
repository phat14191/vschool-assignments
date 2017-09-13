function factorial (n) {
  var total = 1;
  for (var i = n; i > 0; i--) {
    total = total * i;
  }
  return total;
}

console.log(factorial(4));
console.log(factorial(5));

function factorial (n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n -1);

}
