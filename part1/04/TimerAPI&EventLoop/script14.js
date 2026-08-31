"use strict"

function operation() {
    const results = [true, false];
    return results[Math.floor(Math.random() * results.length)];
}

function retry(operation, attempts, delay, tryCount = 1) {
    setTimeout(() => {
        const tryResult = operation();
        const message   = `result: ${tryResult}; try count: ${tryCount}; delay: ${delay};`;

        if(tryResult) return console.log(message);

        if(tryCount === attempts) {
            console.log(message);
            return console.log("damn it...");
        }

        console.log(message);
        retry(operation, attempts, delay * 2, tryCount + 1);
    }, delay);
}

retry(operation, 5, 1000);
