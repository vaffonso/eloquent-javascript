var assert = require("assert");
const SumRange = require("./index");

describe("range test", function() {
  it("Get total of 10 items in list", function() {
    let rangeList = SumRange.range(1, 10);
    assert.equal(rangeList.length, 10);
  });

  it("Get total of 5 items in list", function() {
    let rangeList = SumRange.range(3, 7);
    assert.equal(rangeList.length, 5);
  });

  it("Get paced list", function() {
    let rangeList = SumRange.range(1, 10, 2);
    assert.equal(rangeList.length, 5);
    assert.equal(rangeList[0], 1);
    assert.equal(rangeList[1], 3);
    assert.equal(rangeList[2], 5);
    assert.equal(rangeList[3], 7);
    assert.equal(rangeList[4], 9);
  });

  it("Get paced list with negative step", function() {
    let rangeList = SumRange.range(5, 2, -1);
    assert.equal(rangeList.length, 4);
    assert.equal(rangeList[0], 5);
    assert.equal(rangeList[1], 4);
    assert.equal(rangeList[2], 3);
    assert.equal(rangeList[3], 2);
  });
});

describe("sum test", function() {
    it("Get total of 55 with sum range", function() {
      let sum = SumRange.sum(SumRange.range(1, 10));
      assert.equal(sum, 55);
    });
  
  });
