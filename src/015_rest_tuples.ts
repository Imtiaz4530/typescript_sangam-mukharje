// function sumAllNumbers(...xs: number[]): number {
//   return xs.reduce((a, b) => a + b, 0);
// }

// console.log(sumAllNumbers(1, 2, 3));

// ------------ Tuple REST ------------
function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  const out: number[] = [];

  for (let n = start; n < end; n += step) out.push(n);
  return out;
}

console.log(makeRange(1, 9));

// ------------ fixed tuple rest ------------
function draw(x: number, y: number) {
  console.log(x, y);
}

// const p = [52, 10] as const;
// draw(...p);
