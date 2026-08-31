"use strict"

const account = {
    balance: 1000,

    withdraw(amount) {
        return this.balance - amount;
    }
};

function execute(operation, amount) {
    operation = operation.bind(account);
    return operation(amount);
}

console.log(
    execute(account.withdraw, 200)
);