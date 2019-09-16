class Square {
  constructor(_side) {
    this.width = _side;
    this.height = this.width;
  }

  get area() {
    return this.width * this.height;
  }

  static equals(aSquare, otherSquare) {
    return aSquare.area === otherSquare.area;
  }

  static isValidDimentions(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
let square2 = new Square(9);
console.log(Square.equals(square1, square2));

console.log(Square.isValidDimentions(6, 7));
