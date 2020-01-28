const assert = require('assert');
const multiply = require('./index');

describe('Test Retry exercise', function() {
  it('Reliable multiply', function() {
    const a = multiply(8, 8);
    assert.equal(a, 64);
  });
});
