
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const passport = require('passport');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
 if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB

// mongoose.connection.once('open', function() {
//   console.log('Connection has been made, now make fireworks...');
// }).on('error', function(error) {
//   console.log('Connection error: ', error);
// })

// Define API routes here
const routes = require('./routes');
app.use(routes);

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB", { useNewUrlParser: true });


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// // Passport middleware
app.use(passport.initialize());

// // Passport Config
require('./config/passport')(passport);

const usersRoutes = require('./routes/api/users');


// Use Routes
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



