const mongoose =  require('mongoose');
const schema = mongoose.Schema;

const BlogSchema = new schema({
    title : {
        type : String,
    },

    body : {
        type : String,
    },

    image : {
        type : String,
    },

    createdBy : {
        type : String,
    },

    date : {
        type : Date,
    },

})


module.exports = BlogSchema;