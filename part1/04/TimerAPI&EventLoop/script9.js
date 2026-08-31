"use strict"

const tasks = [
    () => console.log("A"),
    () => console.log("B"),
    () => console.log("C"),
    () => console.log("D")
];

function runSequentially(tasks, delay) {
    let i = 0;

    const intervalId = setInterval(() => {
        if(tasks[i]) {
            tasks[i]();
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

runSequentially(tasks, 1500);