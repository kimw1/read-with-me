
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
  app.use(express.static("client/public"));
}

// Define API routes here
const routes = require('./routes');
app.use(routes);

// Database configuration with mongoose
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/readwithmeDB", { useNewUrlParser: true });
// Database configuration with mongoose
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB", { useNewUrlParser: true })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

























// //set up dotenv for use
// // require('dotenv').config();


// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");


// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// // const inputText = require('./routes/api/inputText');

// const app = express();

// //Define middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // DB Config 
// const db = require('./config/keys').mongoURI

// // Connect to MongoDB with mLab
// mongoose
// .connect(db)
// .then(() => console.log('MongoDB Connected using mLab'))
// .catch(err => console.log(err));

// // Define API routes here
// // const routes = require('./routes');


// // // Set up routes
// // app.use(routes);

// // //Serve up static assets
// // if (process.env.NODE_ENV === "production") {
// //     app.use(express.static("client/public"));
// // }


// // //connect to Mongo DB
// // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB")

// // Passport middleware
app.use(passport.initialize());

// // Passport Config
require('./config/passport')(passport);


// app.use('/api/users', users);


// //set port for local and heroku
// const PORT = process.env.PORT || 3001;



// app.listen(PORT, () => {
//     console.log(`🌎 ==> Server now on port ${PORT}!`);
// })
