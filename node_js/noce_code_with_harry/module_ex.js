const fs = require("fs");
var text = fs.readFileSync("text","utf-8");
text = text.replace("waiz", "affan");

console.log("the content of the file is");
console.log('affan');

console.log("creating a new file")
fs.writeFileSync("affan.text" , text)