"use strict";
const add1 = (x, y) => x + y; // Matches the MathOperation type
console.log(add1(5, 6));
// ParameterType
function add23(a, b) {
    return a + b;
}
console.log(add2(5, 7));
//void Return Types
function logMessage(message) {
    console.log(message);
}
logMessage("Shruti");
//  Inferring Function Return Types
function divide(a, b) {
    return a / b;
}
console.log(divide(4, 8));
