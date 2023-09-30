const mongoose = require("mongoose")
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")
// const { Schema } = mongoose;
const dbschema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true, 
        unique:true
    },
    password: {
        type:String,
        required:true 
    },
    confirmpassword: {
        type:String,
        required:true 
    },
    tokens:[{
        token:{
            type:String,
            required:true 
        }
    }]
})



//middle same as app/signUp k rout ma  (generate tokens)
dbschema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id)
        const tokengen = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:tokengen});
        await this.save()
        console.log("token "+tokengen)
        return tokengen
    } catch (error) {
        req.send("the error part" + error);
        console.log("the error part" + error);
    }
}



//we are hashing the password
dbschema.pre("save" , async function(next){
    console.log("hi")
    if(this.isModified("password")){
        this.password = await bcript.hash(this.password,12)
        this.confirmpassword =await bcript.hash(this.confirmpassword,12)
        // this.confirmpassword = undefined
    }
    next()
})






// we need to creat a collection

const DataName = new mongoose.model("DataName",dbschema)
module.exports = DataName



