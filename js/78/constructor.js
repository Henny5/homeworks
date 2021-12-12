"use strict";

function Vehicle(color, speed) {
  this.color = color;
  this.speed = speed;
}

Vehicle.prototype.go = function () {
  console.log(`now going at speed ${this.speed} `);
};

Vehicle.prototype.print = function () {
  console.log(`${this.color}, ${this.speed} `);
};

const car = new Vehicle("red", "50");
console.log(car);
car.print();
car.go();

function Plane(color, speed) {
  Vehicle.call(this, color, speed);
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.go = function () {
  console.log(`now flying at speed ${this.speed} `);
};

const plane = new Plane("blue", "700");
console.log(plane);
plane.print();
plane.go();
