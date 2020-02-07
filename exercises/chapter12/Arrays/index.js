exports.array = (...args) => [].concat(args);

exports.length = array => array.length;

exports.element = (array, index) => array[index];
