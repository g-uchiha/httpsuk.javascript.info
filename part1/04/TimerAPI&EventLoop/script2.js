"use strict"

function scheduleMessage(message, delay) {
    const timerId = setTimeout(() => {
        console.log(message);
    }, delay);

    return () => {
        clearTimeout(timerId);
    };
}

const cancel = scheduleMessage("test1", 3000);

setTimeout(cancel, 1000);