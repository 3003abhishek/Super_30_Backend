const Post = require("../models/post.model");

const createPost = async (req,res) => {
    try {
     const post = await Post.create(req.body);
       res.status(201).json(post);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Error creating post"});
    }
}

module.exports = {createPost};