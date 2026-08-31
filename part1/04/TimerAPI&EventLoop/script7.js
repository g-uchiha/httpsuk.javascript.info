"use strict"

function createCounter(start) {
    let count = start;

    return () => {
        setTimeout(() => {
            count++;
            console.log(`count: ${count}`);
        }, 1000);
    }
}

const counterA = createCounter(0);
const counterB = createCounter(100);

counterA();
counterA();
counterB();
counterA();
counterB();