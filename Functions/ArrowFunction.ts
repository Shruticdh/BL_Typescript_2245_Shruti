// Single-line Arrow Function:
const add = (a: number, b: number): number => a + b;
console.log(add(4,7));

// Multi-line Arrow Function:
(a: number, b: number): number => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
};
console.log(4,7);
