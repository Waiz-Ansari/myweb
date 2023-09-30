//index.js
const express = require("express");
const path = require("path");
// const pug =require("pug")
const app=express();
const PORT = process.env.PORT || 3000;//



app.use(express.urlencoded({
   extended : true
}))


app.set("views", path.join(__dirname,"views"))

app.set('view engine',"pug")

app.get('/',(req,res)=>{
   res.render('./index',{title:'form handling'})
})

app.post('/form_submit',(req,res)=>{
   const username = req.body.username;
   const email = req.body.email;
   res.end(`this is your name ${username} and email ${email}`)

})




app.listen(PORT, ()=>{
    console.log(`Listening to request on http://localhost:${PORT}`)
})



