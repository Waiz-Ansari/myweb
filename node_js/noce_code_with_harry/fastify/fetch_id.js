const fastify = require('fastify')
// const express = require('express')
const fs = require('fs')
// const app = express();
const app = fastify();

const port = 3000;
let users = JSON.parse(fs.readFileSync('./fetch_id.json'))
console.log(users)

// ====for complete api
app.get('/user',(req,res)=>{
        // res.send('this is my first services express app by waiz')
        res.header('content-type','application/json')
        // res.writeHead(200,{"Contenttype":"application/json"});
        fs.readFile(`./fetch_id.json`, "utf-8" , (err , data)=>{
            console.log(data)
            res.send(data);
        })
    
    });

 



// =====for specific api id
app.get('/user/:id', (req, res) => {
    if(parseInt(req.params.id-1) < users.length){
    res.send(users[parseInt(req.params.id-1)])
    }else{
        let error = "invalid id"
        res.send(error)
    }

});


// put http method

// app.put('/user/:id', (req, res)=>{
//     const {id, lastname} = req.body;


    

// })




app.listen(port, () => {
    console.log(`This Application Started Successfully on port ${port}`)
})








// app.get('/fetch/:id', (req,res)=>{
// const userIdd = req.params.id
// // console.log(userIdd)
// const user = users.find(userId => userId.id === userIdd)
// // console.log(user)
// if(user){
//     res.status(200).json(user)
// } else{
//     res.sendStatus(404)
// }
// })

// app.listen(port, () => {
//     // if (error) {
//     //   console.error(error);
//     // } else {
//       console.log(`Server listening on port 3000`);
//     // }
//   });


// server.get('/user/:id', (request, response) => {
//     const userId =users.parseInt[request.params.id];
//     response.send(userId);
//   });


// app.get('/fetch/:id',(req,res)=>{
//     // res.send('this is my first services express app by waiz')
//     res.header('content-type','application/json')
//     // res.writeHead(200,{"Contenttype":"application/json"});
//     fs.readFile(`./fetch_id.json`, "utf-8" , (err , data)=>{
//         console.log(data)
//         res.send(data);
//     })

// });



// app.listen(port, ()=>{
//     console.log(`this is port${port}`)
// })


