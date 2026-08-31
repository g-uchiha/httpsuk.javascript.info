"use strict"

function debounce(callback, delay) {
    let timerId;

    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(callback, delay);
    }
}