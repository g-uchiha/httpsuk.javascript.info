"use strict"

function codeGenerator(title) {
    const threeLetters = title.slice(0, 3).toUpperCase();

    return `${threeLetters}-${threeLetters.length+2}`;
}

console.log(codeGenerator("Gaming Mouse"));