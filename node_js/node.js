// console.log("node app")
// const a= 5
// const b= 10
// console.log("a is equal to:%s and b is equal to:%s",a,b)
 
// const os = require("os")
// console.log(os.type())
// console.log(os.platform())


const car = {
    brand:"dhoom",
    model:24
}
// console.log(car)
// module.exports=car
exports.car1=car

const car1 = {
    brand:"dhoomm",
    model:23
}
// console.log(car)
exports.car2=car1



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>hello world</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
