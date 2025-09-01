
# Node.js Notes

## 1. Introduction to Node.js
Node.js is a **JavaScript runtime environment** built on Chrome’s V8 JavaScript engine. 
It allows running JavaScript code outside the browser, mainly for server-side programming.

---

## 2. Why Node.js?
- **Asynchronous & Non-blocking I/O** → Handles multiple requests without waiting.
- **Fast Execution** → Powered by Google’s V8 engine.
- **Single Programming Language** → Use JavaScript for both frontend & backend.
- **Large Ecosystem** → NPM provides thousands of packages.
- **Scalability** → Great for real-time applications like chat apps, streaming, etc.

---

## 3. Installing & Running Node.js
1. Download Node.js from [https://nodejs.org](https://nodejs.org)
2. Verify installation:
   ```bash
   node -v
   npm -v
   ```
3. Run a simple script:
   ```bash
   console.log("Hello, Node.js!");
   ```

---

## 4. Core Modules (Important)
Node.js provides built-in modules without needing extra installation.

- **http** → Create web servers.
- **fs** → File System operations (read/write files).
- **path** → Work with file & directory paths.
- **os** → System-related info (CPU, memory).


Example:
HTTP
```js
// http_example.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js HTTP Server!");
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

```
FS
```js
// fs_example.js
const fs = require("fs");

// Write to a file
fs.writeFileSync("example.txt", "This is written using fs module!");

// Read from a file
const data = fs.readFileSync("example.txt", "utf8");
console.log("File Content:", data);

```
Path

```js 
// path_example.js
const path = require("path");

const filePath = "/Users/sagar/Documents/app/index.js";

console.log("Base name:", path.basename(filePath));   // index.js
console.log("Directory name:", path.dirname(filePath)); // /Users/sagar/Documents/app
console.log("Extension:", path.extname(filePath));   // .js
```

OS

```js
// os_example.js
const os = require("os");

console.log("OS Platform:", os.platform());   // darwin / win32 / linux
console.log("CPU Architecture:", os.arch());  // x64, arm64, etc.
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
```

---

## 5. npm (Node Package Manager)
- Default package manager with Node.js.
- Used to install external libraries.

Example:
```bash
npm init -y
```

---

## 6. Practical Mini Task
👉 Create a Node.js server that runs on port 5000 and responds with “Welcome to Node.js”.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to Node.js");
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
```

Run:
```bash
node server.js
```

---

## 7. Why Express after Node?
- Node.js requires a lot of manual setup for routing, middleware, etc.
- Express.js simplifies server development:
  - Easy routing.
  - Middleware support.
  - Scalable structure.

**In short:** Node.js provides the foundation, Express makes building apps faster & easier.
