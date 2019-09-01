'use strict';

const deepEqual = (value1, value2) => {

    if (typeof value1 !== 'object' && typeof value2 !== 'object') {
        // console.log({msg: 'none are object', value1, value2});
        return value1 == value2;
    } else {
        const obj1Keys = Object.keys(value1);
        const obj2Keys = Object.keys(value2);

        if (obj1Keys.length != obj2Keys.length) {
            // console.log({msg: 'keys length don\'t match', obj1Keys, obj2Keys});
            return false;
        }

        let equal = true;
        for (let key of obj1Keys) {
            if (!deepEqual(value1[key], value2[key])) {
                // console.log({msg: `property is not equal for key ${key}`, value1: value1[key], value2: value2[key]});
                equal = false;
                break;
            }
        }

        return equal;
    }

}

module.exports = { deepEqual }