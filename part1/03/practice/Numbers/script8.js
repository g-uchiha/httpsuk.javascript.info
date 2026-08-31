"use strict"

function generatePassword() {
    let str = "";

    for(let i = 0; i < 6; i++) {
        str += Math.floor(Math.random() * 10);
    }

    return str;
}

console.log(generatePassword());
console.log(generatePassword());
console.log(generatePassword());