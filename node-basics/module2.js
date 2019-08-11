// A require module dependencies
// execute a file once
require("./module1");
require("./module1");
const index = require("./module1");
// log 'n index.js' once

// If you need execute anything more
// than once, exports its in a function
require("./module1").anwers2();
require("./module1").anwers2();
// log 'Hello' twice

console.log(index);
console.log(index.anwers);
