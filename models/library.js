const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  Text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  VoiceId: {
    type: String,
    required: true
}
});

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;