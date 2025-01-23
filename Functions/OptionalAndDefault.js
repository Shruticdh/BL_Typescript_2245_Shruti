"use strict";
function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, Guest!";
}
console.log(greet());
console.log(greet("Shruti"));
function greet2(name) {
    return `Hello, ${name !== null && name !== void 0 ? name : "Guest"}!`;
}
//default parameters
function greet3(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Shruti"));
