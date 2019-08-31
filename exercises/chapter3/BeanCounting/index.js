'use strict';

/**
 * How many uppercases character B there are in the string
 * Update function to find any other char
 * @param {*} string 
 * @param {*} char 
 * @returns {Number}
 * 
 */
const countChar = (string, char) => {
    let totalChars = 0;

    if (!string || !char) {
        return totalChars;
    }

    for (let i = 0; i < string.length; i++){
        if (string[i] === char) {
            totalChars++;
        }
    }

    return totalChars;
}

module.exports = countChar;