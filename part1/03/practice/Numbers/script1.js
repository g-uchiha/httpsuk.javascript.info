"use strict"

console.log(Main());

function Main() {
    const cancelMsg = "You canceled operation";

    const num1 = askANumber("1st");
    if(num1 === undefined) return cancelMsg;

    const num2 = askANumber("2nd");
    if(num2 === undefined) return cancelMsg;
    if(num2 === 0) return "Cannot divide by zero";

    return num1 / num2;
}

function askANumber(param) {
    while(true) {
        const num1 = prompt(`Enter a ${param} number`);
        const parsedNumber = Number(num1);

        if(num1 === null) return;

        if(!isFinite(parsedNumber)) {
            alert("Incorrect value");
            continue;
        }

        return parsedNumber;
    }
}