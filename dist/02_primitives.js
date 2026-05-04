"use strict";
let username = "munna";
let age = 22;
let isCreated = true;
const big = 2n ** 60n - 1n;
// ------------ You cant mix bigint and number ------------
// ------------ const mixed = big + age ------------
const TOKEN = Symbol("token");
function yearsToDay(years) {
    return years * 365;
}
