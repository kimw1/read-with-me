const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  title: String,
  author: String,
  synopsis: String,
});

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;