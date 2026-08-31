"use strict"

function isStrongPassword(password) {
    const requiredCount = 8;
    const alphabetLarge = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    const hasCount = password.length >= requiredCount;
    let hasLargeLetter = false;
    let hasSmallLetter = false;
    let hasNumbers = false;

    for(const char of password) {
        if(alphabetLarge.includes(char)) hasLargeLetter = true;
        if(alphabetSmall.includes(char)) hasSmallLetter = true;
        if(numbers.includes(char)) hasNumbers = true;
    }

    return hasCount && hasLargeLetter && hasSmallLetter && hasNumbers;
}

console.log(isStrongPassword(""));
console.log(isStrongPassword("11111111"));
console.log(isStrongPassword("AAAaaa111"));
