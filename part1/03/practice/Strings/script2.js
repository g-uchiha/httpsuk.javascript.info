"use strict"

function capitalize(str = "") {
    return str.length === 0 ? str : str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("a"));
console.log(capitalize("hello"));
console.log(capitalize(""));