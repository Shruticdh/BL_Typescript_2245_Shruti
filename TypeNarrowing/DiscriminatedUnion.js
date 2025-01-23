"use strict";
function area(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; // Circle ka type safe hai
    }
    else if (shape.kind === "square") {
        return shape.sideLength ** 2; // Square ka type safe hai
    }
    else {
        return 2;
    }
}
