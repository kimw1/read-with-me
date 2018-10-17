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
    app.use(express.static("client/build"));
}

//connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/readwithmeDB")

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
})