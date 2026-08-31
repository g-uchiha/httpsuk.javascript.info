"use strict"

const num = prompt("Input a number:");
const parsedNum = Number(num);

if(num === null) {
    console.log("Canceled");
} else if(isNaN(parsedNum)) {
    console.log("Not a number");
} else {
    let isPrime = true;

    if(parsedNum < 2) {
        isPrime = false;
    } else {
        for(let i = 2; i < parsedNum; i++) {
            if(parsedNum % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? "просте" : "не просте");
}