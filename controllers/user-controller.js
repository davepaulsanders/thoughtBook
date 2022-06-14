const User = require("../models/User");

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .sort({ _id: -1 })
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400).json(err);
      });
  },
  createUser({ body }, res) {
    User.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400).json(err);
      });
  },
};

module.exports = userController;
