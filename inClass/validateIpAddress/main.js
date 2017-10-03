function validateIP(ip) {
  var array = ip.split(".");
  if (array.length !== 4) {
    return false;
  };

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0 || array[i] > 255 || isNaN(Number(array[i]))) {
      return false;
    }
  }
  return true;
}

console.log(validateIP("!.23.23.33"))

module.exports = validateIP;
