"use strict"

function calculateTotal(price, quantity) {
    return this.discount
        ? price * quantity * (1 - this.discount)
        : price * quantity;
}

const user1 = { discount: 0.1 };
const user2 = { discount: 0.2 };
const user3 = { discount: 0 };

const users = [user1, user2, user3];

for(const user of users) {
    console.log(calculateTotal.call(user, 100, 3));
}