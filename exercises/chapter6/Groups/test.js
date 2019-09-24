const assert = require('assert');
const Group = require('./index');

describe('Test Group class', function(){

    it('Test add, delete and has methods', function(){
        
        let group = Group.from([10, 20]);
        assert.equal(group.has(10), true);
        assert.equal(group.has(30), false);

        group.add(10);
        group.delete(10);

        assert.equal(group.has(10), false);
    })

    
})