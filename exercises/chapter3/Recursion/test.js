var assert = require("assert");
const isEven = require("./index");

describe("isEven test", function() {
  it("should return true", function() {
    assert.equal(isEven(50), true);
  });

  it("should return false", function() {
    assert.equal(isEven(75), false);
  });

  it("should disregard negative", function() {
    assert.equal(isEven(-1), false);
  });

  it("should disregard decimal", function() {
    assert.equal(isEven(-1.76), false);
  });
});
