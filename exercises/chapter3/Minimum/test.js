var assert = require("assert");
const minimum = require("./index");

describe("Simple minimum test", function() {
  it("should return the minimal number", function() {
    assert.equal(minimum(1, 4), 1);
  });

  it("should return the minimal number 2", function() {
    assert.equal(minimum(5, 2), 2);
  });

  it("should return the any number", function() {
    assert.equal(minimum(3, 3), 3);
  });
});
