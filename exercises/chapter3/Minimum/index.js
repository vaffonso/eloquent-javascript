'use strict';

/**
 * Write a function min that takes 2 arguments and return their minimum
 * @param {*} arg1 
 * @param {*} arg2 
 */

const minimum = (arg1, arg2) => {

    return (Number(arg1) < Number(arg2)) ? arg1 : arg2; 
}

module.exports = minimum;