"use strict"

function countdown(n) {
    if(n === 0) return;

    console.log(n);
    countdown(n - 1);
}

//--------------------------------

function sumTo(n) {
    if(n === 0) return n;
    return n + sumTo(n - 1);
}

//--------------------------------

function factorial(n) {
    if(n < 0) return `Error: no nums less zero`;
    if(n === 0 || n === 1) return 1;

    return n * factorial(n-1);
}

//--------------------------------

function pow(a, b) {
    if(b === 1) return a;
    if(b === 0) return 1;

    return a * pow(a, b - 1);
}

//--------------------------------

function countDigits(n) {
    const num = n < 0 ? Math.abs(n): n;
    if(num < 10) return 1;

    return 1 + countDigits(Math.floor(num / 10));
}

//--------------------------------