"use strict"

function once(fn) {
    return function(...args) {
        fn(...args);
        fn = () => {};
    }
}

const hello1 = once(() => console.log("Hello World!"));
hello1();
hello1();
hello1();

const world = once((a, b, c) => console.log(a + b + c));
world(2, 5, 10);
world(7, 9, 20);
world(9, 4, 50);
