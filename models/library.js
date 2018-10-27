const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  text: { type: String, required: true },
  url: { type: String } 
});

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;