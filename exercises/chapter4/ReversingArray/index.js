'use strict';

const reverseArray = (list) => {

    const reverseList = [];
    for (let item of list) {
        reverseList.unshift(item);
    }

    return reverseList;
}

const reverseArrayInPlace = (list) => {

    const listLength = list.length;
    if (listLength < 2) {
        return list;
    }

    let i = 0;
    while (i < Math.floor(listLength/2)) {
        const curr = list[i];
        const opositeIndex = listLength - (1 + i);

        list[i] = list[opositeIndex];
        list[opositeIndex] = curr;
        i++;
    }

    return;
}

module.exports = { reverseArray, reverseArrayInPlace };
