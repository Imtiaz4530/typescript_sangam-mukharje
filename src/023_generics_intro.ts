// --------------- GENERICS ---------------
// understand what is "type parameter" <T>
// how typescript infers <T> from your arguments automatically

// what is generics?
// -> is a function -> the types are "blank" -> you fill them in later
// -> <T> is a placeholder
// -> TS will try to understand what <T> is -> based on what you pass it

// --------------- GENERIC FUNCTION ---------------
function echo<T>(x: T): T {
  return x;
}

// infers T
// echo(5) -> T is number
// echo("hello") -> T is string

function firstIndexOf<T>(x: T[]): T | undefined {
  return x[0];
}
firstIndexOf([1, 2, 3]);
