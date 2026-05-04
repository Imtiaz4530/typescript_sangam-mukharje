"use strict";
// ------------ value -> this or that ------------
function printId(id) {
    if (typeof id === "string") {
        console.log(id);
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(u) {
    if (u.role === "Admin") {
        console.log(u.permission);
    }
    else {
        console.log(`This customer has ${u.loyalityPoints} points`);
    }
}
function describeUserWithInOperator(u) {
    if ("permission" in u) {
        console.log(u.permission);
    }
    else {
        console.log(`This customer has ${u.loyalityPoints} points`);
    }
}
// ------------ Array of unions and union of arrays ------------
const arrayOfUnion = [1, "2", 3, 5, "Munna"];
const unionOfArrays = Math.random() > 0.5 ? [1, 2, 3] : [];
