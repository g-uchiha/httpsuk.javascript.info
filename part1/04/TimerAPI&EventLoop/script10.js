"use strict"

const tasks = [
    { name: "A", delay: 10000 },
    { name: "B", delay: 3000 },
    { name: "C", delay: 5000 }
];

function scheduler(tasks) {
    let timers = [];

    for(let task of tasks) {
        timers.push(setTimeout(() => {
            console.log(`name: ${task.name}; delay: ${task.delay} ms;`);
        }, task.delay));
    }

    return () => {
        for(let timer of timers) {
            clearTimeout(timer);
        }
    };
}

const timer = scheduler(tasks);

setTimeout(() => {
    timer();
}, 4000);