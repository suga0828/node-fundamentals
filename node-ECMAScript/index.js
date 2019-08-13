// If package.json have "type": "modules",
// and run with the --experimental-modules
// flag you can't use require/module.exports (node module),
// instead use import/export default syntax (ECMAScript Module)

import "something";
import _ from "lodash";
import http from "http"; // Built-in module;

console.log(http);
console.log(_.sum([1, 3, 6]));

export default {
  anwers: 42,
  anwers2: () => {
    console.log("Hello");
  }
};
