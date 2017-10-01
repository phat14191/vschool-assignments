var chai = require("chai");
var assert = chai.assert;

var isPalindrome = require("../main.js");

describe("Check palidnmore", function() {
  it("Should not return true if it is not a palindrome", function (){
    assert.equal(isPalindrome("palindrome"), false)
  });
  it("Should have the same characters forward and backwards", function (){
    assert.equal(isPalindrome("racecar"), true)
  });
  it("Should not be case sensitive", function (){
    assert.equal(isPalindrome("StarRats"), true);
    assert.equal(isPalindrome("StarRats"), true);
  });
  it("Should ignore spaces", function (){
    assert.equal(isPalindrome("StarRats"), true);
    assert.equal(isPalindrome("Star R ats"), true);
  });
  it("Should ignire special characters", function (){
    assert.equal(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"), true);
    assert.equal(isPalindrome("A man, a plan, a canal - panama"), true);
  });
});
