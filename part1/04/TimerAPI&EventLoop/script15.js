"use strict"

function getStatus() {
    const statuses = ["pending", "done"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function poll(getStatus, interval) {
    setTimeout(() => {
        const status = getStatus();

        console.log(`poll status: ${status}`);

        if (status === "pending") {
            poll(getStatus, interval);
        }
    }, interval);
}

poll(getStatus, 1500);