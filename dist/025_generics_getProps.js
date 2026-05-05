"use strict";
function getUserPropN7(objN7, keyN7) {
    return objN7[keyN7];
}
const uN7 = { id: "1", name: "munna" };
const idValN7 = getUserPropN7(uN7, "name");
function setUserPropN7(objN7, keyN7, newValue) {
    objN7[keyN7] = newValue;
}
console.log(uN7, "name", "munna");
