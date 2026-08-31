"use strict"

let fNum = askForNumber();
let result;

if(fNum !== undefined) {
    let operation = askForOperation();

    if(operation !== undefined) {
        let sNum = askForNumber();

        if(sNum !== undefined) {
            if(sNum === 0 && operation === "/") {
                result = "Error: на 0 не можна ділити";
            } else {
                result = operation === "+" ? fNum + sNum :
                         operation === "-" ? fNum - sNum :
                         operation === "*" ? fNum * sNum : fNum / sNum
            }
        }

        alert(`Result of ${fNum} ${operation} ${sNum} = ${result}`);
    }
}

function askForNumber() {
    while (true) {
        const userNumber = prompt("Enter your number");
        const parsedNumber = Number(userNumber);

        if(userNumber === null) {
            alert("Canceled");
            return;
        }

        if(isNaN(parsedNumber)) {
            alert("Invalid value");
            continue;
        }

        return parsedNumber;
    }
}

function askForOperation() {
    while (true) {
        const operation = prompt("Input operation");

        switch (operation) {
            case "+": return "+";
            case "-": return "-";
            case "*": return "*";
            case "/": return "/";
            case null: alert("Canceled"); return;
            default: alert("Invalid value");
        }
    }
}