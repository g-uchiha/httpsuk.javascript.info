import { askANumber } from "../utils.js";

function generateRandomNum() {
    const min = askANumber("min number");
    let   max;
    if(min === undefined) return "program is canceled.";

    while (true) {
        max = askANumber("max number");

        if(max === undefined) return "program is canceled.";

        if(max <= min) {
            alert("max cannot be less than min or be like it");
            continue;
        }

        break;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(generateRandomNum());