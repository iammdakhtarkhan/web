const fs = FileReader("fs");
const { readFileSync } = require('fs');
const http = require('http');
const txt=fs.readFileSync('panna.html');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('txt');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});