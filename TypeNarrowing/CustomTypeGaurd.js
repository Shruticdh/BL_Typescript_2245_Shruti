"use strict";
// Kabhi kabhi aapko khud ka custom logic likhna padta hai type ko narrow karne ke liye. Iske liye variable is Type ka use karte hain.
function isBird(animal) {
    return animal.fly !== undefined;
}
function move2(animal) {
    if (isBird(animal)) {
        animal.fly(); // Ab TypeScript ko pata hai ki yeh Bird hai
    }
    else {
        animal.swim(); // Yahaan yeh Fish hai
    }
}
