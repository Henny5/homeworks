"use strict";

class Vehicle {
  constructor(color) {
    this.color = color;
  }

  go(speed) {
    this.speed = speed;
    console.log(`now going at speed ${this.speed}`);
  }

  print() {
    console.log(`I am ${this.color} and going speed ${this.speed}`);
  }
}

const v = new Vehicle("red");
v.go(60);
v.print();

class Plane extends Vehicle {
  constructor(color) {
    super(color);
  }
  go(speed) {
    this.speed = speed;
    console.log(`now flying at speed ${this.speed}`);
  }
}

const p = new Plane("green");
p.go(75);
p.print();
