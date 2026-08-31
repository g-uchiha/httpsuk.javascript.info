"use strict"

const user = {
    name: "John",

    sayHi() {
        console.log(`Hello, ${this.name}`);
    }
};

function execute(callback, ...args) {
    callback(...args);
}

user.sayHi = user.sayHi.bind(user);
execute(user.sayHi);