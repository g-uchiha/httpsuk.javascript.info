"use strict"

let sumFor = 0;

for(let i = 1; i <= 100; i++) {
    sumFor += i;
}

let i = 1;
let sumWhile = 0;

while (i <= 100) {
    sumWhile += i;
    i++;
}

console.log(sumFor);
console.log(sumWhile);
