import { askANumber, cancelMsg } from "../utils.js";

const tax = 18;
const militaryService = 5;

function taxDeduction() {
    const salary = askANumber("your salary");
    if(salary === undefined) return cancelMsg;

    return +(salary * (1 - (tax + militaryService) / 100)).toFixed(2);
}

console.log(taxDeduction());