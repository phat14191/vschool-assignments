const chai = require("chai")
const assert = chai.assert

const filterDatabase = require ("../app.js");

let tests = {
  endpoint: "http://localhost:8080/mokeys",
  case0: {},
  case1: {
    species: "howler"
  },
  case2: {
    species: "gorilla",
    color: "black"
  }
}

describe("filterDatabase test", () => {
  it("should return endpoint back if no query obj", () => {
    assert.equal(filterDatabase(tests.endpoint, tests.case0), tests.endpoint);
  });
  it("should return a url query string with species and howler", () => {
    assert.equal(filterDatabase(tests.endpoint, tests.case1), "http://localhost:8080/mokeys?species=howler")
  });
  it("should return a url query string with species=gorilla and color=black", () => {
    assert.equal(filterDatabase(tests.endpoint, tests.case2), "http://localhost:8080/mokeys?species=gorilla&color=black")
  });
})
