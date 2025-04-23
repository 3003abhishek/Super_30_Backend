const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type : String ,
        required: [true, 'Name is required']
    },
    email : {
        type : String , 
        required : [true, 'Email is required'],
        unique: true,
        lowercase: true,
    },
    password : {
        type : String , 
        required : [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    role : {
        type : String , 
        enum : ['student', 'admin'],
        default: 'student'
    }
},{timestamps: true});

userSchema.pre('save', async function(next) {
   if(!this.isModified('password')){
    return next() ; 
   }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);    




