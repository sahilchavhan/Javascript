const http=require('http')
const fs=require("fs")
const filecontent= fs.readFileSync('two.html')

const server= http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.send(filecontent)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log("listening on port 80")
    //port 80 is defauklt if we choose any other port then we have to mention it on browser while opening server
})