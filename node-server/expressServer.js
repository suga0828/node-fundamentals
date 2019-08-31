import express from 'express';
// Built in library
import { exec } from 'child_process';
import util, { log } from 'util';

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
// exec('ls -B', (err, stdout, stderr) => {
//   if (err) {
//     throw error;
//   }
//   console.log(stdout);
// });

// Execute a command (promise based)
const execP = util.promisify(exec);

const main = async () => {
  try {
    const { stdout, stderr } = await execP('ls -B');
    console.log(stdout);
  } catch (error) {
    throw error;
  }
};

main();

// Event emitter
import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('change', () => {
  console.log('Something has change');
});

setInterval(() => {
  eventEmitter.emit('change');
}, 1000);
