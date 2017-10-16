const chai = require("chai");
const assert = chai.assert;

var findLongestCombined = require("../app.js");

describe("Adjacent Difference", () => {
  it("should find 3 longest adjacent strings", () => {
    assert.notDeepEqual(findLongestCombined(["this", "a", "an", "array"]), ["this", "an", "array"]);
    assert.deepEqual(findLongestCombined(["this", "a", "an", "array"]), ["a", "an", "array"]);
    assert.deepEqual(findLongestCombined(["is", "an", "array", "something", "something else", "another thing", "more things", "in", "this", "array"]), ["something else", "another thing", "more things"]);
  });
});
