"use strict"

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [[], [], []];
const arr3 = [4, 4, 4, 2, 2, 7, 9, 9];

//---------------------------------------------

const movedArrRight = [arr1[arr1.length-1]].concat(arr1.slice(0, -1));
const movedArrLeft = arr1.slice(1).concat([arr1[0]]);

console.log(movedArrRight);
console.log(movedArrLeft);

//---------------------------------------------

function hasArrays(arr) {
    for(const item of arr) {
        if(Array.isArray(item)) return true;
    }

    return false;
}

console.log(hasArrays(arr1));
console.log(hasArrays(arr2));
console.log(hasArrays([]));

//---------------------------------------------

function firstUniqueItem(arr) {
    const hash = {};

    for(const item of arr) {
        hash[item] = (hash[item] || 0) + 1;
    }

    for(const item of arr) {
        if(hash[item] === 1) return item;
    }

    return -1;
}

console.log(firstUniqueItem(arr3));
console.log(firstUniqueItem([]));

//---------------------------------------------

function filtration(arr, num) {
    const newArr = [];

    for(const item of arr) {
        if(num <= item) newArr.push(item);
    }

    return newArr;
}