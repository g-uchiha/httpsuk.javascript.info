"use strict"

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];
const arr3 = [];

const arr4 = ["a", "b", "c"];
const arr5 = ["a", "a", "f", "b", "c", "e"];
const arr6 = ["d", "e", "f", "g", "a", "i"];

function isUpStairs(arr) {
    if(arr.length === 0) return false;

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i-1]) return false;
    }

    return true;
}

function ownIndexOf(arr, elem) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) return i;
    }

    return -1;
}

function deleteDuplicates(arr) {
    if(arr.length === 0) return [];
    const newArr = [];

    for(const item of arr) {
        if(!newArr.includes(item)) newArr.push(item);
    }

    return newArr;
}

function concat(...arrays) {
    const arr = [];

    for(const i of arrays) {
        for(const j of i) {
            arr.push(j);
        }
    }

    return arr;
}

function intersection(arr1, arr2) {
    const parsedArr1 = deleteDuplicates(arr1);
    const parsedArr2 = deleteDuplicates(arr2);
    const newArr = [];

    for(const i of parsedArr1) {
        if(parsedArr2.includes(i)) newArr.push(i);
    }

    return newArr;
}

console.log(isUpStairs(arr1));
console.log(isUpStairs(arr2));
console.log(isUpStairs(arr3));

console.log("//////////////");

console.log(ownIndexOf(arr4, "d"));
console.log(deleteDuplicates(arr4));
console.log(deleteDuplicates(arr5));

console.log("//////////////");

console.log(concat(arr1, arr2, arr3, arr4, arr5));
console.log(intersection(arr5, arr6));