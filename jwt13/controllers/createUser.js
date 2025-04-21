const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const createUser = async (req, res) => {
    try {
     const user = req.body ; 
     const {username,email,password,role} = user ; 
     const hashedPassword = await bcrypt.hash(password, 10);
      User.create({
        username,
        email,
        password: hashedPassword,
        role
      });
      res.status(201).json({message : "User created successfully"});
      
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { createUser };