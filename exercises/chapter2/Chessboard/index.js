'use strict';

/**
 * Creates a string that represents a grid
 * similar to a chessboard
 */

const chessboard = (binding = 8) => {
    const lineBreaker = '\n';

    let whiteCell = ' ';
    let blackCell = '#';
    let outputString = '';

    for (let i = 0; i < binding; i++) {

        for (let j = 0; j < binding; j++) {

            if (j%2 === 0) {
                outputString = outputString + blackCell;
            } else {
                outputString = outputString + whiteCell;
            }
    
        }

        let temp = whiteCell;
        whiteCell = blackCell;
        blackCell = temp;
        outputString = outputString + lineBreaker;
    }

    console.log(outputString);
}

/**
 * Alternatiive solution
 */
// const chessboard2 = (binding = 8) => {
//     const lineBreaker = '\n';
//     const gridTotal = binding * binding;

//     let whiteCell = ' ';
//     let blackCell = '#';
//     let outputString = '';

//     for (let i = 1; i <= gridTotal; i++) {
        
//         if (i%2 === 0) {
//             outputString = outputString + blackCell;
//         } else {
//             outputString = outputString + whiteCell;
//         }

//         if (i%binding === 0) {
//             let temp = whiteCell;
//             whiteCell = blackCell;
//             blackCell = temp;
//             outputString = outputString + lineBreaker;
//         }
//     }

//     console.log(outputString);
// }

module.exports = chessboard;