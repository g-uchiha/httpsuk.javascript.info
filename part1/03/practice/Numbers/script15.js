import { askANumber, isDiapason, cancelMsg } from "../utils.js";

function ageInDays() {
    const age = askANumber("your age");
    if(age === undefined) return cancelMsg;
    if(!isDiapason(age, 1, 120)) return "incorrect age";

    return age * 365;
}

alert(ageInDays());