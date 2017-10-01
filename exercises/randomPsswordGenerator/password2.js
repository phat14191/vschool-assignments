function randomGenerator(length) {
    var charset = "abcdefghijklmnopqrstuvwxyz1234567890",
        retVal = "";
    for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}
console.log(randomGenerator(256));
