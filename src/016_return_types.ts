// ------------ inference of return type ------------

// const doubleFunc = (n: number) => n * 2;
// console.log(doubleFunc(2));

// ------------ explicit return for exported and public functions ------------
// export function toTitle(s: string): string {
//   return `Hello ${s}`;
// }

// function booleanToNumber(flag: boolean): number {
//   return flag ? 1 : 0;
// }

// ------------ async function inference ------------
async function loadCountInfered() {
  return 42;
}
loadCountInfered().then((res) => console.log(res));
