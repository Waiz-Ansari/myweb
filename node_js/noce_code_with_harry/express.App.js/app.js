
const express = require('express')
const fs = require("fs");
const id = require('id');
// const { receiveMessageOnPort } = require('worker_threads');
const app = express();
let port = 80
app.get('/',(req,res)=>{
    res.send('this is my first express app by waiz')
});
app.get('/about',(req,res)=>{
    res.send('this is my first about express app by waiz')
});
app.get('/contact',(req,res)=>{
    res.send('this is my first contact express app by waiz')
});
app.get('/services',(req,res)=>{
    res.send('this is my first services express app by waiz')
});
app.get('/api',(req,res)=>{
    // res.send('this is my first services express app by waiz')
    res.writeHead(200,{"Contenttype":"application/json"});
    fs.readFile(`./api.json`, "utf-8" , (err , data)=>{
        console.log(data["users"])
        res.end(data);
    })

});
// app.get('/api/:id',(req,res)=>{
//     // res.send('this is my first services express app by waiz')
//     res.writeHead(200,{"Contenttype":"application/json"});
//     fs.readFile(`./api.json` , (err , data)=>{
//         console.log(data[1])
//         console.log(req.params['id'])
//         res.send()
//         // if (data.userId == '1'){
//         //     res.end(data[1]);
//         // }
//     })

// });
// app.get('api/user/:id', function(req, res){
//     users.find({1: req.params.id}, function(err, docs){
//     if(err) res.json(err);
//     else    res.render('show', {user: docs[0]});
//     });
//     });



app.listen(port, ()=>{
console.log(`the application started successfully on port ${port}`)
})