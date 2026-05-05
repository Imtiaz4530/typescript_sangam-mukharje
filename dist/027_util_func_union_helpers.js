"use strict";
// ---------  ---------
// Return Type<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: "Munna",
        log: isExtraInfo ? "details" : undefined,
    };
}
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const resultInfo1 = ["Imtiaz", 22];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());
