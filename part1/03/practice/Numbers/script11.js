import { askANumber, cancelMsg } from "../utils.js";

let balance = 15000;

function takeMoney() {
    const num1 = askANumber("how much money would you take?");

    if(num1 === undefined) return cancelMsg;
    if(num1 <= 0)          return "too small value";
    if(num1 > balance)     return "too large value";

    balance -= num1;
    return `Now your balance is: ${balance};`;
}

alert(takeMoney());