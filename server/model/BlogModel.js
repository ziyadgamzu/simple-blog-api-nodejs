const mongoose =  require('mongoose');
const BlogSchema = require('../schema/BlogSchema');


const BlogModel = mongoose.model("Posts", BlogSchema);

module.exports = BlogModel;