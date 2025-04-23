const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({id:user._id , role : user.role},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
}

const generateAccessToken = (user) => {
    return jwt.sign({id : user._id, role : user.role}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRES_IN});
}
const generateRefreshToken = (user) => {
    return jwt.sign({id : user._id, role : user.role}, process.env.REFRESH_TOKEN_SECRET, {expiresIn : process.env.REFRESH_EXPIRES_IN});
}

module.exports = {generateToken,generateAccessToken,generateRefreshToken};