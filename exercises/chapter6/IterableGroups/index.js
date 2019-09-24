'use strict';

class IterableGroup {
    constructor(group) {
        this.pointer = 0;
        this.group = group;
    }

    next() {
        if (this.pointer === (this.group.group.length)) {
            return {done: true};
        }

        let value = this.group.group[this.pointer];
        this.pointer++;

        return {value, done: false};
    }

}

module.exports = IterableGroup;