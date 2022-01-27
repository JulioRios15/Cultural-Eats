const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  usrId: String,
  idMeal: String,
  recipieThumb: String,
  recipieName: String,
});

module.exports = mongoose.model("UserModel", userSchema);