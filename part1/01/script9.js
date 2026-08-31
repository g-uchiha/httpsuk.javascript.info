"use strict"

const userNumber = prompt("Enter your number");
const parsedNumber = Number(userNumber);

if(userNumber === null) {
    console.log("Canceled");
} else if(isNaN(parsedNumber)) {
    console.log("Is not a number");
} else {
    let count = 0;
    const stringNumber = String(parsedNumber);

    for(let i = 0; i < stringNumber.length; i++) {
        if(stringNumber[i] >= "0" && stringNumber[i] <= "9") count++;
    }

    console.log(count);
}