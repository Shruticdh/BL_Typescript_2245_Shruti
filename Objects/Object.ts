let person1: { name: string; age2: number };
person1 = { name: "Shruti", age2: 21 };

//  Nested Object Types
let employee: { 
    name: string; 
    address: { 
        city: string; 
        postalCode: number; 
    }; 
};

employee = {
    name: "Shruti",
    address: {
        city: "kharar",
        postalCode: 10001
    }
};

console.log(employee.address.city); 

// optional chaining
let product: { name: string; price?: number };

product = { name: "Laptop" };         
product = { name: "Laptop", price: 99999 }; 

//  Readonly Properties
let user1: { readonly id: number; name: string };

user1 = { id: 1, name: "Shruti" };

user1.name = "nivu"; 
// user1.id = 2;       




