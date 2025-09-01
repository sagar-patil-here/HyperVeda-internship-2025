
//if in Pakage.json has type="commanjs" use reqire("<ModuleName>") Syntax
//if type = "Module" then use "import "VariableName"" from "ModuleName"
//Ex : import http from 'http' or import fs from 'fs';
const http = require('http')

const server = http.createServer((req, res) => {
 
  res.end("Hello from Node.js HTTP Serve!");
})


server.listen(8000,()=>{
    console.log("Server is Running Perfectly..")
})



// os_example.js
// const os = require("os");

// console.log("OS Platform:", os.platform());   // darwin / win32 / linux
// console.log("CPU Architecture:", os.arch());  // x64, arm64, etc.
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
// console.log("Home Directory:", os.homedir());