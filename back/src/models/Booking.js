const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  spot: {
    type: mongoose.Types.ObjectId,
    ref: "Spot"
  }
});

BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
