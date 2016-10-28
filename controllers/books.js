var express = require("express");
var router = express.Router();

//Remember - all these routes are relative to /books already!
//Show all books
router.get("/", function(req, res){
  //Find all the users
});

router.get("/author", function(req, res){
  //Find books plus authors
});

module.exports = router;
