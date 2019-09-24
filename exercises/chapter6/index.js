const IterableGroup = require('./Groups');

let iterableGroup = IterableGroup.from(["a", "b", "c"]);
for (let value of iterableGroup) {
    console.log(value);
}