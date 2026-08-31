"use strict"

function lengthLimit(length) {
    return function(str) {
        console.log(str.length >= 1 && str.length <= length);
    }
}

const check = lengthLimit(5);
check("hello");
check("world");
check("cat");
check("sdlkfjsldfjs");
