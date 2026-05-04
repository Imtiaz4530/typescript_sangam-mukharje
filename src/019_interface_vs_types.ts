// ------------ Interface vs Types ------------

// interface -> object shapes that you expect to extend (inheritance)
// type -> more general -> objects, unions, intersections, functions
// can not be reopened -> no merging

// ------------ You can reopen an interface ------------
interface Box1 {
  width: number;
}
interface Box1 {
  height: number;
}
const boxDemo: Box1 = { width: 10, height: 20 };

// ------------ You can not reopen a type ------------
// type Bag = { size: number };
// type Bag = { color: string };
