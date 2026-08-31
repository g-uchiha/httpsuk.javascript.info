"use strict"

function createScheduler() {
    let timers = [];

    return {
        schedule: (callback, delay) => {
            let timer;

            timer = setTimeout(() => {
                callback();
                timers = timers.filter((item) => item !== timer);
            }, delay);

            timers.push(timer);
        },

        cancelAll: () => {
            for(const timer of timers) {
                clearTimeout(timer);
            }

            timers = [];
        },
    };
}