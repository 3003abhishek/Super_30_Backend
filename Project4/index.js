const http = require("http");

const server = http.createServer((req,res)=>{
   let  {url, method} = req ; 
   url = url.split("/");
//    console.log(url);
   if(url[1]=="about"){
   let id = url[2];
   console.log(url[1],id);
    if(id ==1){
        res.end("This page is about Abhishek");
    }
    else if ( id ==2){
        res.end ("This page is about Aljith");
    }
    else{
        res.end("This is just an about page");
    }
   }

   else if(url[1] =="career"){
    res.end("This is the career page ") ;
   }
   
   else {
    res.end("The server is starting on port 8080");
   }
    
});


server.listen (8080 , ()=>{
    console.log("The port is running on port 8080");
})

