var assert = require("assert");
const Flattening = require("./index");

describe("Flattening", function() {

  it("Only nested array", function() {
    
    // const array = [[1,2,3],['a','b','c'],['#','%','*']];
    const array = [[1,2,3],['a','b','c']];
    const flattened = Flattening(array);

    assert.equal(flattened.indexOf(1), 0);
    assert.equal(flattened.indexOf(2), 1);
    assert.equal(flattened.indexOf('b'), 4);
    assert.equal(flattened.indexOf('c'), 5);
  });

  it("Mixed values in array", function() {
    
    const array = ['#',[5,7,9],['x','y','z'],['%','*']];
    
    const flattened = Flattening(array);

    assert.equal(flattened.indexOf(5), 1);
    assert.equal(flattened.indexOf(9), 3);
    assert.equal(flattened.indexOf('x'), 4);
    assert.equal(flattened.indexOf('z'), 6);
  });

});