"use strict"

function shiftText(str) {
    if(str === "" || str === undefined) return "";

    let result = "";

    for(const char of str) {
        const code = char.charCodeAt(0);

        if(char === " ") {
            result += char;
            continue;
        }

        if(code >= 65 && code <= 90) {
            result += String.fromCharCode(
                code === 90 ? 65 : code + 1
            );

            continue;
        }

        if(code >= 97 && code <= 122) {
            result += String.fromCharCode(
                code === 122 ? 97 : code + 1
            );

            continue;
        }

        result += char;

    }

    return result;
}

console.log(shiftText("Catz"));