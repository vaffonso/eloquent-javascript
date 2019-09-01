'use strict';

const arrayToList = (array) => {

    return buildListItem(array, 0);
    
}

const listToArray = (list) => {

    return fetchValueInList(list, 'value', 'rest');
}

const fetchValueInList = (list, key, rest) => {

    const value = list[key];
    const remainder = (list[rest] != null ? fetchValueInList(list[rest], key, rest) : null);

    let array = [].concat(value);
    
    if (remainder) {
        array = array.concat(remainder);
    }

    return array;
}

const buildListItem = (array, index) => {
    return {
        value: array[index],
        rest: (array[index+1] == null ? null : buildListItem(array, index+1))
    }

}

module.exports = { arrayToList, listToArray};