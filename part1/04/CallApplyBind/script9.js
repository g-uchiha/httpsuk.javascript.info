"use strict"

function spy(func) {
    function wrapper() {
        wrapper.calls.push([...arguments]);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];
    return wrapper;
}

function sum(a, b) {
    return a + b;
}

const calculator = {
    phrase: "hello world",

    multiply(a, b) {
        return (a * b) + " " + this.phrase;
    },
};

const spiedSum = spy(sum);
console.log(spiedSum(1, 2));
console.log(spiedSum(5, 10));
console.log(spiedSum.calls);

calculator.multiply = spy(calculator.multiply);
console.log(calculator.multiply(2, 3));
console.log(calculator.multiply(4, 5));
console.log(calculator.multiply.calls);