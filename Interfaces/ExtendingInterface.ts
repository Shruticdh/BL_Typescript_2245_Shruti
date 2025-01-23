interface Vehicle23 {
    make: string;
    model: string;
}

interface Car89 extends Vehicle23 {
    numberOfDoors: number;
}

let myCar: Car89 = {
    make: "Toyota",
    model: "Corolla",
    numberOfDoors: 4,
};

