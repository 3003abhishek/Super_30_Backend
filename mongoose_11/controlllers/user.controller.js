const  User = require("../models/user.model");

exports.createUser = async (req, res) => {
    try {
        const user = User.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

exports.getAllUsers = async (req,res) => {
    const users = await User.find() ; 
    res.json(users);
    console.log(users);
}