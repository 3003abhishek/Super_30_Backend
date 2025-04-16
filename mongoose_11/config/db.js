
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mydatabase';
const connectMongo = async () =>{
     try{
       await  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
       console.log('MongoDB connected');    
        
     }
     catch(err){
        console.log("mongodb connection error", err);
        process.exit(1);
     }
}

module.exports = connectMongo;

