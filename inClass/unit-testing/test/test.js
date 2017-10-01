var chai = require("chai");
var assert = chai.assert;
// if all in library need to pass (..) go back directory
var calculator = require("../cal.js");
var lastNums = require("../lastNums.js");

// write different unit
describe("Last Nums", function() {
  it("should tell us if the last nums are the same", function() {
    assert.isTrue(lastNums(12, 22));
    assert.isFalse(lastNums(12, 23));
  });
});

xdescribe("A calculator", function () {
  it("shoud add two numbers", function() {
    assert.equal(calculator.add(1, 2), 3);
    assert.equal(calculator.add(-1, -2), -3);
    assert.equal(calculator.add(1,-2), -1);
    assert.equal(calculator.add(-1,2), 1);
  });
    //Write other subtract testing
  it("should subtract two numbers", function() {
    assert.equal(calculator.sub(1, 2), -1);
    assert.equal(calculator.sub(-1, -2), 1);
    assert.equal(calculator.sub(1,-2), 3);
    assert.equal(calculator.sub(-1,2), -3);
  });
    //Write other division testing
  it("should division two numbers", function() {
    assert.equal(calculator.div(6, 2), 3);
    assert.equal(calculator.div(-6, 2), -3);
    assert.equal(calculator.div(1,-2), -0.5);
    assert.equal(calculator.div(-1,2), -0.5);
  });
  it("should multiply two numbers", function() {
    assert.equal(calculator.mul(2, 2), 4);
    assert.equal(calculator.mul(-1, -2), 2);
    assert.equal(calculator.mul(-1,-2), 2);
    assert.equal(calculator.mul(-1,2), -2);
  });
});
