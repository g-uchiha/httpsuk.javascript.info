import { askANumber } from "../utils.js";

function arithmeticMean() {
    const errMsg = "Program was canceled";

    const num1 = askANumber("1st");
    if(num1 === undefined) return errMsg;

    const num2 = askANumber("2nd");
    if(num2 === undefined) return errMsg;

    const num3 = askANumber("3rd");
    if(num3 === undefined) return errMsg;

    return ((num1 + num2 + num3) / 3).toFixed(2);
}

alert(arithmeticMean());