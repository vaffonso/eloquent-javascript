function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let counter = promises.length;
    let rejection = null;
    const response = [];
    if (!promises.length) {
      resolve(promises);
    }
    promises.forEach((element, index) => {
      element
        .then(result => {
          response[index] = result;
        })
        .catch(err => {
          rejection = err;
        })
        .finally(() => {
          counter -= 1;
          if (counter === 0) {
            if (!rejection) {
              resolve(response);
            } else {
              reject(rejection);
            }
          }
        });
    });
  });
}

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

// Test code.
PromiseAll([]).then(array => {
  console.log('This should be []:', array);
});
PromiseAll([soon(1), soon(2), soon(3)]).then(array => {
  console.log('This should be [1, 2, 3]:', array);
});
PromiseAll([soon(1), Promise.reject('X'), soon(3)])
  .then(array => {
    console.log('We should not get here');
  })
  .catch(error => {
    if (error !== 'X') {
      console.log('Unexpected failure:', error);
    }
    console.log('Got it');
  });

module.exports = {
  PromiseAll,
  soon,
};
