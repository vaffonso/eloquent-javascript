var assert = require("assert");
const { reverseArray, reverseArrayInPlace } = require("./index");

describe("Reverse array test", function() {
  it("ABC to CBA odd number of elements", function() {
    
    const list = ['A','B','C'];
    const reversedList = reverseArray(list);
    assert.equal(reversedList.join(','), 'C,B,A');
  });

  it("ABC to CBA even number of elements", function() {
    
    const list = ['A','B','C','D'];
    const reversedList = reverseArray(list);
    assert.equal(reversedList.join(','), 'D,C,B,A');
  });
});

describe("Reverse array in place test", function() {
    it("ABC to CBA should be the same object", function() {
      
      const list = ['A','B','C'];
      reverseArrayInPlace(list);
      assert.equal(list.join(','), 'C,B,A');
    });

    it("ABCD to DCBA should be the same object", function() {
      
        const list = ['A','B','C',1];
        reverseArrayInPlace(list);
        assert.equal(list.join(','), '1,C,B,A');
    });
});

describe("Compare execution time", function() {
    it("Reverse ABC", function() {
      
        let hrstart, hrend;
        const list = ['A','B','C'];

        hrstart = process.hrtime();
        reverseArray(list);
        hrend = process.hrtime(hrstart);
        console.info('reverseArray - Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

        hrstart = process.hrtime();
        reverseArrayInPlace(list);
        hrend = process.hrtime(hrstart);
        console.info('reverseArrayInPlace - Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

        assert.equal(true, true);
    });
    
    it("Reverse long list", function() {
      
        let hrstart, hrend;
        const list = ['A','B','C',2,{name: 'vini'}, 'type', 'bigger text unable to remember', 100.45, 'ZzYyXx'];

        hrstart = process.hrtime();
        reverseArray(list);
        hrend = process.hrtime(hrstart);
        console.info('reverseArray - Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

        hrstart = process.hrtime();
        reverseArrayInPlace(list);
        hrend = process.hrtime(hrstart);
        console.info('reverseArrayInPlace - Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

        assert.equal(true, true);
    });
});
