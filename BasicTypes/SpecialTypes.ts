// null :- Represents an explicitly empty value.
let emptyValue: null = null;
console.log(emptyValue);

// undefined :- let notAssigned: undefined = undefined;
let notAssigned: undefined = undefined;
console.log(notAssigned);

//any :- A type that disables type checking. It allows any type of value to be assigned.
let flexible: any = "Shruti";
flexible = 42; // No error
console.log(flexible);

// unknown :- Similar to any, but safer. You must perform type-checking before using it as a specific type.
let value: unknown = "Shruti";
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Allowed after type check
}

