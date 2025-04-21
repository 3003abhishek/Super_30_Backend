const loginUser = async (req,res) => {
    const User = require('../models/user.model');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    try {
        const {email,password} = req.body ; 
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"Invalid email id"}) 
         }
         const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({message:"Invalid password"})
            }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"1h"
        });
        res.status(200).json({
            message:"Login successful",
            token,
            user:{
                id:user._id,
                email:user.email,
                role:user.role
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports = { loginUser };