const forLoop = (value, test, update, body) => {

    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}

const recursiveLoop = (value, test, update, body) => {
    if (test(value)) {
        body(value);
        return recursiveLoop(update(value), test, update, body);
    } else {
        return value;
    }
}

const myOwnLoop = () => {

    return {forLoop, recursiveLoop};
}

module.exports = myOwnLoop;