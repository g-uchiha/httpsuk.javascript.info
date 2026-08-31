"use strict"

const num1 = prompt("Enter a number1:");
const num2 = prompt("Enter a number2:");
const num3 = prompt("Enter a number3:");

const parsedNum1 = Number(num1);
const parsedNum2 = Number(num2);
const parsedNum3 = Number(num3);

if(
    num1 === null || num1 === '' ||
    num2 === null || num2 === '' ||
    num3 === null || num3 === ''
) {
    alert("Canceled");
} else if(isNaN(parsedNum1) || isNaN(parsedNum2) || isNaN(parsedNum3)) {
    alert("Invalid value");
} else {
    if(parsedNum1 >= parsedNum2 && parsedNum1 >= parsedNum3) {
        alert(parsedNum1);
    } else if(parsedNum2 >= parsedNum1 && parsedNum2 >= parsedNum3) {
        alert(parsedNum2);
    } else {
        alert(parsedNum3);
    }
}
