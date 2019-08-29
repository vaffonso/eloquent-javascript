const chalk = require('chalk');
const prompts = require('prompts');

const LoopingTriagle = require('./LoopingATriangle');
const FizzBuzz = require('./FizzBuzz');
const Chessboard = require('./Chessboard');

// TODO import and check which exercise to run

// console.log(chalk.redBright('Under construction 🚧 👷‍♂️'));

const questions = [
    {
        type: 'select',
        name: 'exercise',
        message: 'Pick an exercise',
        choices: [
          { title: 'LoopingTriagle', description: 'Exercise 1 - Looping a triangle', value: 1 },
          { title: 'FizzBuzz', description: 'Exercise 2 - Fizz Buzz', value: 2 },
          { title: 'Chessboard', description: 'Exercise 3 - Chessboard', value: 3 },
        ],
        initial: 0
    },
    {
        type: prev => prev == 1 ? 'number' : null,
        name: 'triagleSize',
        message: 'Enter size of triagle',
        initial: '7'
      
    },
    {
        type: prev => prev == 2 ? 'list' : null,
        name: 'fizzbuzzDividers',
        message: 'Enter fizz and buzz dividers',
        initial: '3,5',
        separator: ','
    },
    {
        type: prev => prev == 3 ? 'number' : null,
        name: 'binding',
        message: 'Enter grid binding',
        initial: '3'
    },
    
  ];
  
(async () => {
    const response = await prompts(questions);
  
    switch (response.exercise) {
        case 1:
            const size = response.triagleSize;
            LoopingTriagle(size);
            break;
        case 2:
            const params = response.fizzbuzzDividers;
            FizzBuzz(...params);
            break;
        case 3:
            const binding = response.binding;
            Chessboard(binding);
            break;
        default:
            break;
    }
})();