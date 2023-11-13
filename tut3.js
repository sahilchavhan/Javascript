//asynchronous or non-blocking-->line by lne execution not guaranted callbacks will fire
const fs=require("fs");
let text= fs.readFile("sahil.txt","utf-8",(error,data)=>{
    console.log(data);
});
console.log("this is a amessage")


// syncronous or blocking----> line by line execution is gyarranted. it is regular which we use
let text2 = fs.readFileSync("sahil.txt","utf-8");
console.log("the context of text is");
console.log(text);
