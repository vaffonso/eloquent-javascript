const chalk = require('chalk');
const prompts = require('prompts');

console.log(chalk.yellowBright('Testing prompt package 🧪'));

const questions = [
  {
    type: 'select',
    name: 'anumber',
    message: 'Choose',
    choices: [
      { title: '1st', value: 1 },
      { title: '2nd', value: 2 },
    ],
    initial: 0,
  },
  {
    type: (prev, values, prompt) =>
      prompt.name === 'anumber' ? 'number' : null,
    name: '2ndQuestion',
    message: 'second question',
  },
];

(async () => {
  const response = await prompts(questions);

  switch (response.anumber) {
    case 1:
      console.log('select 1');
      console.log(response);

      break;
    case 2:
      console.log('select 2');
      console.log(response);

      break;
    default:
      break;
  }
})();
