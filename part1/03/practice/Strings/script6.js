"use strict"

function maskCard(cardNumber) {
    if(cardNumber.length < 13 || cardNumber.length > 19) {
        return "fuck you bitch!!!";
    }

    return "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
}

console.log(maskCard("1234567812345678123"));