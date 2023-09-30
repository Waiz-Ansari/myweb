const express = require('express')
const app = express()
const path = require('path')
const hbs = require("hbs")

const schema = require('./src/schema')
// const async = require('hbs/lib/async')


const renderer = path.join(__dirname,'views')


app.use(express.urlencoded({extended:false}))

app.use(express.json())
app.set("view engine", "hbs")
app.set("views",renderer)

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/sign",(req,res)=>{
    res.render("sign")
})


app.post('/chat',async (req,res)=>{

      const data={
        name:req.body.name,
        email:req.body.email,
        // password:req.body.password,
        password:req.body.password,
      }
      await schema.insertMany([data])
      res.render("home")
    // const user = await data.save()
    // res.status(201).render("login.hbs")

})
 
//port
app.listen(3000,()=>{
    console.log( '  http://localhost:3000  port connected')
})