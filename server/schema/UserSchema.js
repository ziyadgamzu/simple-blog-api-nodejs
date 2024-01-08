const mongoose =  require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    userName : {
        type : String,
    },

    passward : {
        type : String,
    },

    email : {
        type : String,
    },

    phone : {
        type : String,
    },

})


module.exports = UserSchema;


