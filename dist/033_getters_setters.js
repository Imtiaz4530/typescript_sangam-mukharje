"use strict";
class Temperature {
    #c = 0;
    constructor(celsius) {
        this.celcius = celsius;
    }
    get celcius() {
        return this.#c;
    }
    set celcius(value) {
        if (Number.isNaN(value))
            throw new Error("not a number");
        this.#c = value;
    }
    get fahrenheit() {
        return this.#c * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.#c = (value - 32) / 1.8;
    }
}
const temp = new Temperature(100);
console.log(temp.celcius);
console.log(temp.fahrenheit);
