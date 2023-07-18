const system = require("os")
// console.log(`the architecture of system is : ${system.arch()}`);

// console.log(`the total memory of system is : ${system.totalmem()}`);

// console.log(`the freememory of system is : ${system.freemem()}`);

// console.log(`the network interface of system is : ${JSON.stringify(system.networkInterfaces())}`);

// console.log(`the temporory dir of system is : ${system.tmpdir()}`);


console.log("endianess :",system.endianness());


console.log("hostname :",system.hostname());


console.log("type :",system.type());


console.log("platform :",system.platform());


console.log("relase :",system.release());








