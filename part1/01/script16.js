"use strict"

const overtime = 160;
let hours = saveValue("How many hours?");
let price = saveValue("Price for 1 hour?");
let result = 0;

if(hours !== null) {
    if(price !== null) {
        if(hours <= overtime) {
            result = hours * price;
            alert(`Your salary: ${result}`);
        } else {
            result = (overtime * price) + ((hours - overtime) * price * 1.5);
            alert(`Your salary: ${result}`);
        }
    }
}

function saveValue(msg) {
    while (true) {
        const value = prompt(msg);
        const parsedValue = Number(value);

        if(value === null) return null;

        if(isNaN(parsedValue) || parsedValue <= 0) {
            alert("Please enter a valid value");
            continue;
        }

        return parsedValue;
    }
}