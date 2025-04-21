const Comment = require("../models/comment.model");

const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    }
    catch (error){
        console.log(error);
        res.status(500).json({message:"Error creating comment"});
    }

}

module.exports = {createComment} ; 