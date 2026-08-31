"use strict"

const arr5 = ["a", "a", "f", "b", "c", "e"];
const arr6 = ["d", "e", "f", "g", "a", "i"];

const arr7 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

function arrDifference(arr1, arr2) {
    const newArr = [];

    for(const item of arr1) {
        if(!arr2.includes(item)) newArr.push(item);
    }

    return newArr;
}

function calculateSameValues(arr1) {
    const values = {};

    for(const item of arr1) {
        if(item in values) {
            values[item]++;
        } else {
            values[item] = 1;
        }
    }

    return values;
}

console.log(arrDifference(arr5, arr6));
console.log(calculateSameValues(arr7));