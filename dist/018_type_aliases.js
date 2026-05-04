"use strict";
// ------------ When to use types and when to use interfaces ------------
// ------------ Uses of type aliases ------------
const p1 = {
    id: "1",
    address: "Dhaka",
    salary: 100,
};
function nextActionCheck(s) {
    switch (s) {
        case "new":
            return "order is new";
        case "pending":
            return "order is pending";
        case "delivered":
            return "order is delivered";
        default:
            return "order is new";
    }
}
const p2 = {
    id: "1",
    address: "Dhaka",
    salary: 100,
    price: 100,
    quantity: 10,
};
