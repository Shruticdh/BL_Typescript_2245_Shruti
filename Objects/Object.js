"use strict";
let person1;
person1 = { name: "Shruti", age2: 21 };
//  Nested Object Types
let employee;
employee = {
    name: "Shruti",
    address: {
        city: "kharar",
        postalCode: 10001
    }
};
console.log(employee.address.city);
// optional chaining
let product;
product = { name: "Laptop" };
product = { name: "Laptop", price: 99999 };
//  Readonly Properties
let user1;
user1 = { id: 1, name: "Shruti" };
user1.name = "nivu";
// user1.id = 2;       
