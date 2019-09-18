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
          fs.rename('example.txt', 'tutorial/example.txt', error => {
            if (error) {
              console.error(error);
            } else {
              console.log('successfully renamed file');
            }
          });
        }
      });
    }
  }
);

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

fs.mkdir('tutorial', error => {
  if (error) {
    console.error(error);
  } else {
    // Create a file
    fs.writeFile(
      'tutorial/1.txt',
      'this is a file created with fs module of Node.js',
      err => {
        if (err) {
          console.error(err);
        } else {
          console.log('File successfully created');
        }
      }
    );
    fs.writeFile(
      'tutorial/2.txt',
      'this is a file created with fs module of Node.js',
      err => {
        if (err) {
          console.error(err);
        } else {
          console.log('File successfully created');
        }
      }
    );
  }
});

fs.readdir('tutorial', (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (const file of files) {
      fs.unlink(`./tutorial/${file}`, error => {
        if (error) {
          console.log(error);
        } else {
          console.log(`${file} successfully deleted`);
        }
      });
    }
    fs.rmdir('tutorial', err => {
      if (err) {
        console.error(err);
      } else {
        console.log('folder succesfully deleted');
      }
    });
  }
});
