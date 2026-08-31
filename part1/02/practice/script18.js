"use strict"

function BankProfile(owner, balance) {
    this.owner   = owner;
    this.balance = balance;

    this.deposit = function(sum) {
        this.balance += sumValidation(sum);
    };

    this.withdraw = function(sum) {
        const sumTo = sumValidation(sum);

        if(this.balance - sumTo >= 0) {
            this.balance -= sumTo;
        }
    };

    this.showInfo = function() {
        return `Name: ${this.owner}, Balance: ${this.balance}`;
    }
}

function createBankProfile(owner, balance) {
    if(owner === undefined || balance === undefined) return;
    if(sumValidation(balance) < 0) return;

    return new BankProfile(owner, balance);
}

function sumValidation(sum) {
    const parsedSum = Number(sum);
    if(sum === undefined || parsedSum < 0 || isNaN(parsedSum)) return 0;
    return parsedSum;
}

const user1 = createBankProfile("Viktor", 1000);
console.log(user1.showInfo());
user1.deposit(700);
user1.withdraw(500);
console.log(user1.showInfo());