var express = require("express");
var router = express.Router();
var Book = require("../models/book");

//Remember - all these routes are relative to /books already!
//Show all books
router.get("/", function(req, res){
  //Find all the users
  Book.find({}, function(err, books) {
    if (err) {
      return res.send(err);
    }
    res.send(books);
  });
});

router.get("/author", function(req, res){
  Book.find()
  .populate('author')
  .exec(function(err, books) {
    res.send(books);
  });
});

module.exports = router;
