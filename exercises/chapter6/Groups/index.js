const IterableGroup = require('../IterableGroups');

class Group {
    constructor() {
        this.group = [];
    }

    has(value) {
        // return this.group.indexOf(value) >= 0 ? true : false;
        return this.group.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        // if (this.has(value)) {
        //     const index = this.group.indexOf(value);
        //     this.group.splice(index, 1);
        // }
        this.group = this.group.filter( item => item !== value);
    }

    [Symbol.iterator]() {
        return new IterableGroup(this);
    }

    static from(iterable) {
        const group = new Group();
        for ( let i of iterable) {
            group.add(i);
        }
        return group;
    }
}

module.exports = Group;