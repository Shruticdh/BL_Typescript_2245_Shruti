interface User99 {
    readonly id: number;
    name: string;
}

let user12: User99 = {
    id: 1, name: "Shruti"
};
user12.name = "nivu"; 
// user12.id = 2;       // Error: Cannot assign to 'id' because it is a read-only property
