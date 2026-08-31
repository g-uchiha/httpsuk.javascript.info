"use strict"

function showToast(message, duration) {
    console.log("SHOW:", message);

    const timerId = setTimeout(() => {
        console.log("HIDE:", message);
    }, duration);

    return () => {
        clearTimeout(timerId);
        console.log("HIDE:", message);
    }
}