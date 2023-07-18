const file = require("fs")

// console.log("start reading");

// file.readFile("input.txt",function(err,data){
//     if(err){
//        const  err = "invalid input"
//         console.log("error",err);
//         return err
//     }
//      console.log("data",data.toString());
//      return data
    

// })
// console.log("other stuff");

// const readfile = file.readFileSync("input.txt")
// console.log(readfile.toString());
// console.log("other staff");


// if you to write in the file then we use write method

// file.writeFile("input.txt"," bhaia",function(err){
//           if(err){
//             console.log("erro in the file",err);
//             return err

//           }else{
//            console.log("success in writing file");
          
//           }

          
// })

//apending file or for example in above method it is overinding the whole data 
// but i want to add some text but not deleting the existing element


// apend to file

// file.appendFile("input.txt","__akshay_bhaiya","utf-8",function(err){
//     if(err){
//         console.log("erron in adding file",err);
//         return err

//         }else{
//             console.log("sucessfully addtext text to your file ");
//         }

// })

//close file

// deleting file
// file.unlink("input.txt",function(err){
//     if(err){
//         console.log("erron in deleting file",err);
//         return err

//         }else{
//             console.log("sucessfully deleted your file ");
//         }
// })

file.readFile("input.txt",function(err,data){
    if(err){
        console.log("erron in reading file",err);
        return err

        }else{
            console.log("sucessfully readed file ",data.toString());
            return data
        }
})


file.writeFile("input.txt"," bhaia",function(err){
          if(err){
            console.log("erro in the file",err);
            return err

          }else{
           console.log("success in writing file");
          
          }

          
})
file.unlink("input.txt",function(err){

    if(err){
        console.log("erro in the file",err);
        return err

      }else{
       console.log("success in writing file");
      
      }

})
