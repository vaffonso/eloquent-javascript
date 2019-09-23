const assert = require('assert');
const DominantWritingDirection = require('./index');


describe('Dominant writing direction in string', function(){

    it('Find ltr direction in Hello!', function(){
        assert.equal(DominantWritingDirection('Hello!'), 'ltr');
    });

    it('Find rtl direction in Hey, مساء الخير', function(){
        assert.equal(DominantWritingDirection('Hey, مساء الخير'), 'rtl');
    });
})