const file = require("fs")

console.log("start reading");

file.readFile("input.txt",function(err,data){
    if(err){
       const  err = "invalid input"
        console.log("error",err);
        return err
    }
     console.log("data",data.toString());
     return data
    

})
console.log("other stuff");

const readfile = file.readFileSync("input.txt")
console.log(readfile.toString());
console.log("other staff");