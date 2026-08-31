import {askANumber, cancelMsg} from "../utils.js";

function calculateExpLev() {
    let level = 0;
    let remainder = 0;

    while (true) {
        const exp = askANumber("your experience");
        if(exp === undefined) return cancelMsg;

        if(exp < 0) {
            alert("Too less, invalid value");
            continue;
        }

        if(exp < 100) {
            remainder = 100 - exp;
            break;
        }

        if(exp % 100 === 0) {
            level = exp / 100;
            break;
        }

        remainder = 100 - (exp % 100);
        level = Math.floor(exp / 100);
        break;
    }

    return `Level: ${level}; \nRemainder to next level: ${remainder}`;
}

alert(calculateExpLev());