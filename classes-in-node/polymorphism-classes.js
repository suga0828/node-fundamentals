class Animal {
  constructor(_name) {
    this.name = _name;
  }

  makeSound() {
    console.log('Generic animal sound!!');
  }
}

class Dog extends Animal {
  constructor(_name) {
    super(_name);
  }

  makeSound() {
    super.makeSound();
    console.log('Woff! Woff!');
  }
}

const animal1 = new Animal('Dom');
animal1.makeSound();

const animal2 = new Dog('Sam');
animal2.makeSound();
