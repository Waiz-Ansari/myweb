const mongoose = require('mongoose')
//====schema
const logInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    }
})
const userSchema  = new mongoose.model("chatUsers",logInSchema)

module.exports=userSchema