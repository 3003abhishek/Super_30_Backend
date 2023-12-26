const fs = require("fs");

const text = fs.readFileSync("./textfile.txt" , "utf-8");

const note = " Dhui kla maksudai" ;
fs.writeFileSync("./write.txt",note);
console.log(text);
let name = "gandhi" ;

console.log(name);