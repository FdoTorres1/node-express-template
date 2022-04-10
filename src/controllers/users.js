const db = require("../db/models");
const User = db.sequelize.models.user;

exports.allUsers = async (req, res) => {
  User.create({ name: "Fernando", email: "fernando@mail.com"})
  const users = await User.findAll();
  res.status(200).json(users);
};