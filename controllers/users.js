var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Book = require("../models/book");

//Remember - all these routes are relative to /users already!
//Show all users
router.get("/", function(req, res){
  //Find all the users
  User.find({}, function(err, users) {
    if (err) {
      return res.send(err);
    }
    res.render("users", {users: users});
  });
});

//Add one user with the given info
router.post("/", function(req, res){
  //Create and save a user at the same time
  User.create(req.body, function(error, user) {
    if (error) {
      return console.log(error);
    }
    console.log(user);
    Book.create({ title: req.body.book, author: user._id }, function(err, book) {
      res.redirect("/users");
    });
  });
});

//Render an edit form
router.get("/edit/:id", function(req, res){
  res.render("editForm");
});

//Get the info about one specific user
router.get("/:id", function(req, res){
  //Show me their contact info by using the contactInfo() function in the model
});

//Delete one user by the id provided
router.delete("/:id", function(req, res){
  User.findByIdAndRemove(req.params.id, function(error, user){
    if (error){
      return console.log(error);
    }
    res.status(200).send("User was deleted");
  });
});

router.put("/:id", function(req, res){
  //Update a user
});

//Make it so other stuff can require this
module.exports = router;
