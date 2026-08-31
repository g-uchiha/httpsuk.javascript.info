"use strict"

function censor(text) {
    const forbidden = {
        0: "stupid",
        1: "idiot"
    };

    for(const key in forbidden) {
        if(text.includes(forbidden[key])) return true;
    }

    return false;
}

const text = `Lorem ipsum dolor stupid sit amet, consectetur 
stupid adipisicing elit. Adipisci stupid consectetur distinctio est, 
ex laudantium idiot maxime natus idiot provident quas suscipit 
tempora! Adipisci idiot assumenda debitis facere, id laborum nam 
neque quis! Animi!`;

console.log(censor(text));
console.log(censor(""));
