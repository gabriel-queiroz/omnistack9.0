const BookingModel = require("../models/Booking");

module.exports = {
  async store(req, res) {
    try {
      const { user } = req.headers;
      const { spotId } = req.params;
      const { date } = req.body;
      if (!user || !spotId || !date) {
        throw new Error("user, postID ou date não foi enviado corretamente");
      }
      const booking = await BookingModel.create({ user, spot: spotId, date });
      await booking
        .populate("spot")
        .populate("user")
        .execPopulate();
      return res.send({ booking });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
};
