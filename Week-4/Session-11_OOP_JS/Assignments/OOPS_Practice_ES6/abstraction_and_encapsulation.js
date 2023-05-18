class BankAccount {
  #accountNumber;
  balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  getBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  #minimumBalance;

  constructor(accountNumber, balance, accountHolderName, minimumBalance) {
    super(accountNumber, balance, accountHolderName);
    this.#minimumBalance = minimumBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount < this.#minimumBalance) {
      console.log(
        "Withdrawal failed: Balance cannot go below minimum balance."
      );
    }

    this.balance -= amount;
  }
}

// Example usage
const checking = new CheckingAccount(123456789, 1000, "John Smith");
checking.deposit(500);
console.log(checking.getBalance()); // Output: 1500
checking.withdraw(200);
console.log(checking.getBalance()); // Output: 1300

const savings = new SavingsAccount(987654321, 5000, "Jane Doe", 1000);
savings.deposit(1000);
console.log(savings.getBalance()); // Output: 6000
savings.withdraw(3000);
console.log(savings.getBalance()); // Output: 3000
savings.withdraw(3000); // Output: "Withdrawal failed: Balance cannot go below minimum balance."
console.log(savings.getBalance()); // Output: 0
