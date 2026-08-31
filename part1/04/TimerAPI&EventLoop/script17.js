"use strict"

function throttle(callback, interval) {
    let func = callback;

    return () => {
        func();
        func = () => {};

        setTimeout(() => {
            func = callback;
        }, interval);
    };
}