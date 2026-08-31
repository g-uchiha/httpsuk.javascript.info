"use strict"

function countdown(start, onTick, onComplete) {
    let count = start;

    const intervalId = setInterval(() => {
        onTick(count);
        count--;

        if(count === 0) {
            clearInterval(intervalId);
            onComplete();
        }
    }, 1000);
}

countdown(
    5,
    value => console.log(value),
    () => console.log("GO!")
);