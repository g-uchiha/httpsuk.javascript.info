import { askANumber, isDiapason, cancelMsg } from "../utils.js";

function creditCalculator() {
    const sum = askANumber("a sum of credit");
    if(sum === undefined) return cancelMsg;
    if(!isDiapason(sum, 1, 15000)) return "your credit limit 15000";

    const percent = askANumber("a percent per year");
    if(percent === undefined) return cancelMsg;
    if(!isDiapason(percent, 12, 35)) return "percent diapason 12-35% per year";

    const result = sum + (sum / 100 * percent);

    return `Sum of your credit after year: ${result.toFixed(2)}`;
}

alert(creditCalculator());