"use strict";
// ------------ Strict null check ------------
// let title: string = "intro";
// title = undefined;
// let subtitle: string | undefined = "intro";
// subtitle = undefined;
// ------------ DO NOT USE ANY -> TRY TO IGNORE IT AS MUCH AS POSSIBLE ------------
// ------------ void -> function does not return anything ------------
function log(msg) {
    console.log(msg);
}
// ------------ this function will never return ------------
function fail(msg) {
    throw new Error(msg);
}
// ------------ DO NOT USE ANY -> TRY TO IGNORE IT AS MUCH AS POSSIBLE ------------
const valueAny = JSON.parse("{'x': 1}");
valueAny.notThere.toFixred(2); // this will compile but break on runtime
