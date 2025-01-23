function greet(name?: string): string {
    return name ? `Hello, ${name}!` : "Hello, Guest!";
}

console.log(greet());         
console.log(greet("Shruti"));

function greet2(name?: string): string {
    return `Hello, ${name ?? "Guest"}!`; 
}
greet2();
//default parameters
function greet3(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

console.log(greet());        
console.log(greet("Shruti"));  


