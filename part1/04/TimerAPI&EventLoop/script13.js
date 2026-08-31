"use strict"

function createSession(timeout) {
    let timerId = 0;

    function inner() {
        timerId = setTimeout(() => {
            console.log("Session expired");
        }, timeout);
    }

    inner();

    return () => {
        clearTimeout(timerId);
        inner();
    }
}