"use strict"

function getLongestWord(text) {
    const str = text + " ";
    let pos = 0;
    let longestWord = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            const newWord = str.slice(pos, i);
            pos = i + 1;

            if(newWord.length > longestWord.length) {
                longestWord = newWord;
            }
        }
    }

    return longestWord;
}

console.log(getLongestWord("I love JavaScript very much"));