"use strict"

function isEmail(email) {
    if(!email.includes("@")) return false;
    const pesyk = email.indexOf("@");
    return email.slice(pesyk).includes(".");
}

console.log(isEmail(""));
console.log(isEmail("dzulajvita@gmail.com"));
