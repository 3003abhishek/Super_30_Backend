const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const users = require("./memory.js");

const app = express() ; 

const port = 3000; 

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to Rest api")
});

//get all users

app.get("/users", (req,res)=>{
    res.json(users).prettyPrint();
})
app.post("/users", (req,res)=>{
    const newUser = {
        id: users.length+1,
        name : req.body.name, 
        email:req.body.email,
    }
    users.push(newUser);
    res.status(201).json(newUser);
}
);

app.

app.listen(port, ()=>{
    console.log("listening on the port");
})