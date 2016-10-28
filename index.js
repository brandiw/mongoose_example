//Requiring the modules we need
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/user");
var app = express();

//Use and Set statements
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//Connect mongoose:
//Note: this DB will be created if it doesn't exist - careful!
mongoose.connect("mongodb://localhost/family-tree");

//Routes
app.get("/", function(req, res){
  res.render("index");
});

//Include controllers
app.use("/users", require("./controllers/users"));
app.use("/books", require("./controllers/books"));

//Listen on port 3000
app.listen(process.env.PORT || 3000);