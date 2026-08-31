"use strict"

function func() {
    const obj = {};

    function inner() {
        console.log(obj);
    }

    const timerId = setTimeout(inner, 10000);

    return clearTimeout(timerId);
}