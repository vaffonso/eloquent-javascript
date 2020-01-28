const assert = require('assert');
const PGroup = require('./index');

describe('Test Group class', function() {
  it('Test add, delete and has methods', function() {
    const a = PGroup.empty.add('a');
    const ab = a.add('b');
    const b = ab.delete('a');

    assert.equal(b.has('b'), true);
    assert.equal(a.has('b'), false);
    assert.equal(b.has('a'), false);
  });
});
