'use strict';

const chalk = require('chalk');

/**
 * Outputs triangle using #
 * Base should contains 7 units
 * Top shouold contain 1
 */

const loopingTriagle = (triangleSize) => {
    const size = triangleSize || 7;
    const char = '#';

    for (let i = 1; i <= size; i++) {
        console.log(chalk.bold(char.repeat(i)));
    }
}

module.exports = loopingTriagle;