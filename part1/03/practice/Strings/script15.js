"use strict"

function initialGenerator(fullName) {
    const divider = fullName.indexOf(" ");
    return `${fullName[0]}.${fullName[divider+1]}.`;
}

console.log(initialGenerator("John Smith"));
console.log(initialGenerator("Viktor Dzhulai"));
