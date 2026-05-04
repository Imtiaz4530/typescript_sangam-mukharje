function func1(a: number, b: number): number {
  return a + b;
}

const nums12 = [1, 2, 3];
const doubled = nums12.map((num) => num * 2); // num always a number type

//const times = (num) => num * 2; // num is any type

type Point = { x: number; y: number };
function distanceFormOrigin(p: Point): number {
  return Math.hypot(p.x, p.y);
}
console.log(distanceFormOrigin({ x: 4, y: 8 }));
