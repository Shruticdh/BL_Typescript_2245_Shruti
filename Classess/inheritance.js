"use strict";
//TypeScript supports inheritance using the extends keyword. 
// Subclasses inherit members and methods from their parent classes.
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} is starting...`);
    }
}
class Car extends Vehicle {
    constructor(brand, doors) {
        super(brand); // Call the parent class constructor
        this.doors = doors;
    }
    honk() {
        console.log(`${this.brand} is honking.`);
    }
}
const car = new Car("Toyota", 4);
car.start(); // Output: Toyota is starting...
car.honk(); // Output: Toyota is honking.
