import { askANumber, cancelMsg } from "../utils.js";

function returnDifference() {
    const num1 = askANumber("1st number");
    if(num1 === undefined) return cancelMsg;

    const num2 = askANumber("2st number");
    if(num2 === undefined) return cancelMsg;

    return Math.abs(num1 - num2);
}

console.log(returnDifference());