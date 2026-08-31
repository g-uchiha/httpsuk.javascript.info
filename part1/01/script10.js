"use strict"

const programNumber = 7;
let asking = true;

const stateInvalid = "Incorrect value";
const stateLow     = "Too less";
const stateHigh    = "Too much";
const stateWin     = "Congratulations!";

let message = "";

while (asking) {
    const userNumber = prompt("Enter your number");
    const parsedNumber = Number(userNumber);

    message = userNumber === null || isNaN(parsedNumber) ? stateInvalid :
              parsedNumber < programNumber ? stateLow :
              parsedNumber > programNumber ? stateHigh : stateWin;

    alert(message);
    asking = message === stateWin ? false : confirm("Try again?");
}