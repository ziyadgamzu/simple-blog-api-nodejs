const BlogModel = require('../model/BlogModel');


//create post
exports.create = async (req, res) => {

    try {
        const title = req.body.title;
        const body = req.body.body;
        const image = req.body.image;
        const userId = req.body.userId;
    
        if(!title || !body || !image || !userId){
            return res.json({
                msg : "Please insert required Data",
                state : 0,
                data : [],
            })
        }
        await BlogModel.create({
            title : title,
            body : body,
            image : image,
            createdBy : userId,
            date : new Date(),
        }).then((data)=>{
            res.json({
                msg : "Post Created Successfully",
                state : 0,
                data : data,
            })
        }).catch((err)=>{
            console.log(err);
            res.json({
                msg : "internal server error",
                state : 0,
                data : [],
            })
        })
    } catch (err) {
        console.log(err)
        res.json({
            msg : "internal server error",
            state : 0,
            data : [],
        })
    }
}

// update Post
exports.update = async (req, res) => {

    try {
        await BlogModel.findByIdAndUpdate(req.params.userId, {
            title : req.body.title,
            body : req.body.body,
            image : req.body.image,
        }).then(()=>{
            res.json({
                msg : "Post Updated",
                state : 1,
                data : [],
            })
        }).catch((err)=>{
            console.log(err)
            res.json({
                msg : "internal server error",
                state : 0,
                data : [],
            })
        })

    } catch (error) {
        console.log(err)
        res.json({
            msg : "internal server error",
            state : 0,
            data : [],
        })
    }
}

// delete Post
exports.delete = async (req, res) => {
    try {
        await BlogModel.findByIdAndDelete(req.params.userId).then(()=>{
            res.json({
                msg : "Post deleted",
                state : 1,
                data : [],
            })
        }).catch((err)=>{
            console.log(err)
            res.json({
                msg : "internal server error",
                state : 0,
                data : [],
            })
        })

    } catch (error) {
        console.log(err)
        res.json({
            msg : "internal server error",
            state : 0,
            data : [],
        })
    }
}

// get all Posts
exports.getAll = async (req, res) => {
    try {
        const posts = await BlogModel.find();
        if(posts){
            return res.json({
                msg : "Posts Imported Successfully",
                state : 1,
                data : posts,
            })
        }

        res.json({
            msg : "can't find any Posts!",
            state : 0,
            data : [],
        })

    } catch (err) {
        console.log(err)
        res.json({
            msg : "internal server error",
            state : 0,
            data : [],
        })
    }
    
}

// get Post by UserId
exports.getById = async (req, res) => {
    try {
        const post = await BlogModel.findById(req.params.userId);
        if(post){
            return res.json({
                msg : "Post Found Successfully",
                state : 1,
                data : post,
            })
        }

        res.json({
            msg : "can't find Post!",
            state : 0,
            data : [],
        })

    } catch (err) {
        console.log(err)
        res.json({
            msg : "internal server error",
            state : 0,
            data : [],
        })
    }
}