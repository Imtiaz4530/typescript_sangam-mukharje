"use strict";
class UserN15 {
    id;
    name;
    email;
    createdAt = new Date(); // initialize at declaration
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new UserN15("1", "munna");
const result5 = new UserN15("2", "imtiaz", "imtiaz@gmail.com");
// Bad practice 01 -> for property a there is no initializer or didnot assign in constructor
// class Bad1 {
//     a: string
//     constructor() {}
// }
