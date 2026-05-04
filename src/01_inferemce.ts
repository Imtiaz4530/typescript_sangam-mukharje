// ------------ Goal -> understand when to let typescript infer types ------------
// ------------ TS -> JS very well ------------
// ------------ when s will write the types / you are going to write ------------

let count = 0; // ts see this is a number
const site = "munna.com"; // ts see this is a string
const scores = [1, 2, 3]; // ts see this is an array

// ------------ over annotation isnot bad just noisy ------------
function add(a: number, b: number): number {
  return a + b;
}
// add(1, "a");

// ------------ you should also annotate when type is not obvious ------------

let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 1;
