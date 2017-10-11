const chai = require("chai");
const assert = chai.assert;

var check = require("../app.js");

describe("Front String", () => {
  it ("should repeat all the characters if there are fewer than 3",() => {
    assert.equal(check("it", 1), "it");
    assert.equal(check("it", 2), "itit");
    assert.equal(check("a", 0), "");
  })
  it("should only repear the first 3 characters if the are more than 3", () => {
    assert.equal(check("big", 3), "bigbigbig");
    assert.equal(check("hello", 2), "helhel");
  });

});
