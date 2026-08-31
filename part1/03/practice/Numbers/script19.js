import { randomLetter } from "../utils.js";

function documentGeneration() {
    let str = "";

    str += randomLetter().toUpperCase();
    str += randomLetter().toUpperCase();
    str += "-";

    for(let i = 0; i < 6; i++) {
        str += Math.floor(Math.random() * 10);
    }

    return str;
}

alert(documentGeneration());