const assert = require('assert');
const Vec = require('./index');

describe ('Test Vector methods', function() {

    it('Test plus method', function() {
        const result = new Vec(1, 2).plus(new Vec(2, 3));

        assert.equal(result.x, 3);
        assert.equal(result.y, 5);
    });

    it('Test minus method', function() {
        const result = new Vec(1, 2).minus(new Vec(2, 3));

        assert.equal(result.x, -1);
        assert.equal(result.y, -1);
    });

    it('Test length method', function() {
        const result = new Vec(3, 4);
        assert.equal(result.length, 5);
    });
})