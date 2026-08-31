"use strict"

const txt = "JavaScript JavaScript map set map map object object object object";

function mostPopularWord(txt) {
    const parsedList = new Map();
    const words = txt.split(" ");
    let word = "";
    let count = 0;

    for(const item of words) {
        const count = parsedList.get(item);
        parsedList.set(item, (count === undefined ? 1 : count + 1));
    }

    for(const item of parsedList) {
        if(item[1] > count) {
            word  = item[0];
            count = item[1];
        }
    }

    return {word, count};
}

console.log(mostPopularWord(txt));