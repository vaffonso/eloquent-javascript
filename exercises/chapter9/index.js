const chalk = require('chalk');
const prompts = require('prompts');

const regexpGolf = require('./RegexpGolf');
const ex3 = require('./NumbersAgain');

// console.log(chalk.redBright('Under construction 🚧 👷‍♂️'));
console.log(chalk.yellowBright('Chapter 9 Exercises 🗂'));

const questions = [
  {
    type: 'select',
    name: 'exercise',
    message: 'Pick an exercise',
    choices: [
      {
        title: 'Regexp Golf',
        description: 'Exercise 1 - Regex',
        value: 1,
      },
      { title: 'FizzBuzz', description: 'Exercise 2 - Fizz Buzz', value: 2 },
      {
        title: 'NumbersAgain',
        description: 'Exercise 3 - Numbers Again',
        value: 3,
      },
    ],
    initial: 0,
  },
];

(async () => {
  const response = await prompts(questions);

  switch (response.exercise) {
    case 1:
      regexpGolf();
      break;
    case 2:
      break;
    case 3:
      ex3.numbersAgain();
      break;
    default:
      break;
  }
})();
