"use strict";

function getFullName() {
    return this.firstName + " " + this.lastName;
}

const user1 = {
    firstName: "John",
    lastName: "Smith"
};

const user2 = {
    firstName: "Anna",
    lastName: "Brown"
};

console.log(getFullName.call(user1));
console.log(getFullName.call(user2));
