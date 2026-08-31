import { askANumber, cancelMsg } from "../utils.js";

function passportControl() {
    while (true) {
        const age = askANumber("your age");

        if(age === undefined) return cancelMsg;

        if(age < 1) {
            alert("Too less value...");
            continue;
        }

        if(age < 18) return "refusal!";
        if(age < 60) return "access allowed!";

        return "addition checking...";
    }
}

alert(passportControl());