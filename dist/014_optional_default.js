"use strict";
// ------------ Optional and default parameters ------------
// function greetPersonOptional(name?: string): string {
//   const upperRes = name?.toUpperCase();
//   return `Hello ${upperRes}`;
// }
// console.log(greetPersonOptional("munna"));
// console.log(greetPersonOptional());
// ------------ Optional and default parameters ------------
function greetPersonDefault(name = "Default") {
    return `Hello ${name}`;
}
console.log(greetPersonDefault("munna"));
console.log(greetPersonDefault());
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `connecting to ${host} on port ${p} using ${s ? "https" : "http"}`;
}
console.log(connect("localhost", 455, true));
