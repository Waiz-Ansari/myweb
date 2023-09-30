
const express = require("express");
const app = express();
const server = require("http").Server(app);
// const { v4: uuidv4 } = require("uuid");
app.set('view engine', 'ejs');
// const io = require('socket.io')(server);
const { Client } = require('pg');


const client = new Client({
    user: 'docker',
    host: 'localhost',
    database: 'test_db',
    password: 'docker',
    port: 7778,
  });
  
  client.connect();
  
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;
  
  client.query(createTableQuery, (err, res) => {
    if (err) throw err;
    console.log('Table created successfully');
  });



app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render("app");
});
app.get('/login', (req, res) => {
    res.render("index");
});
app.get('/signUp', (req, res) => {
    res.render("signUp");
});


server.listen(3001);