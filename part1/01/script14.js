"use strict"

const allowedSymbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

while (true) {
    const symbolCount = prompt("Symbol's count in your password");
    const parsedCount = Math.floor(Number(symbolCount));

    if(symbolCount === null) {
        alert("Canceled");
        break;
    } else if(isNaN(parsedCount) || parsedCount < 5) {
        alert("Invalid value");
        continue;
    }

    alert(`Your password: ${generatePassword(parsedCount)}`);
    break;
}

function generatePassword(num) {
    let userPass = "";

    for(let i = 0; i < num; i++) {
        userPass += allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)];
    }

    return userPass;
}