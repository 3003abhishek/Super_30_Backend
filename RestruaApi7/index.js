const express = require("express");
const fs = require("fs") ;

const app = express();

let restuarants = JSON.parse(fs.readFileSync(`${__dirname}/data/restrauData.json`));

app.get("/api/v1/restuarants" , (req,res) =>{
    res.status(200).json({
        status : 200,
        results : restuarants.length,
        data : restuarants
        
    })
})


app.listen(8080, ()=>{
    console.log("The port is running at 8080");
})