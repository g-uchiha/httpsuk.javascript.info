"use strict"

function forward(func, context, args) {
    return func.apply(context, args);
}

function sum(a, b, c) {
    return this.multiplier * (a + b + c);
}

const obj = {
    multiplier: 10
};

console.log(forward(sum, obj, [1, 2, 3]));