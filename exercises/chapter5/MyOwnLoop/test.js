const assert = require('assert');
const MyOwnLoop = require('./index')();

describe('Your Own Loop exercise', function(){


    it('my own for loop', function(){

        MyOwnLoop.recursiveLoop(10, (value) => value > 0, (value) => value - 1, (value) => value);
        assert.equal(10, 10);
    })

});