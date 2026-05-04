// <T> -> constrain T so that only certain shapes are allowed
// <T extends X>
// key constrains -> <K extexds keyof T> -> K must be a key of T

function lenN4<T extends { length: number }>(x: T): number {
  return x.length;
}

console.log(lenN4("hello"));

type UserN6 = { id: string; name: string; age?: number };

function userN6Extract<T, K extends keyof T>(
  arrN4: T[],
  keyN4: K,
): Array<T[K]> {
  return arrN4.map((x) => x[keyN4]);
}

const usersN6: UserN6[] = [
  { id: "1", name: "John", age: 30 },
  { id: "2", name: "Jane" },
];

console.log(userN6Extract(usersN6, "id"));
console.log(userN6Extract(usersN6, "name"));
