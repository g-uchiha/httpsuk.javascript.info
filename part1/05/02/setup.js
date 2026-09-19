"use strict";

window.AppNamespace = {
    checkValidNumber(num) {
        const value = Number(num);

        if(!Number.isFinite(value)) {
            throw new TypeError("Значення має бути числовим!");
        }

        if(value <= 0) {
            throw new RangeError("Число має бути додатнім!");
        }

        return value;
    }
};