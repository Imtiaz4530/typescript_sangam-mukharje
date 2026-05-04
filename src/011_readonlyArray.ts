// ------------

const arr: readonly number[] = [1, 2, 3]; // readonly array of numbers

const arr2: ReadonlyArray<number> = [1, 2, 3]; // readonly array of numbers

function sum(nums: readonly number[]): number {
  let s = 0;
  for (const n of nums) s += n;
  return s;
}

console.log(sum(arr2)); // passing mutable array in readonly params is allowed
