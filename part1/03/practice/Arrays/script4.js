"use strict"

function mostLongSequence(arr) {
    if(arr.length === 0) return 0;
    const sequences = [];
    let count = 1;

    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] === arr[i-1] + 1) {
            count++;
        } else {
            sequences.push(count);
            count = 1
        }
    }

    return Math.max(...sequences);
}

const arr = [5, 6, 9, 8, 7, 1, 2, 3, 4];

console.log(mostLongSequence(arr));
console.log(mostLongSequence([]));