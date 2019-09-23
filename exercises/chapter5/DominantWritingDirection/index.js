'use strict';

const SCRIPTS = require('./scripts');

const getScriptGroupName = (code) => {

    for (let script of SCRIPTS) {
        if (script.ranges.some( ([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return {name: 'none', direction: 'none'};
}

const countBy = (text, scriptGroupName) => {

    const counter = [];
    for (let code of text) {
        let scriptGroup = scriptGroupName(code.codePointAt(0));

        let found = counter.find( item => item.name === scriptGroup.name );

        if (found) {
            found.count++;
        } else {
            counter.push({name: scriptGroup.name, direction: scriptGroup.direction, count: 1});
        }
    }

    return counter;
}

const DominantWritingDirection = (string) => {

    const counter = countBy(string, getScriptGroupName);

    // counter.sort( (a, b) => {
    //     return a.count - b.count;
    // }).reverse();
    // const dominant = counter.shift();

    if (!counter.length) {
        return 'ltr';
    }

    const dominant = counter.reduce( (a,b) => a.count > b.count ? a : b);

    return dominant.direction;    
}

module.exports = DominantWritingDirection;