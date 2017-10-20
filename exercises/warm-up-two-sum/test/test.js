const chai = require("chai");
const assert = chai.assert;

const twoSum = require("../app.js");

const test = {
  case0: {
    arr: [
      1,2,3
    ],
    target: 4
  }
}

describe("Two Sum test", () => {
  it("should return an array containing the two indices whose elements add up to the target", () => {
    //deepEqual compare array, => in there 2 array
    assert.deepEqual(twoSum(test.case0.arr, test.case0.target),[0,2]);
  });
})
