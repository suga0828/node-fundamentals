class Square {
  constructor(_side) {
    this.width = _side;
    this.height = this.width;
    this.numOfRequestsArea = 0;
  }

  get area() {
    this.numOfRequestsArea++;
    return this.width * this.height;
  }

  set area(newArea) {
    this.width = Math.sqrt(newArea);
    this.height = this.width;
  }
}

const square = new Square(5);

console.log(square.area);
console.log(square.area);
console.log(square.area);
console.log(square.area);

console.log(square.numOfRequestsArea);
