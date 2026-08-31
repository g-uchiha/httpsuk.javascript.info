"use strict"

function countCharacter(str, char) {
    let count = 0;

    for(const letter of str) {
        if(letter === char) count++;
    }

    return count;
}

console.log(countCharacter("banana", "a"));
