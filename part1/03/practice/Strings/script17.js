"use strict"

function countWords(text) {
    const parsedText = text + " ";
    let count = 0;

    for(let i = 0; i < parsedText.length; i++) {
        if(parsedText[i] === " ") count++;
    }

    return count;
}

console.log(countWords("I love JavaScript"));
console.log(countWords("   Hello   "));
console.log(countWords(countWords("I  love  JavaScript")));