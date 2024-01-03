const  fs = require('fs');
const http = require("http") ;

const server = http.createServer((req,res)=>{
    let {url, method} = req ; 
    // url = url.split("/");
    console.log(url);
    if(url =="/"){
        const readable = fs.createReadStream("./textfile.txt");
        readable.pipe(res);

    }
    else{
        res.end("This is not the right page you are looking for ");
    }
});



server.listen(4000, ()=>{
    console.log("The port is running on port 4000") ;
}) ;




