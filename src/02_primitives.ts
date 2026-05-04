let username: string = "munna";
let age: number = 22;
let isCreated: boolean = true;

const big: bigint = 2n ** 60n - 1n;

// ------------ You cant mix bigint and number ------------
// ------------ const mixed = big + age ------------

const TOKEN: unique symbol = Symbol("token");

function yearsToDay(years: number): number {
  return years * 365;
}
