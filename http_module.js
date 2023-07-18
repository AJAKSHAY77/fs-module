// 

const ser = require("http")

const server = ser.createServer(function(req,res){
    if(req){
       res.write("hello world")
    }
    res.end()
})
server.listen(5001)
console.log("server completed");