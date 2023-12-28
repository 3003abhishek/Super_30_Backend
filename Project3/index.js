const fs = require("fs");

const text = fs.readFile("./textfile.txt" , "utf-8", (err , data)=>{
    try {
        console.log(`./${data}.txt`);
        fs.readFile(`./${data}.txt` , "utf-8" , (err , data)=>{

            if(err){
            console.log(err.message);
            }
            
            fs.writeFile("./final.txt" , data , (err )=>{
                console.log({data});
                if(err) {
                    console.log(err);
                }
                console.log ("I am trying to write some file ");
            }) ;
            
        })

    }
    catch (err) {
        console.log(err);
    }
});



