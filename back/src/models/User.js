const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  }
});

userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
