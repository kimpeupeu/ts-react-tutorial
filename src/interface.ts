interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});

class SomethingWeird {
  constructor(private a: number, public b: string) {
    this.a = a;
    this.b = b;
  }
}

interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "Love Kim",
  age: 20
};

const expert: Developer = {
  name: "Developer Kim",
  skills: ["js", "react"]
};

const people: Person[] = [person, expert];
