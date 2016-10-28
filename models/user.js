var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true},
  meta: {
    age: Number,
    website: String
  }
});

userSchema.methods.contactInfo = function() {
  return this.name + " can be reached at " + this.email;
};

var User = mongoose.model("User", userSchema);

module.exports = User;
