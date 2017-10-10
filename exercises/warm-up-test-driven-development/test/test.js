const chai = require("chai");
const assert = chai.assert;

var check = require("../app.js");

describe("Front String", () => {
  it ("should repeat all the characters if there are fewer than 3",() => {
    assert.deepEqual(check("it", 1), "it");
    assert.deepEqual(check("it", 2), "itit");
  })
  it("should only repear the first 3 characters if the are more than 3", () => {
    assert.deepEqual(check("big", 3), "bigbigbig");
    assert.deepEqual(check("hello", 2), "helhel");
  });

});
