function validateIP(ip) {
  var array = ip.split(".");
  return array[0] <= 255 && array[0] >= 0 && array[1] <= 255 && array[1] >= 0 && array[2] <= 255 && array[2] >= 0 && array[3] <= 255 && array[3] >= 0 && array.length === 4
  }


console.log(validateIP("!.23.23.33"))
