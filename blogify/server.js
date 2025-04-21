
const mongoose = require("mongoose");
const app = require("./app");

const cors = require("cors");
 mongoose.connect("mongodb://127.0.0.1:27017/blogs").then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3001, ()=>{
        console.log("Server is running on port 3001");
    })
 })

 
