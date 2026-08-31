"use strict"

function delay(func, ms) {
    return function(...args) {
        setTimeout(() => func.call(this, ...args), ms);
    }
}