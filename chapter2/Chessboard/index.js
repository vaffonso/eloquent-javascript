'use strict';

/**
 * Creates a string that represents a grid
 * similar to a chessboard
 */

const chessboard = (binding = 8) => {
    const lineBreaker = '\n';
    const gridTotal = binding * binding;

    let whiteCell = ' ';
    let blackCell = '#';
    let outputString = '';

    for (let i = 1; i <= gridTotal; i++) {
        
        if (i%2 === 0) {
            outputString = outputString + blackCell;
        } else {
            outputString = outputString + whiteCell;
        }

        if (i%binding === 0) {
            let temp = whiteCell;
            whiteCell = blackCell;
            blackCell = temp;
            outputString = outputString + lineBreaker;
        }
    }

    console.log(outputString);
}

module.exports = chessboard;