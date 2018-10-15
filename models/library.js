const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  title: { type: String, required: true },
  author: String,
  synopsis: String,
});

const Item = mongoose.model("Item", librarySchema);

module.exports = Item;