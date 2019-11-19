"use strict";
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var SomethingWeird = /** @class */ (function () {
    function SomethingWeird(a, b) {
        this.a = a;
        this.b = b;
        this.a = a;
        this.b = b;
    }
    return SomethingWeird;
}());
var person = {
    name: "Love Kim",
    age: 20
};
var expert = {
    name: "Developer Kim",
    skills: ["js", "react"]
};
var people = [person, expert];
