const UserModel = require("../models/User");

module.exports = {
  async show(req, res) {
    try {
      const users = await UserModel.find({});
      return res.json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async store(req, res) {
    try {
      const { email } = req.body;
      const user = await UserModel.create({ email });
      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};
