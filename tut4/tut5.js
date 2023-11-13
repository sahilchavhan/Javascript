const http=require("http");
const fs=require("fs");

const hostname= '127.0.0.1';
const port = 5500;
const home= fs.readFileSync('home.html')
const services= fs.readFileSync('services.html')
const about= fs.readFileSync('about.html')
const contact= fs.readFileSync('contact.html')

const server=http.createServer((req,res)=>{
    //console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    
    if(req.url=='/'){
    res.send(home);}

    else if(req.url=='/services'){
    res.send(services);}

    else if(req.url=='/about'){
    res.send(about);}

    else if(req.url=='/contact'){
    res.send(contact);}

    // else{
    //     res.statusCode=404;
    //     res.end("<h1> 404 not found</h1>")
    // }
});

// server.listen(port,hostname, () => {
//     console.log('SERVER IS RUNNING AT http://${hostname}:${port}/');
// });
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });