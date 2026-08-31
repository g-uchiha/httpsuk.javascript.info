"use strict"

function debounce(func, ms) {
    let timerId = 0;

    function wrapper(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), ms);
    }

    return wrapper;
}