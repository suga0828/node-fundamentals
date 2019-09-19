const fs = require('fs');
const zlib = require('zlib');

// const readbleStream = fs.createReadStream('./example.txt', 'utf8');
// const writebleStream = fs.createWriteStream('./example2.txt.gz');
// const gzip = zlib.createGzip();

// readbleStream.on('data', chunk => {
//   console.log(`Received ${chunk.length} bytes of data.`);
//   writebleStream.write(chunk);
// });

// Shorthand
// readbleStream.pipe(gzip).pipe(writebleStream);

const readbleStream2 = fs.createReadStream('./example2.txt.gz');
const writebleStream2 = fs.createWriteStream('uncompressed.txt');
const gunzip = zlib.createGunzip();

readbleStream2.pipe(gunzip).pipe(writebleStream2);
