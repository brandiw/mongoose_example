var express = require("express");
var router = express.Router();

//Remember - all these routes are relative to /users already!
//Show all users
router.get("/", function(req, res){
  //Find all the users
});

//Add one user with the given info
router.post("/", function(req, res){
  //Create and save a user at the same time
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

});

router.put("/:id", function(req, res){
  //Update a user
});

//Make it so other stuff can require this
module.exports = router;
