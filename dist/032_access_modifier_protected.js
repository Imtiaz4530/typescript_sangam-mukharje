"use strict";
// Protected -> its own class and sub classes
class Animal {
    energy = 50;
    eat(amount) {
        this.energy = Math.min(100, this.energy + amount);
    }
}
class Dog extends Animal {
    run() {
        this.energy -= 10;
    }
    status() {
        return this.energy;
    }
}
const d = new Dog();
d.eat(10);
d.run();
console.log(d.status());
