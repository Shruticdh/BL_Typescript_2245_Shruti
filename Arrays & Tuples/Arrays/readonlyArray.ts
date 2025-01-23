//Syntax:
//let arrayName: readonly Type[];
// OR
//let arrayName: ReadonlyArray<Type>;


//Example:
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading
// readonlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

let readonlyStrings: ReadonlyArray<string> = ["Shruti", "Nivu"];
// readonlyStrings.pop(); // Error: Property 'pop' does not exist on type 'readonly string[]'






//Why Use Readonly Arrays?

//Prevent accidental modifications to arrays.
//Useful for constants or configurations that shouldn’t change.
