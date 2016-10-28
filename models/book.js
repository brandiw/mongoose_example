var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
