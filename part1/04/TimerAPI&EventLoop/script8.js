"use strict"

// function delay(fn, ms) {
//     return setTimeout(fn, ms);
// }

// function repeat(callback, interval) {
//     const intervalId = setInterval(callback, interval);
//
//     return () => {
//         clearInterval(intervalId);
//     };
// }

function repeatUntil(callback, interval, condition) {
    let count = 0;

    const intervalId = setInterval(() => {
        callback();
        console.log(count);
        if(count === condition) clearInterval(intervalId);
    }, interval);
}