const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, default: []},
  description: { type: String },
  thumbnail: { type: String },
  infoLink:{ type: String },
  date: { type: Date, default: Date.now }
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books  ;
