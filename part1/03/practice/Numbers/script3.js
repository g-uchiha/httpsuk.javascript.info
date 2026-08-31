import { askANumber } from "../utils.js";

function convertCtoF() {
    const C = askANumber("temperature in C");

    if(C === undefined) return "Program was canceled";

    const F = (C * 9 / 5 + 32).toFixed(1);

    return `Temperature in F: ${F}`;
}

alert(convertCtoF());