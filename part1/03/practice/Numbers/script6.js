import { askANumber, cancelMsg } from "../utils.js";

function countNumbers() {
    const num1 = askANumber("any number");
    if(num1 === undefined) return cancelMsg;

    const str = String(num1);
    let count = 0;

    for(const char of str) {
        if(char >= "0" && char <= "9") count++;
    }

    return count;
}

alert(countNumbers());