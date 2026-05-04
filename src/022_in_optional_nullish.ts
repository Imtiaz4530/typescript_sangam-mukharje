// ------------ In | Optional | Nullish ------------

type InExample1 = { role: "Admin"; permission: string[] };
type InExample2 = { role: "User"; expiresAt: Date };

type UserExample = InExample1 | InExample2;

function describeDUser(u: UserExample) {
  if ("permission" in u) {
    return `Admin: ${u.permission.join(", ")}`;
  }

  return `User: ${u.expiresAt.toISOString()}`;
}

// console.log(describeDUser({ role: "Admin", permission: ["Admin"] }));
// console.log(describeDUser({ role: "User", expiresAt: new Date() }));

type ProfileN3 = {
  name: string;
  contact?: {
    email?: string;
  };
};

const p1n3: ProfileN3 = { name: "munna" };
const p2n3: ProfileN3 = { name: "munna", contact: {} };
const p3n3: ProfileN3 = {
  name: "munna",
  contact: { email: "munna@gmail.com" },
};

// optional chaining
p1n3.contact?.email; // => undefined
p2n3.contact?.email; // => undefined
p3n3.contact?.email; // => munna@gmail.com

// ------------ ?? and || ------------
// ?? -> uses the right hand default value if the left hand value is null or undefined
// || -> uses the right hand value if the left hand value is null or undefined

const countFromServerN3: number | null = null;
const lebelFromServerN3: string | undefined = "adsa";

const aN3 = countFromServerN3 ?? 100;
console.log(aN3);

const bN3 = lebelFromServerN3 || 100;
console.log(bN3);
