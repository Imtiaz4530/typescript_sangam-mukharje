"use strict";
// <T> -> constrain T so that only certain shapes are allowed
// <T extends X>
// key constrains -> <K extexds keyof T> -> K must be a key of T
function lenN4(x) {
    return x.length;
}
console.log(lenN4("hello"));
function userN6Extract(arrN4, keyN4) {
    return arrN4.map((x) => x[keyN4]);
}
const usersN6 = [
    { id: "1", name: "John", age: 30 },
    { id: "2", name: "Jane" },
];
console.log(userN6Extract(usersN6, "id"));
console.log(userN6Extract(usersN6, "name"));
