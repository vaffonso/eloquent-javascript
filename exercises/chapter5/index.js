const MyOwnLoop = require('./MyOwnLoop')();
const Everything = require('./Everything')();
const DominantWritingDirection = require('./DominantWritingDirection');

MyOwnLoop.forLoop(10, (v) => v <= 20, (u) => u + 2, console.log);
// MyOwnLoop.recursiveLoop(10, (v) => v <= 20, (u) => u + 2, console.log);

console.log(Everything.everythingLoop([2,4,6,8], (n) => n%2 === 0 ));
console.log(Everything.everythingSome([2,4,6,8], (n) => n%2 === 0 ));

console.log({'dominant direction': DominantWritingDirection('Hey, مساء الخير')});
