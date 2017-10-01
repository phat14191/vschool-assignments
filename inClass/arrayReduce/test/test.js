var chai = require("chai");
var assert = chai.assert;
// if all in library need to pass (..) go back directory
var add = require("../test.js");

describe("A calculator", function () {
  it("shoud add two numbewrs", function() {
    assert.equal(add(1, 2), 3);
    assert.notEqual(add(-1, -2), -3);

  });
});
