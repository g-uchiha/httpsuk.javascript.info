"use strict"

function countVowels(str) {
    const vowels = "aeiou";
    const str1 = str.toLowerCase();
    let count = 0;

    for(const char of str1) {
        if(vowels.includes(char)) count++;
    }

    return count;
}

console.log(countVowels("Good evening!"));