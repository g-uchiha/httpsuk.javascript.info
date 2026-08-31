"use strict"

const priceForUSD = 44.21;
let askOperation = true;

const cancel = "Operation is cancelled";
const incorrect = "Incorrect value";

while(askOperation) {
    const sum = prompt("Введіть суму яку бажаєте обміняти:");
    const parsedSum = Number(sum);
    let message = "";

    if(sum === null) {
        message = cancel;
        alert(message);
        break;
    }

    if(isNaN(parsedSum)) {
        message = incorrect;
        alert(message);
        continue;
    }

    const result = (parsedSum / priceForUSD).toFixed(2);
    alert(`You get ${result} USD`);
    askOperation = confirm("Use again?");
}