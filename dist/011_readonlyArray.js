"use strict";
// ------------
const arr = [1, 2, 3]; // readonly array of numbers
const arr2 = [1, 2, 3]; // readonly array of numbers
function sum(nums) {
    let s = 0;
    for (const n of nums)
        s += n;
    return s;
}
console.log(sum(arr2)); // passing mutable array in readonly params is allowed
