"use strict"

const list1 = ["a", "b", "c"];
const list2 = ["a", "b", "c", 1, 2, 3, null, undefined, {}];
const list3 = [1, 2, 3];

console.log(list1.join("\n"));

function isOnlyNumbers(arr) {
    for(const item of arr) {
        if(typeof item !== "number") return false;
    }

    return true;
}

console.log(isOnlyNumbers(list2));
console.log(isOnlyNumbers(list3));
