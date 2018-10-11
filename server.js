//Dependencies
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// Define API routes here
import routes from './routes/api/something';
app.use(routes);

//set port for local and heroku
const PORT = process.env.PORT || 3001;

//set up express server
const app = express();

//set up dotenv for use
require('dotenv').config();

//Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Server up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));  
});

app.listen(PORT, () => {
    console.log(`ðŸŒŽ ==> Server now on port ${PORT}!`);
})