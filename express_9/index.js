const express  = require("express");

const app = express() ; 

app.get("/",(req,res)=>{
  res.send("Welcome to express");
});

app.get("/about",(req,res)=>{
    res.send("This is the about page");

})

const logger = (req,res,next)=>{
   console.log("Welcome Gandhi to Express");
   next() ; 
}
app.use(logger);

app.get('/user/:userId',(req,res)=>{
   res.send(`Welcome user with userId ${req.params.userId}`);
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})