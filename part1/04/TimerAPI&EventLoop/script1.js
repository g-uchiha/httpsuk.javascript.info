"use strict"

let countA = 0;
let countB = 0;

const counterA = setInterval(() => {
    countA++;
    console.log(countA);

    if(countA === 5) {
        clearInterval(counterA);
        console.log("done");
    }
}, 1000);

function counterB() {
    setTimeout(() => {
        countB++;
        console.log(countB);

        if(countB === 5) {
            console.log("done");
        } else {
            counterB();
        }
    }, 1000);
}

counterB();