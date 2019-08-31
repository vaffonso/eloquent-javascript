var assert = require("assert");
const countChar = require("./index");

describe("Count total char in string", function() {
  it("should count total o uppercase V", function() {
    assert.equal(countChar('my first name is Vinicius', 'V'), 1);
  });

  it("should count total of chars", function() {
    assert.equal(countChar('Brown beans, green beens. Beans of all colors', 'B'), 2);
  });

  it("return 0 either if invalid string or char", function() {
    assert.equal(countChar(null, 'V'), 0);
    assert.equal(countChar('Some phrase to count Numbers', null), 0);
    assert.equal(countChar(null, null), 0);
  });
});
