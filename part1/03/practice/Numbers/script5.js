import { askANumber } from "../utils.js";

function decideNumber() {
    const num1 = askANumber("number 1");

    if(num1 === undefined) return "program is canceled.";
    if(num1 % 1 === 0)     return "Ціле число";

    return "Дробове число";
}

alert(decideNumber());