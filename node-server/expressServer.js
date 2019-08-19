import express from 'express';

// Express server
const server = express();

// Events
server.get("/", (req, res) => {
  res.send({ message: `Hello Express` });
});

server.get("/favicon.*", (req, res) => {
  // res.sendFile('favicon.ico');
});

// Listen server
server.listen(3001);
