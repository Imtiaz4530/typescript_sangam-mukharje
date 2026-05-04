"use strict";
function getUserPropN7(objN7, keyN7) {
    return objN7[keyN7];
}
const uN7 = { id: "1", name: "munna" };
const idValN7 = getUserPropN7(uN7, "name");
console.log(idValN7);
// function setUserPropN7<T, K extends keyof T>(
//   objN7: T,
//   keyN7: K,
//   newValue: T[K],
// ): void {
//   objN7[keyN7] = newValue;
// }
// console.log(uN7, "name", "munna");
