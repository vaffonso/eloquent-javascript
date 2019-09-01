var assert = require("assert");
const { deepEqual } = require("./index");

describe("Deep Comparison test", function() {

  it("deepEqual test", function() {
    const objA = {a: 'a'};
    const objB = {a: 'a'};
    assert.equal(deepEqual(objA, objB), true);
  });

});
