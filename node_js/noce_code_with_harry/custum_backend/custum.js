const http = require('http');
const fs = require('fs');
// const { parse } = require('path');
const hostname = '127.0.0.1';
const port = '3000';
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const services = fs.readFileSync('./services.html')
const servicesjson = fs.readFileSync('./services.json')


const server = http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
    res.end(home);
    }
    else if(url == '/about.html'){
        res.end(about);
    }
    else if(url == '/contact.html'){
        res.end(contact);
    }
    else if(url == '/services.html'){
        res.end(services);
    }else if(url == '/services.json'){
        res.writeHead(200,{"content-type" : " application/JSON "})
        fs.readFile(`${servicesjson}`, "utf-8" , (err , data)=>{
            console.log(data)
            res.end(servicesjson);
        })
    }
    else{
        res.statusCode = 404;
        res.end(`<h1>404 not found</h1>`);
    }

    // res.end(about);
    // res.end(contact);
    // res.end(services);
})
server.listen(port,hostname,()=>{
console.log(`server running at http://${hostname}:${port}`)
})