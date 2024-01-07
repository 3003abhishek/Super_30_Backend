const express = require("express");
const fs = require("fs") ;

const app = express();
app.use(express.json());

let data = JSON.parse(fs.readFileSync(`${__dirname}/data/restrauData.json`));
// console.log(data);

app.get("/api/v1/restuarants" , (req,res) =>{
    res.status(200).json({
        status : 200,
        results : data.restaurants.length,
        data 
        
    })
});


app.post("/api/v1/restuarants" , (req,res) => {

    let new_restuarant = req.body;
    console.log(new_restuarant);
    data.restaurants.push(new_restuarant);
    console.log(data);
     fs.writeFile(`${__dirname}/data/restrauData.json` , JSON.stringify(data) , err =>{
        res.status(201).json({
            status: 201 ,
            data : new_restuarant
        })
     })
    });


    


app.listen(8080, ()=>{
    console.log("The port is running at 8080");
})