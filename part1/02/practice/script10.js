"use strict"

const wallet = {
    name: "Wallets",
    money: 1000,

    valueOf() {
        return this.money;
    },

    toString() {
        return this.name;
    }
};

alert(wallet)
alert(wallet + 500);