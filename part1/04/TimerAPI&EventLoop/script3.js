"use strict"

function first() {
    console.log("first start");

    setTimeout(() => {
        console.log("timer");
    }, 0);

    console.log("first end");
}

first();

console.log("after");