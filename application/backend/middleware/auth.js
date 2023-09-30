const jwt = require("jsonwebtoken")

const DataName = require("../src/models/achema")

const auth = async (req,res,next)=>{
    try {
        
        const token = req.cookies.jwt;
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verify)
        const user = await DataName.findOne({_id:verify._id})
        console.log(user.name)
        next();

    } catch (error) {
        res.status(401).send(error)
    }
}
module.exports = auth