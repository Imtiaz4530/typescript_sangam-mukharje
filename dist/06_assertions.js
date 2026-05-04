"use strict";
const raw = '{"id": "1", "name": "munna"}';
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);
function isUser(v) {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        "name" in v &&
        typeof v.id === "number" &&
        typeof v.name === "string");
}
const maybeUser = JSON.parse(raw);
if (isUser(maybeUser)) {
    console.log(maybeUser.name);
}
