// ------------

const a11: number[] = [1, 2, 5]; // array of numbers
const a22: Array<number> = [1, 2, 5]; // array of numbers

const score = [11, 22, 31]; // ts will infer this is an array of number

const mix = [1, "2", 3, 5, "Munna"]; // ts will infer this is an array of string | number
