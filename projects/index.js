const chalk = require('chalk');
const prompts = require('prompts');

const robot = require('./ARobot');

console.log(chalk.yellowBright('Projects ✍️ 📐'));

const robots = Object.keys(robot.robots).map(key => ({
  title: key,
  value: key,
}));

const questions = [
  {
    type: 'select',
    name: 'project',
    message: 'Pick an project',
    choices: [{ title: 'Robot', description: 'Project 1 - A Robot', value: 1 }],
    initial: 0,
  },
  {
    type: prev => (prev === 1 ? 'multiselect' : null),
    name: 'robots',
    message: 'Pick robots',
    choices: robots,
    max: 2,
    min: 2,
    hint: '- Space to select. Return to submit',
  },
];

(async () => {
  const response = await prompts(questions);

  switch (response.project) {
    case 1:
      robot.compareRobots(response.robots);
      break;
    default:
      break;
  }
})();
