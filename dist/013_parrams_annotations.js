"use strict";
function func1(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const doubled = nums12.map((num) => num * 2); // num always a number type
function distanceFormOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distanceFormOrigin({ x: 4, y: 8 }));
