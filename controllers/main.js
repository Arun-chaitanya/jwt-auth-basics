const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  console.log(username, password);
  return res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  return res.status(200).json({
    msg: `Hello ${username}`,
    secret: `Here is your lucky number: ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
