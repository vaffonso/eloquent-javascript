'use strict';

/**
 * console.log(sum(range(1, 10)));
 * 
 */

/**
 * Create a range list with a specified pace/step
 * @param {*} start 
 * @param {*} end 
 * @param {*} step 
 */
const range = (start, end, step = 1) => {
    const list = [];

    step = Number(step);
    start = Number(start);
    end = Number(end);
    if (step === 0 || start === end) {
        return list;
    }

    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }

    for (let i = start; i <= end; i = i + Math.abs(step)){
        if (step > 0) {
            list.push(i);
        } else {
            list.unshift(i);
        }
    }

    return list;
}

/**
 * Sum all items in list
 * @param {*} list 
 */
const sum = (list) => {

    const total = list.reduce((acc, cur) => {
        return cur+acc
    }, 0)

    // for (let number of list) {
    //     total += number;
    // }

    return total;
}

module.exports = { range, sum };