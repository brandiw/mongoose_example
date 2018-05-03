var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  title: String
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
