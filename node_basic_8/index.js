    const http = require("http");
    http.createServer((request,responce)=>{
        responce.write("Hello World");
        responce.end() ; 
    }).listen(3001);
    console.log("Server started at 3001")