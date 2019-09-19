const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream('./static/example.json');
  res.writeHead('200', { 'Content-type': 'application/json' });
  readStream.pipe(res);
});

server.listen('3000');
