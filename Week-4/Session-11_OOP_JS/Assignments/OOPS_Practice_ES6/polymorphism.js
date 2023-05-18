class Shape {
  calculateArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(10, 10);
console.log(`Area of Rectangle:`, rectangle.calculateArea(), `sq.`);

const triangle = new Triangle(10, 5);
console.log(`Area of Triangle:`, triangle.calculateArea(), `sq.`);

const circle = new Circle(10);
console.log(`Area of Circle:`, circle.calculateArea(), `sq.`);
