"use strict";
// ------------ In | Optional | Nullish ------------
function describeDUser(u) {
    if ("permission" in u) {
        return `Admin: ${u.permission.join(", ")}`;
    }
    return `User: ${u.expiresAt.toISOString()}`;
}
const p1n3 = { name: "munna" };
const p2n3 = { name: "munna", contact: {} };
const p3n3 = {
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
const countFromServerN3 = null;
const lebelFromServerN3 = "adsa";
const aN3 = countFromServerN3 ?? 100;
console.log(aN3);
const bN3 = lebelFromServerN3 || 100;
console.log(bN3);
