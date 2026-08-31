"use strict"

function BankAccount(deposit) {
    let balance = deposit;

    this.getBalance = function() {
        return balance;
    }

    this.deposit = function(sum) {
        balance += sum;
        return this.getBalance();
    }

    this.withdraw = function(sum) {
        if((balance - sum) < 0) return "not enough balance";
        balance -= sum;
        return this.getBalance();
    }
}

function createBankAccount(deposit) {
    if(!isNaN(deposit) && deposit >= 1) {
        return new BankAccount(deposit);
    }
}

const account1 = createBankAccount(250);
console.log(account1.getBalance());
account1.deposit(700);
account1.withdraw(80);
console.log(account1.getBalance());
console.log(account1.balance);
console.log(account1);

