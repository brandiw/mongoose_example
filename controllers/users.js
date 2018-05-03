var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Book = require("../models/book");

//Remember - all these routes are relative to /users already!
//Show all users
router.get("/", function(req, res){
  //Find all the users

  // // With callback
  // User.find({}, function(err, users){
  //   if(err){
  //     res.render("404");
  //   }
  //   else {
  //     res.render("users", {users: users});
  //   }
  // });

  // Or with promise
  User.find({})
  .then(function(users){
    console.log('this is .then (aka success)');
    res.render("users", {users: users});
  })
  .catch(function(err){
    console.log('ruh roh');
    res.render("404");
  });
});

//Add one user with the given info
router.post("/", function(req, res){
  //Create and save a user at the same time
  console.log(req.body);
  User.create(req.body, function(err, user){
    if(err){
      return console.log(err);
    }
    if(req.body.book){
      //Book title was provided, make book
      Book.create({ title: req.body.book, author: user._id }, function(err, book){
        res.redirect("/users");
      });
    }
    else{ //No book title, don't create book
      res.redirect("/users");
    }
  });
});

//Render an edit form
router.get("/edit/:id", function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      return console.log(err);
    }
    res.render("editForm", {user: user});
  });
});

//Get the info about one specific user
router.get("/:id", function(req, res){
  //Show me their contact info by using the contactInfo() function in the model
});

//Delete one user by the id provided
router.delete("/:id", function(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user){
    if(err){
      return console.log(err);
    }
    res.send("success");
  });
});

router.put("/:id", function(req, res){
  //Update a user
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
    if(err){
      return console.log(err);
    }
    res.send("success");
  });
});

//Make it so other stuff can require this
module.exports = router;
