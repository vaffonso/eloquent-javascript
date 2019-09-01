const chalk = require('chalk');
const prompts = require('prompts');

const {arrayToList, listToArray} = require('./AList');
const {deepEqual} = require('./DeepComparison');
const {reverseArray, reverseArrayInPlace} = require('./ReversingArray');
const {range, sum} = require('./SumOfRange');

// console.log(chalk.redBright('Under construction 🚧 👷‍♂️'));
console.log(chalk.yellowBright('Chapter 4 Exercises 🗂'));

const testJSON = (text) => { 
    if (typeof text !== "string") { 
        return false; 
    } 
    try { 
        JSON.parse(text); 
        return true; 
    } catch (error) { 
        return false; 
    } 
} 

const questions = [
    {
        type: 'select',
        name: 'exercise',
        message: 'Pick an exercise',
        choices: [          
            { title: 'SumRange', description: 'Exercise 1 - Reverse Array In Place', value: 1 },
            { title: 'ReversingArray', description: 'Exercise 2 - Reverse Array', value: 2 },
            { title: 'ArrayToList', description: 'Exercise 3 - Array To List', value: 3 },
            { title: 'DeepComparison', description: 'Exercise 4 - Deep comparison', value: 4 },
        ],
        initial: 0
    },
    {
        type: prev => prev == 1 ? 'list' : null,
        name: 'sumrange',
        message: 'Enter minimum and max number',
        initial: '1,19',
        separator: ','
    },
    {
        type: prev => prev == 2 ? 'list' : null,
        name: 'reversedArray',
        message: 'Enter list of items',
        initial: 'A,B,C,3,G,Z',
        separator: ','
    },
    {
        type: prev => prev == 3 ? 'list' : null,
        name: 'arrayToList',
        message: 'Enter list of items',
        initial: '1,2,3,4,Y,Z',
        separator: ','
    },
    {
        type: prev => prev == 4 ? 'text' : null,
        name: 'deepComparison1',
        message: 'Enter 1st element:',
        initial: "{a: 'a'}"
    },
    {
        type: (prev, values, prompt) => prompt.name == 'deepComparison1' ? 'text' : null,
        name: 'deepComparison2',
        message: 'Enter 2nd element:',
        initial: "{a: 'a'}"
    }
    
  ];
  
(async () => {
    const response = await prompts(questions);
  
    switch (response.exercise) {
        case 1:
            const arrayOfMinMax = response.sumrange;
            console.log(chalk.bgGreen(sum(range(...arrayOfMinMax))));
            break;
        case 2:
            const array = response.reversedArray;
            reverseArrayInPlace(array);
            console.log(chalk.bgGreen(array));
            break;
        case 3:
            const initialArray = response.arrayToList;
            const list = arrayToList(initialArray)
            console.log(chalk.bgGreen(JSON.stringify(list, null, 4)));
            break;
        case 4: 
            const obj1 = testJSON(response.deepComparison1) ? JSON.parse(response.deepComparison1) : response.deepComparison1;
            const obj2 = testJSON(response.deepComparison2) ? JSON.parse(response.deepComparison2) : response.deepComparison2;

            console.log(chalk.bgGreen(deepEqual(obj1, obj2)));
            break;
        default:
            break;
    }
})();