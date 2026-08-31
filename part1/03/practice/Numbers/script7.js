import { askANumber, cancelMsg } from "../utils.js";

function returnRound() {
    const num1 = askANumber("any number");
    if(num1 === undefined) return cancelMsg;

    return Math.round(num1);
}

alert(returnRound());