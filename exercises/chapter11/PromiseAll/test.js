const assert = require('assert');
const promise = require('./index');

describe('Test Promise all', function() {
  it('Zero promises', function() {
    promise.PromiseAll([]).then(array => {
      console.log('This should be []:', array);
      assert.equal(array.length, 0);
    });
  });

  it('3 promises', function() {
    promise
      .PromiseAll([promise.soon(1), promise.soon(2), promise.soon(3)])
      .then(array => {
        console.log('This should be [1, 2, 3]:', array);
        assert.equal(array.length, 3);
        assert.equal(array[0], 1);
      });
  });

  it('Failing 1 promise among 3 promises', function() {
    promise
      .PromiseAll([promise.soon(1), Promise.reject('X'), promise.soon(3)])
      .then(array => {
        console.log('We should not get here');
      })
      .catch(error => {
        if (error !== 'X') {
          console.log('Unexpected failure:', error);
        }
        assert.equal(error, 'X');
      });
  });
});

// // Test code.
// promise.PromiseAll([]).then(array => {
//   console.log('This should be []:', array);
// });

// promise
//   .PromiseAll([promise.soon(1), promise.soon(2), promise.soon(3)])
//   .then(array => {
//     console.log('This should be [1, 2, 3]:', array);
//   });
// promise
//   .PromiseAll([promise.soon(1), Promise.reject('X'), promise.soon(3)])
//   .then(array => {
//     console.log('We should not get here');
//   })
//   .catch(error => {
//     if (error !== 'X') {
//       console.log('Unexpected failure:', error);
//     }
//   });
