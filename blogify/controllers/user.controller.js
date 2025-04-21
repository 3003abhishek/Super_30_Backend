const User = require('../models/user.model');

const createUser  = async (req, res) => {
    try{
        const user  = await User.create(req.body);
        res.status(201).json(user);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user' });
    }

}

module.exports = {createUser};