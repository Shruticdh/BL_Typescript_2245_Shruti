"use strict";
//Static members belong to the class rather than any instance.
//  They are accessed using the class name.
class Calculator2 {
    static add(a, b) {
        return a + b;
    }
}
Calculator2.pi = 3.14159;
console.log(Calculator2.pi); // Output: 3.14159
console.log(Calculator2.add(5, 10)); // Output: 15
