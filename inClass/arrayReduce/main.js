function total(arr) {
  var sum = total.reduce(function(current, next) {
    return current + next;
  }, 0)
  return sum;
}


function stringConcat(arr) {
  var string = arr.reduce(function(start, next) {
    return start + next;
  }, "");
  return string;
}

console.log(stringConcat([1,2,3])) // "123"
