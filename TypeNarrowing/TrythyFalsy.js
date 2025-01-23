"use strict";
function printLength(value) {
    if (value) {
        console.log("Length:", value.length);
    }
    else {
        console.log("Value is null.");
    }
}
printLength("Hello, World!");
printLength(null);
