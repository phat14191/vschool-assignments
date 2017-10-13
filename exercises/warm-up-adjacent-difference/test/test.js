const chai = require("chai");
const assert = chai.assert;

var check = require("../app.js");

describe("Adjacent Difference", () => {
  it("should find 3 longest adjacent strings", () => {
    assert.deepEqual(check(["something", "something else", "a", "nother thing"]), ["something else", "a", "nother thing"])
    assert.notDeepEqual(check(["something", "something else", "a", "nother thing"]), ["something else", "a", "nother thing"])
  });
  it("should still return correctly if fewer than 3 items", () => {
    assert.notInclude(check(["something"]), undefined);
    assert.deepEqual(check(["something", "something else"]), ["somethi ng", "something else"]);
    assert.deepEqual(arrayFilter(["something"]), ["something"]);
  })
});
