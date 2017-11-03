const chai = require("chai");
const assert = chai.assert

const findDifferent = require("../app.js");

let tests = {
  case0: {
    arr1: [1, ,2 ,3],
    arr2: [2, 3, 4]
  }
}

describe("Should return an array of all the unique items", () => {
  it("should return [1, 4]", () => {
    assert.deepEqual(findDifferent(tests.case0.arr1, tests.case0.arr2), [1, 4]);
  });
});
