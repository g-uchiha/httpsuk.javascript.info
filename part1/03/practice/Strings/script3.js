"use strict"

function isPalindrome(str) {
    let reversedStr = "";

    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return str === reversedStr;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("house"));
console.log(isPalindrome("levelhouselevel"));
