/**
 * Classes: structure of eventual object being created
 *
 * Instance properties: what they have
 * name, age, height
 *
 * Instance Methods: what they do
 * run, jum, talk
 */

class Rectangle {
  // Setup
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(
      `I'm a ${this.color} rectangle of ${this.width} x ${this.height} square units`
    );
  }
}

const blueRectangle = new Rectangle(5, 3, 'blue');
const redRectangle = new Rectangle(4, 7, 'red');

blueRectangle.printDescription();
console.log(blueRectangle.getArea());
