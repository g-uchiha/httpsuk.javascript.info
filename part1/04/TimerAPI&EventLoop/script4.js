"use strict"

setTimeout(() => {
    console.log("first timer done");

    setTimeout(() => {
        console.log("second timer done");

        setTimeout(() => {
            console.log("third timer done");
        }, 1000);
    }, 1000);
}, 1000);