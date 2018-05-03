//Requiring the modules we need
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayout = require("express-ejs-layouts");
var mongoose = require("mongoose");
var app = express();

//Use and Set statements
app.set("view engine", "ejs");
app.use(ejsLayout);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//Connect mongoose:
//Be careful here - anything you put as your DB name will be created!
mongoose.connect("mongodb://localhost/library");

//Routes
app.get("/", function(req, res){
  res.render("index");
});

//Include controllers
app.use("/users", require("./controllers/users"));
app.use("/books", require("./controllers/books"));

//Listen on port 3000
app.listen(process.env.PORT || 3000);
