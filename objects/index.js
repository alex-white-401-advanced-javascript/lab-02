'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const supra = new VehicleClass.Car('Supra');
console.log(supra.name, supra.drive(), supra.stop());

const klr = new VehicleClass.Motorcycle('KLR 650');
console.log(klr.name, klr.wheelie(), klr.stop());

// Implement a car and motorcycle using a Factory
const sub = VehicleFactory('Subaru');
console.log(sub.name, sub.drive(), sub.stop());

const bmw = VehicleFactory('BMW R 1200');
console.log(bmw.name, bmw.wheelie(), bmw.stop());