'use strict';

/**
 * Define a recursive function `isEven`
 * Function should accept a single parameter (positive, whole number)
 * - Zero is even
 * - One is odd
 * - For any other number N, it's evenness is the same as N-2
 * @param {*} number 
 * @returns {Boolean}
 */
const isEven = (number) => {

    number = Number(Math.abs(number));
    if (number%1 !== 0) {
        number = Math.floor(number);
    }

    if (number  === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number-2);
    }
}

module.exports = isEven;