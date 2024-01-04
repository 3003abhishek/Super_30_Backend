const express = require("express");

const app = express();

app.get("/" , (req,res)=>{
    res.send("Welcome to the home page");
});

app.post("/addsomething" , (req,res)=>{
    res.send("You can post something now");
})




app.listen(8080 , ()=>{
    console.log("The app is running on port 8080");
})