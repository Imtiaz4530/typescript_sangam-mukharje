type Direction = "left" | "right" | "up";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left"; // TS keeps literal type "left"
move(d1);

// let d2 = "left"; // TS widens to string (this means d2 can be changed)
// d2 = "nothing"
// move(d2);

// let d3: Direction = "left"; // this will work, bcz d3 is a variable of type Direction
// move(d3);
