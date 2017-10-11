const chai = require("chai");
const assert = chai.assert;

var check = require("../app")

describe("A zen balanced parentheses", () => {
  it("should have an equal number of opening and closing parentheses", () => {
    assert.isTrue(check("()"));
    assert.isTrue(check("(()())()"));
    assert.isFalse(check("("));
    assert.isFalse(check("(()"));
  });

  it("should always have an opening paren before its matching closing one", () => {
    assert.isTrue(check("()"));
    assert.isFalse(check(")("));
    assert.isFalse(check("())()"));
  });
});
