const chai = require("chai");
const assert = chai.assert

const word = require("../app.js")

describe("Secret Message Wall" , () => {
  it("should return an array of just the duplicated words", () => {
    assert.deepEqual(word("a a b"), ["a"]);
    assert.deepEqual(word("a b"), []);
    assert.deepEqual(word("a a b c c"), ["a", "c"]);
    assert.deepEqual(word("a a b a c c "), ["a", "c"]);
  });



});
