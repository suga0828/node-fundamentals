// Low level
// process.stdout.write(Math.random().toString());
// Hight level
// console.log(Math.random());

// Very large output
// console.log(process);
// More short output (no nesting value of process obj)
//console.dir(process, { depth: 0 });

// WRAPPING, Inmediately invoke function expression
// use `require('module').wrapper` to see wrapper function
// (function(exports, require, module, __filename, __dirname) {
// console.log(arguments);
exports.anwers = 42;
module.exports.anwers2 = () => {
  console.log("Hello");
};
console.log("In index.js");
// return module.exports
// })()
