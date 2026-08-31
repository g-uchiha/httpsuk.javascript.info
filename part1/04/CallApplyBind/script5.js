"use strict"

function calculate(a, b, c, d) {
    return this.multiplier * (a + b + c + d);
}

const calculator = {
    multiplier: 2
};

const numbers = [1, 2, 3, 4];

console.log(calculate.call(calculator, ...numbers));
console.log(calculate.apply(calculator, numbers));
