//set up dotenv for use
//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./keys.js");

//import { Polly } from 'aws-sdk';

// Define API routes here
//const routes = require('./routes/api/something');


//import { polly as _polly } from "./keys";

require('dotenv').config();


//set port for local and heroku
const PORT = process.env.PORT || 3001;

//set up express server
const app = express();
//app.use(routes);

//Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//connect to Mongo DB
//connect(process.env.MONGODB_URI || "mongodb://localhost/reactourdb")

app.listen(PORT, () => {
    console.log(`ðŸŒŽ ==> Server now on port ${PORT}!`);
})