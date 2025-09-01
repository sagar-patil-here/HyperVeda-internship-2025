// fs_example.js
const fs = require("fs");

// Write to a file
console.log("1")
fs.appendFile("example.txt", "This is written using fs module!");
console.log("2")
// Read from a file
const data = fs.readFile("example.txt", "utf8");
console.log("File Content:", data);
