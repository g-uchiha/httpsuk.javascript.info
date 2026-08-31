"use strict"

function createFunctions(count = 1) {
    const arr = [];

    for(let i = 0; i < count; i++) {
        arr.push(() => i);
    }

    return arr;
}

const arr = createFunctions(10);
console.log(arr[0]());
console.log(arr[5]());
console.log(arr[9]());
