const assert = require('assert');
const User = require('../models/User');
// Describe tests
describe('Saving records', function() {
// Create tests
    it('Saves a record to the database', function(done) {

        var char = new User({
            name: 'Adam', 
            email: 'adam@test.com',
            password: '123456', 
        });
        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

    it('adds two numbers together', function() {
        assert(2 + 3 === 5);
    })
});