const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connect to the db before tests run 
before(function(done) {
    mongoose.connect("mongodb://localhost/testaroo");
    
    mongoose.connection
      .once("open", function() {
        console.log("Connection has been made, now make fireworks...");
        done();
      })
      .on("error", function(error) {
        console.log("Connection error: ", error);
      });    
});

// beforeEach(function(done) {
//     mongoose.connection.collections.users.drop(function() {
//         done();
//     })
// })

