const { compareRobots, robots } = require('./robot.js');

exports.main = () => {
  console.log('hey');
};

exports.robots = robots;

exports.compareRobots = robotsName => {
  if (robotsName.length === 2) {
    const robot1 = robots[robotsName[0]];
    const robot2 = robots[robotsName[1]];

    compareRobots(robot1, robot2, 5);
  } else {
    throw Error('Method requires exact 2 values in array as parameter');
  }
};
