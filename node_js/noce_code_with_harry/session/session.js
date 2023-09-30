const express = require('express')
const app = express()
const  session = require ('express-session')
const PORT = process.env.PORT || 3000


app.use(session({
    secret:"your Secret key",
    resave:true,
    saveUninitialized:true
}));

app.get('/',(req,res)=>{
    req.session.name = 'waiz'
    return res.send("Session Set")
})

app.get('/session',(req,res)=>{
    var name = req.session.name;
    return res.send(name)
})



app.listen(PORT,()=>{
    console.log((`Listening to request in http>//localhost:${PORT}`))
})