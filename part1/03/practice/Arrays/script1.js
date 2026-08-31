"use strict"

const arr = [1, 2, 3, 4, 5];

function sum(arr) {
    let sum = 0;
    for(const item of arr) sum += arr[item];
    return sum;
}

function max(arr) {
    if(arr.length === 0) return 0;

    let num = arr[0];

    for(const item of arr) {
        if(arr[item] > num) num = arr[item];
    }

    return num;
}

function min(arr) {
    if(arr.length === 0) return 0;

    let num = arr[0];

    for(const item of arr) {
        if(arr[item] < num) num = arr[item];
    }

    return num;
}

function evenNumbers(arr) {
    if(arr.length === 0) return 0;
    let pairs = 0;

    for(const i of arr) {
        if(arr[i] % 2 === 0) pairs++;
    }

    return pairs;
}

function reverseArray(arr) {
    if(arr.length === 0) return [];
    const newArr = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(reverseArray(arr));