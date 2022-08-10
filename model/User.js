const mongoose = require("mongoose");
const ROLES_LIST = require("../config/roles_list");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      default: ROLES_LIST.User,
   },
   password: {
      type: String,
      required: true,
   },
   email: {
      type: String,
   },
   refreshToken: [String],
});

module.exports = mongoose.model("User", userSchema);
