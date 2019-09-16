const fs = require('fs');

// Create a file

fs.writeFile(
  'example.txt',
  'this is a file created with fs module of Node.js',
  err => {
    if (err) {
      console.error(err);
    } else {
      console.log('File successfully created');
      fs.readFile('example.txt', 'utf8', (error, file) => {
        if (error) {
          console.error(error);
        } else {
          console.log(file);
        }
      });
    }
  }
);

fs.rename('example2.txt', 'example3.txt', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('successfully renamed file');
  }
});

fs.appendFile('example3.txt', 'Some data being appendend', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('successfully appended data to file');
  }
});

fs.unlink('example3.txt', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('File successfully deleted');
  }
});
