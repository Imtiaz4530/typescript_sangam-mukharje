// ------------ When to use types and when to use interfaces ------------
// ------------ Uses of type aliases ------------

// object shapes -> similar to interfaces
// union types -> (A | B)
// intersection types -> (A & B)

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const p1: Person1 = {
  id: "1",
  address: "Dhaka",
  salary: 100,
};

type Status = "new" | "pending" | "delivered";
function nextActionCheck(s: Status): string {
  switch (s) {
    case "new":
      return "order is new";
    case "pending":
      return "order is pending";
    case "delivered":
      return "order is delivered";
    default:
      return "order is new";
  }
}

type ToMerge1 = { price: number };
type ToMerge2 = { quantity: number };
type MergedProductInfo = Person1 & ToMerge1 & ToMerge2;

const p2: MergedProductInfo = {
  id: "1",
  address: "Dhaka",
  salary: 100,
  price: 100,
  quantity: 10,
};
