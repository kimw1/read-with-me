//set up dotenv for use
require('dotenv').config();

//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Define API routes here
const routes = require('./routes');

//set port for local and heroku
const PORT = process.env.PORT || 3001;

//set up express server
const app = express();
app.use(routes);

//Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}

// Database configuration with mongoose
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// test mlab connection
mongoose.connect("mongodb://");

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
})