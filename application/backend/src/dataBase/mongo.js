const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/dataBase"
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreatIndex:true
).then(()=>{
    console.log(`connect successful`)
}).catch((e )=>{
    console.log(`no connection`)
})
