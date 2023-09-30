const express = require ('express');
const path = require('path')
const bodyP = require('body-parser') 
const session = require('express-session')
const {v4:uuidv4} = require('uuid')
const router = require('./router')

const app = express();
const port = process.env.PORT || 80


//middle point
app.use(bodyP.json())
app.use(bodyP.urlencoded({extended:true}))


app.set('view engine' , 'ejs')

// load static assets
 app.use('/static',express.static(path.join(__dirname,'public')))
 app.use('/assets',express.static(path.join(__dirname,'public/assets')))

 app.use(session({
    secret:uuidv4(),//'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave:'false',
    saveUninitialized:true
 }));

 app.use('/route', router)

//home route
app.get('/',(req,res)=>{
    res.render('base', {title:"Login System"})
})

// start the server
app.listen(port,()=>{
    console.log(`lostening to the server on http://localhost:80`)    
})

// how to connect mongodb in node js?
// var db = null // global variable to hold the connection
// MongoClient.connect('mongodb://localhost:27017/')
// MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
//     if(err) { console.error(err) }
//     // db = client.db('test') // once connected, assign the connection to the global variable
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


