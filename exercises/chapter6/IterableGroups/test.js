const assert = require('assert');
const IterableGroup = require('./index');

describe('Test Iterable Group class', function(){
    it('Test class using a loop', function(){
        let output = [];
        let iterableGroup = IterableGroup.from(["a", "b", "c"]);
        for (let value of iterableGroup) {
            output.push(value);
        }
        assert.equal(output.toString, 'a,b,c');
    });
});