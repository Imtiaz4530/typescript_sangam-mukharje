"use strict";
class BangAccount {
    owner;
    balance = 0;
    #otp = 1578;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error(`Amount must be positive`);
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
    verifyOtp(code) {
        return code === this.#otp;
    }
}
const acc = new BangAccount("Munna");
acc.deposit(100);
