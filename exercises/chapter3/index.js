const chalk = require('chalk');
const prompts = require('prompts');

const Minimum = require('./Minimum');
const isEven = require('./Recursion');
const CountChar = require('./BeanCounting');

// console.log(chalk.redBright('Under construction 🚧 👷‍♂️'));
console.log(chalk.yellowBright('Chapter 3 Exercises 🗂'));

const isBeanCountingQuestion = (prev, values, prompt) => {
    console.log({prompt: prompt, prev: prev, values: values});
    if (prompt.name === 'stringText') {
        return 'text';
    }

    return null;
}

const questions = [
    {
        type: 'select',
        name: 'exercise',
        message: 'Pick an exercise',
        choices: [
          { title: 'Minimum', description: 'Exercise 1 - Minimum', value: 1 },
          { title: 'Recursion', description: 'Exercise 2 - Recursion is even', value: 2 },
          { title: 'CountChar', description: 'Exercise 3 - Count char in string', value: 3 }
        ],
        initial: 0
    },
    {
        type: prev => prev == 1 ? 'list' : null,
        name: 'minimun',
        message: 'Enter 2 numbers',
        initial: '101,28',
        separator: ','
    },
    {
        type: prev => prev == 2 ? 'number' : null,
        name: 'isEven',
        message: 'Enter number',
        initial: '75',
        float: true,
        round: 2
    },
    {
        type: prev => prev == 3 ? 'text' : null,
        name: 'stringText',
        message: 'Enter a phrase',
        initial: 'Brown Beans, Green Beans. All beans.'
    },
    {
        type: isBeanCountingQuestion,
        name: 'char',
        message: 'Enter a char',
        initial: 'B',
        validate: input => input.length === 1
    }
    
  ];
  
(async () => {
    const response = await prompts(questions);
  
    switch (response.exercise) {
        case 1:
            const whatsMinimun = response.minimun;
            console.log(chalk.bgGreen(Minimum(...whatsMinimun)));
            break;
        case 2:
            const number = response.isEven;
            console.log(chalk.bgGreen(isEven(number)));
            break;
        case 3:
            const phrase = response.stringText;
            const char = response.char;
            console.log(chalk.bgGreen(CountChar(phrase, char)));
            break;
        default:
            break;
    }
})();