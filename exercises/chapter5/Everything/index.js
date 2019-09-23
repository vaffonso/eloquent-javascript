'use strict';

const everythingLoop = (array, predicate) => {

    for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            return false;
        }
    }
    return true;
}

const everythingSome = (array, predicate) => {

    return !array.some(value => !predicate(value))
}

const Everything = () => {
    return {everythingLoop, everythingSome}
}

module.exports = Everything;