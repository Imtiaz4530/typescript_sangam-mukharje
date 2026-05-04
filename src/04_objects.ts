// type User = {
//   id: string; //required
//   name: string; // required
//   email?: string; // optional(this could be absent), but if it is present, it has to be a string
//   readonly createdAt: Date; // readonly field cannot be changed
// };

// const user1: User = {
//   id: "1ar1FD4",
//   name: "munna",
//   createdAt: new Date(),
// };

// const user2: User = {
//   id: "1ar1FD4",
//   name: "munna",
//   email: "munna@gmail.com",
//   createdAt: new Date(),
// };

type Count = { [k: string]: number };
type Count1 = Record<"likes" | "views" | "shares", number>;

const c1: Count = { whatever: 25 };
const c2: Count1 = { likes: 1, views: 2, shares: 3 };
