"use strict"

function commandParser(str) {
    const divider = str.indexOf(" ");
    const command = str.slice(0, divider);
    const args = str.slice(divider + 1);

    return {command, args};
}

console.log(commandParser("move north more args"));