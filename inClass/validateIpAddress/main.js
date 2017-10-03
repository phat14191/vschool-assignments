function validateIP(ip) {

  if (array.length !== 4) {
    return false;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0 || array[i] > 255) {
      return false;
    }
  }
  return true;
};

module.exports = validateIP;
