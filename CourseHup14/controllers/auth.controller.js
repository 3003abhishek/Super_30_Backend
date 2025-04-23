const User = require('../models/user.model');
const generateToken = require('../utils/generateTokens');


const Register = async(req,res) => {
    let {username,email,password} = req.body ; 
    try {
        let userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({message : "user already exists"});
        }

        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created Successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                token : generateToken(user),
            }
          
        })
    }
    catch(err){
       res.status(500).json({message: "Internal server error"});
    }
}

const Login = async(req,res) => {
    const {email,password} = req.body ; 
    console.log(email,password);
    try {
        console.log("Login called");
        const user = await User.findOne({email});
        console.log(user)
        if(!user || !(await user.matchPassword(password))){
            console.log("Invalid email or password");
            return res.status(401).json({message : "Invalid email or password"});
        }
        console.log("Login successful");
        res.status(200).json({
            message : "Login successful",
            user : {
                id: user._id , 
                name : user.name ,
                email: user.email,
                token : generateToken(user)
            }
        })

    }
    catch(err) {
        res.status(500).json({message: "kuch to bat he bhai  server error"});
    }
}

module.exports = {
    Register,
    Login
}; 