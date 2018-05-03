var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
  website: String
});

var User = mongoose.model("User", userSchema);

//Make available to be required in my other files.
module.exports = User;
