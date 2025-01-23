//fucntion Type
type MathOperation2 = (a: number, b: number) => number;
const add1: MathOperation = (x, y) => x + y; // Matches the MathOperation type
console.log(add1(5,6));

// ParameterType
function add23(a: number, b: number): number {
    return a + b;
}
console.log(add2(5,7));

//void Return Types
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Shruti");

//  Inferring Function Return Types
function divide(a: number, b: number) {
    return a / b; 
}
console.log(divide(4,8));