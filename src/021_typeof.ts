// ------------ typeof ------------
// typeof for primitives
function describeTypeof(x: unknown) {
  if (typeof x === "string") {
    return "string";
  }

  if (typeof x === "number") {
    return "number";
  }

  if (typeof x === "boolean") {
    return "boolean";
  }

  if (typeof x === "bigint") {
    return "bigint";
  }

  if (typeof x === "symbol") {
    return "symbol";
  }

  if (typeof x === undefined) {
    return "undefined";
  }

  if (typeof x === "function") {
    return "function";
  }

  if (x === "null") {
    return "null";
  }

  return "object";
}

console.log(
  describeTypeof("h1"),
  describeTypeof(1),
  describeTypeof(true),
  describeTypeof(null),
  describeTypeof(undefined),
  describeTypeof({}),
  describeTypeof([]),
  describeTypeof(() => {}),
);

function info(z: unknown) {
  info([1, 2, 3]);
  info(new Date());
  info(new Error());
}
