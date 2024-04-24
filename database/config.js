const mongoose = require("mongoose");
const mongoDB = mongoose
  .connect("mongodb://localhost:27017/Voting-DApp")
  .then(() => {
    console.log(`MongoDB Connected :`);
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoDB;
