"use strict";
//An abstract class serves as a blueprint for derived classes. 
// It cannot be instantiated directly and may contain abstract methods that must be implemented in subclasses.
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.sound(); // Output: Woof! Woof!
dog.move(); // Output: Moving...
