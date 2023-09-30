const fs = require("fs");
let text = fs.readFile("txt" , "utf-8",(error, data)=>{
    try {
        console.log(data)

    } catch (error) {
        console.log(error)
    }
});
console.log("this is a massage")