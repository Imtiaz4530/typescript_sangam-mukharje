class BangAccount {
  public owner: string;

  private balance: number = 0;

  #otp = 1578;
  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error(`Amount must be positive`);
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

  verifyOtp(code: number) {
    return code === this.#otp;
  }
}

const acc = new BangAccount("Munna");
acc.deposit(100);
