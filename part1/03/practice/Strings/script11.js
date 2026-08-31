"use strict"

function loginGenerator(fullName) {
    const space = fullName.indexOf(" ");
    const fName = fullName.slice(0, space);
    const lName = fullName.slice(space + 1);

    const char1 = fName[0].toLowerCase();
    const char2 = lName[0].toLowerCase();

    return `${char1+fName.slice(1)}_${char2+lName.slice(1)}`;
}

console.log(loginGenerator("John Smith"));
console.log(loginGenerator("Volodymyr Gerasymovich"));
console.log(loginGenerator("Viktor Dzhulai"));