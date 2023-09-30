const gatData = require('./mongo')
const express = require ('express');
const router = express.Router()
// const MongoClient = require('mongoose')

async function get(){
    const data = await gatData();
// login
        router.post('/login',(req,res)=>{
            data.map(data => {
  // console.log("req.body",req.body)
//   console.log('input', req.body.email, req.body.password)
//   console.log('data', data.email, data.password)
  //if(req.body.email == cre.email && req.body.password == cre.password){
  if(req.body.email == data.email && req.body.password == data.password){
      console.log(true)
      req.session.user = req.body.email;
      res.redirect('/route/dashboard')
      // res.end('login successful')
     
  }
  else{
    console.log(false)
  }
            })
            res.end('invalid user name')
    
          
        }
        )
    //   })
    // -------looooooop close

    // console.log("dfcsczxxv ",email)

// const cre = {
//     email:'waizansari01@gmail.com',
//     password:'addmin123'
// }

//login user
// console.log('DBdata', DBdata)
/*router.post('/login',(req,res)=>{
    console.log("req.body",req.body)
    //if(req.body.email == cre.email && req.body.password == cre.password){
    if(req.body.email == email && req.body.password == password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')
        // res.end('login successful')
        // console.log("wasedfzx",DBdata[0].email)
    }else{
        res.end('invalid username')
    }
})*/
}
get();




//route for dashboard

 router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('Unauthorized User')
    }
 });




 //rout for logout
 router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send('Error')
        }else{
            res.render('base',{title:'express', logout:'Logout Successful.....!'})
        }
    })
 })



module.exports = router


//how to connnect mongodb in node js?
// var db = null // global variable to hold the connection

// MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
//     if(err) { console.error(err) }
//     db = client.db('test') // once connected, assign the connection to the global variable
// })

// app.get('/', function(req, res) {
//     db.collection('test').find({}).toArray(function(err, docs) {
//         if(err) { console.error(err) }
//         res.send(JSON.stringify(docs))
//     })
// })


// var conn = MongoClient.connect('mongodb://localhost:27017/') // returns a Promise

// app.get('/', function(req, res) {
//     conn.then(client=> client.db('test').collection('test').find({}).toArray(function(err, docs) {
//         if(err) { console.error(err) }
//         res.send(JSON.stringify(docs))
//     }))
// })


