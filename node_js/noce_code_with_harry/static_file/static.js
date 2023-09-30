
//Serving Static file to server
 //To serve static file such as, images, js file, css file, html files
 //we use express static method. This is built in middleware function in Express
 //Middleware functions allows us to work with request and response object.
 //and it also allows us to add many new functionality in the application when you make request.
const express = require('express')
const path = require('path')
const app = express();
let port = 80

// set the templete engine as pug
app.set('view engine','pug')

//for the serving static files
app.use('/waiz' , express.static('waiz'))

// set the vews directory
app.set('views',path.join(__dirname, 'views'))

//our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', {title: 'Hey', message: 'Hello there!' 
        })
  });


app.listen(port, ()=>{
console.log(`the application started successfully on port ${port}`)
})





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

