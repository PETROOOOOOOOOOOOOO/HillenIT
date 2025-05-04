class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.warn("Сума поповнення має бути більшою за 0");
            return;
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.warn("Сума зняття має бути більшою за 0");
            return;
        }
        if (amount > this.balance) {
            console.warn("Недостатньо коштів на рахунку");
            return;
        }
        this.balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300
