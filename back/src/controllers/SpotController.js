const SpotModel = require("../models/Spot");

module.exports = {
  async index(req, res) {
    try {
      const { tech } = req.query;
      const filter = !tech ? {} : { techs: tech };
      const spots = await SpotModel.find(filter);
      return res.json(spots);
    } catch (error) {
      return res.status(400).json(spots);
    }
  },
  async store(req, res) {
    const { body } = req;
    const { user } = req.headers;
    try {
      const spot = await SpotModel.create({
        ...body,
        techs: [...body.techs.split(",").map(tech => tech.trim())],
        thumbnail: req.file.filename,
        user
      });
      return res.json(spot);
    } catch (error) {
      res.status(400).json({ error: error.errmsg });
    }
  }
};
