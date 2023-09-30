require("dotenv").config();
const express = require("express");
const app = express();
const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookies")
const cookieParser = require("cookie-parser");
// const router = express.Router()
// const mongoose = mo
// const { accessSync } = require('fs')
const path = require("path");

const hbs = require("hbs");
const auth = require("../middleware/auth");

const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
// const path = require('path')

require("./dataBase/mongo");
const data = require("./models/achema");
const { model } = require("mongoose");
const { Socket } = require("dgram"); 
const amqp = require("amqplib/callback_api")

const port = process.env.PORT || 80;

const dir_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// middle were

// app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(dir_path));
// app.use (express.static(__dirname + "/public"))
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

// app.set("views",template)

// console.log(path.join(__dirname,"../public"))

// console.log(process.env.SECRET_KEY)

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/secret", auth, (req, res) => {
  console.log(`this is cookies ${req.cookies.jwt}`);
  res.render("secret");
});
// app.get('/',(req,res)=>{
//     res.render ("login")
// })
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signUp", (req, res) => {
  res.render("signUp");
});

// creat a new user in our data base
app.post("/signUp", async (req, res) => {
  // res.render ("DataName")
  try {
    // console.log(req.body.name);
    // res.send(req.body.name)
    const password = req.body.password;
    const Cpassword = req.body.confirmpassword;
    if (password === Cpassword) {
      const sign_data = new data({
        name: req.body.name,
        email: req.body.email,
        password: password,
        confirmpassword: Cpassword,
      });

      // middle same as schema
      // and genrate JWT tokens
      console.log("the success part" + sign_data);

      const token = await sign_data.generateAuthToken();
      console.log("the token part" + token);

      // cookies
      // res.cookie() fnction is used to set the cookie name to value.
      // the value parameter may be a string or object converted to JSON.
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      });
      console.log(token);

      await sign_data.save(); //const complete =
      res.status(201).render("login");
    } else {
      res.send("password are not match");
    }
  } catch (error) {
    res.send(" invalid");
    console.log("the error part page invalid");
  }
});

app.post("/login", async (req, res) => {
  // let userdata = new DataName.findOne();
  // console.log('req', req.body.email)
  //  console.log('res', req.body)
  let useremail = await data.findOne({ email: req.body.email });
  console.log(useremail);
  if (useremail != null) {
    // const compare_password = await req.body.email === useremail.p;
    const compare_password = await bcript.compare(
      req.body.password,
      useremail.password
    );

    const token = await useremail.generateAuthToken();
    console.log("the token part" + token);

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 90000),
      httpOnly: true,
      // secure:true
    });
    // console.log(`this is cookies ${req.cookies.jwt}`)

    if (compare_password === true) {
      console.log("Successfully Logged In");
      res.status(201).render("index");
    } else {
      res.send("Incorrect Password");
    }
  } else {
    res.send("Email does not exist");
  }
});

//socket
// const io = require("socket.io")(http)

io.on("connection", (socket) => {
  console.log("connection..........");

  ///rabit mq
  const QUEUE = "chat"
  // producer
  amqp.connect('amqp://localhost', (connError, connection) => {
      if (connError) {
          throw connError;
        }
        let channel;
        connection.createChannel((channelError, channel) => {
            if (channelError) {
                throw channelError;
            }
            // const QUEUE = 'chat'
            channel.assertQueue(QUEUE);
            socket.on('message', (msg) =>{
                channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(msg)));
                socket.broadcast.emit('message',msg);
            })
        })         
    })
    //poroducer
    //cunsumer
    amqp.connect('amqp://localhost', (connError, connection) => {
        if (connError) {
            throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // const QUEUE = 'message'
        channel.assertQueue(QUEUE);
        // console.log(QUEUE)
        channel.consume(QUEUE, (msg) => {
            const data = JSON.parse(msg.content.toString());
            console.log(data);
        }, { noAck: true })
    })
})
// });

// socket.on('message', (msg) =>{
//     channel.consume(QUEUE, (msg) => {
//         const data = JSON.parse(msg.content.toString());
//         console.log(data);
//     }, { noAck: true })
//     // socket.broadcast.emit('message',msg);
// })
//cunsumer
  ///rabit mq

//   socket.on("message", (msg) => {
//     // socket.broadcast.emit("message", msg);
//   });
});

server.listen(port, (req, res) => {
  console.log(`server is running ay port no ${port}`);
});




///is file ko chalany k liye ribbite ki file ko compose up kerna pary ga or browser pa ja k ribbit ko on kerna pary ga localhost:15672/#/
