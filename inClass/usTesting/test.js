// FLAME WORKS
function  assert(actual, expected) {
  if (actual !== expected) {
    throw {type: "Fail", details: {actual: actual, expected: expected}};
  } else {
    console.log("Test passed.");
  }
}


function describe(message, testFunc) {
  try {
    testFunc();
  } catch (err) {
    console.log("Failure:", err)
  }
}

// MY CODE TO TEST
function add(a, b) {   //test it FAILED
  return a + b; //returned
}

describe("Testing the add function", function() {
  assert(add(1,2), 3);
  assert(add(-1,2), 1);
  assert(add(1,-2), -1);
  assert(add(-1,-2), -3);
})
