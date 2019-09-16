const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 3);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
let maria = new Person('Maria');

maria.on('name', () => {
  console.log(`My name is ${maria.name}`);
});
pedro.on('name', () => {
  console.log(`My name is ${pedro.name}`);
});

maria.emit('name');
pedro.emit('name');
