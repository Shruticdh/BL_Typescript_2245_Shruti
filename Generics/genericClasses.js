"use strict";
// A generic class allows you to create reusable, type-safe classes.
class Container {
    constructor(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    setValue(value) {
        this._value = value;
    }
}
const stringContainer = new Container("Hello");
console.log(stringContainer.getValue()); // Output: Hello
const numberContainer = new Container(123);
console.log(numberContainer.getValue()); // Output: 123
