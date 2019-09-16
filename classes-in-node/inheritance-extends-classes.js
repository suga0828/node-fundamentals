// Parent Class
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`I'm ${this.name} and I am ${this.age} years old`);
  }
}

// Child Class
class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperencie) {
    // Constructor in parent class
    super(_name, _age);

    // Custom behaviour
    this.yearsOfExperencie = _yearsOfExperencie;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

let person1 = new Person('Jeff', 45);
let programmer1 = new Programmer('Dom', 56, 12);
let programmer2 = new Programmer('Even', 31, 8);

console.log(person1);
console.log(programmer1);

const programmers = [programmer1, programmer2];

function developSoftware(programmers) {
  programmers.forEach(programmer => programmer.code());
}

developSoftware(programmers);
