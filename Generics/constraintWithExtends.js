"use strict";
//You can restrict the types allowed in generics using extends. 
// This ensures the type meets specific criteria.
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "Alice" }, { age: 30 });
console.log(result); // Output: { name: "Alice", age: 30 }
// Error: Number is not an object
// merge(42, { age: 30 });
