"use strict"

function createTimer(name) {
    let count = 0;

    return function () {
        count++;
        console.log(name, count);
    };
}

const timerA = createTimer("A");
const timerB = createTimer("B");

timerA();
timerA();
timerA();

timerB();
timerB();
timerB();
timerB();
timerB();
