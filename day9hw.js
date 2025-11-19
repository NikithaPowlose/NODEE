const fs = require("fs");
const path = require("path");

var buf1 = Buffer.from("Node.js buffers are powerful");
var buf2 = Buffer.from(" and flexible!");

var finalBuf = Buffer.alloc(buf1.length + buf2.length + 5);

finalBuf.write("FAST ", 0);
finalBuf.write(buf1.toString(), 5);
finalBuf.write(buf2.toString(), buf1.length + 5);

console.log("The new content is: " + finalBuf.toString());

let filePath = path.join(__dirname, "buffer_output.txt");
fs.writeFileSync(filePath, finalBuf.toString());

console.log(filePath);
