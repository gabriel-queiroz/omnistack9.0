const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

SpotModel = mongoose.model("Spot", SpotSchema);

module.exports = SpotModel;
