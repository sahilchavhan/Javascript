const fs = require("fs");
let text = fs.readFileSync("sahil.txt","utf-8");
console.log("the context of text is");
console.log(text);

text=text.replace("sahil","chavhan");
console.log("the new context of text is");
console.log(text);

console.log("creating a new file..");
fs.writeFileSync("meow.txt", text);