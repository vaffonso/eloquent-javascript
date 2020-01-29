const assert = require('assert');
const QuotingStyle = require('./index');

describe('Test quotes replacement', function() {
  it('Replace phrase quote', function() {
    const a = QuotingStyle.replaceQuoteMarks(
      "'I'm the cook,' he said, 'it's my job.'"
    );
    assert.equal(a, '"I\'m the cook," he said, "it\'s my job."');
  });
});
