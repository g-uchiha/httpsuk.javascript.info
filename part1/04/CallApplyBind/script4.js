"use strict"

const user = {
    firstName: "John",
    lastName: "Smith",
};

function introduce(role, experience, language) {
    return `${this.firstName} ${this.lastName} - ${role}, ${experience} years, ${language}`;
}

console.log(introduce.call(user, "Frontend Developer", 2, "JavaScript"));