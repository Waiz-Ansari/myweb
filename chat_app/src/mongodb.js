const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

// //====schema
// const logInSchema = new mongoose.Schema({
//     name:{
//         try:String,
//         required:true
//     },
//     email:{
//         try:String,
//         required:true
//     },
//     password:{
//         try:String,
//         required:true
//     }
// })
// const userSchema  = new mongoose.model("chatUsers",logInSchema)

// module.exports=userSchema