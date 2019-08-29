const chalk = require('chalk');

/**
 * Print number 1 to 100 considering 2 exceptions
 * Numbers divided by 3 print `Fizz`
 * Numbers divided by 5 print `Buzz`
 * Also print `FizzBuzz` case number is divided both by 3 and 5
 */
const fizzBuzz = (fizzDivider = 3, buzzDivider = 5) => {

    let counter = 0;
    while (counter < 100) {
        
        counter++;

        if (counter%fizzDivider === 0 
            && counter%buzzDivider === 0) {
            console.log(chalk.cyan(`FizzBuzz(${counter})`));
        } else if (counter%fizzDivider === 0) {
            console.log(chalk.yellow(`Fizz(${counter})`));
        } else if (counter%buzzDivider === 0) {
            console.log(chalk.magenta(`Buzz(${counter})`));
        } else {
            console.log(chalk.reset(counter));
        }
        
    }
}

module.exports = fizzBuzz;