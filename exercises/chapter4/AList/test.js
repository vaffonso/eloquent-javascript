var assert = require("assert");
const { arrayToList, listToArray } = require("./index");

describe("Array to list test", function() {

  it("Three items chained", function() {
    
    const array = [1,2,3];
    const list = arrayToList(array);

    assert.equal(typeof list, 'object');
    assert.equal(typeof list.rest, 'object');
    assert.equal(typeof list.rest.rest, 'object');
    assert.equal(list.rest.rest.rest, null);
  });


});

describe("List to array test", function() {
    
    it("Five items chained", function() {
      
      const list = {
        value: 'A',
        rest: {
            value: 'B',
            rest: {
                value: 'C',
                rest: {
                    value: 'D',
                    rest: {
                        value: 'E',
                        rest: null
                    }   
                }
            }
        }
      };
      const array = listToArray(list);
      assert.equal(array.length, 5);
      assert.equal(array[0], 'A');
      assert.equal(array[4], 'E');

    });
  
});
