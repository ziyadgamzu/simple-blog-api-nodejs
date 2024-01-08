const mongoose =  require('mongoose');
const UserSchema = require('../schema/UserSchema');


const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;