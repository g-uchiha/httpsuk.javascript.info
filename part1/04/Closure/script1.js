"use strict"

function makeCounter() {
    let count = 0;

    return function() {
        console.log(count++);
    }
}

const counterA = makeCounter();
const counterB = makeCounter();

counterA();
counterA();
counterA();

counterB();
counterB();
counterB();