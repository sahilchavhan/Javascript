// console.log("hello world");
// first backend website
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
          function car(){
              document.getElementById('jdemo').innerHTML=Date();
              confirm("do you want to proceed");
              document.getElementById("two").style.color="red";
              document.getElementById("two").style.backgroundColor="blue";
              document.getElementById("three").innerHTML="helo everyone";
          }
      </script>
  </head>
  <body>
      <h1>javascript</h1>
      <button onclick="car()">click</button>
      <p id="jdemo"></p>
      <p id="two">my name is sahil</p>
      <p id="three"></p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("good morning");