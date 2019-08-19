import http from 'http';

// Web server
const server = http.createServer();

// Events
server.on('request', (req, res) => {
    console.log('Requested', req.url);
    if (req.url == '/favicon.ico') {
      res.write('');      
    } else {
      res.write('Hello from http');
    }
    res.end();
});

// Listen server
server.listen(3000);
