import { askANumber, isDiapason, cancelMsg } from "../utils.js";

function lottery() {
    while (true) {
        const num1 = askANumber("number from 1 to 100");
        if(num1 === undefined) return cancelMsg;

        if(!isDiapason(num1, 1, 100)) {
            alert("i said diapason 1-100");
            continue;
        }

        const random = Math.floor(Math.random() * 100 + 1);
        if(num1 === random) alert('You win!!!');
        else alert(`You lost, it was ${random}...`);
    }
}

alert(lottery());