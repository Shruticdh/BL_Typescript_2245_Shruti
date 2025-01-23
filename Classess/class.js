"use strict";
class Person3 {
    constructor(name, age) {
        this.name = name; // Assign constructor parameters to fields
        this.age = age;
    }
    greet() {
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
    }
}
const p = new Person3("Alice", 30);
p.greet(); // Output: Hi, I am Alice, and I am 30 years old.
