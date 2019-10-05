const SpotModel = require("../models/Spot");

module.exports = {
  async show(req, res) {
    try {
      const { user } = req.headers;
      if (!user) {
        throw new Error("header user é obrigatório");
      }
      const spots = await SpotModel.find({ user });
      return res.json({ spots });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
};
