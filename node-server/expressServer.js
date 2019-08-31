import express from 'express';
// Built in library
import { exec } from 'child_process';

// Express server
const server = express();

// Events
server.get('/', (req, res) => {
  res.send({ message: `Hello Express` });
});

server.get('/favicon.*', (req, res) => {
  // res.sendFile('favicon.ico');
});

// Listen server
server.listen(3001);

// Execute a command (callback based)
exec('ls -B', (err, stdout, stderr) => {
  if (err) {
    throw error;
  }
  console.log(stdout);
});
