const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url).then(() => console.log("Connected to MONGODB"));
};

module.exports = connectDB;
