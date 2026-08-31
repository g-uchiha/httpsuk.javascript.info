"use strict"

const userLogin = "admin";
const userPassword = "qwerty";
let tryAuthorize = true;

while (tryAuthorize) {
    const userInputLogin = prompt("Enter login:");

    if (userInputLogin === null) break;

    if (userInputLogin === userLogin) {
        while (tryAuthorize) {
            const userInputPassword = prompt("Enter password:");

            if (userInputPassword === null) {
                tryAuthorize = false;
                break;
            }

            if (userInputPassword === userPassword) {
                alert("You're logged in!");
                tryAuthorize = false;
            } else {
                alert("Incorrect password");
                offerTryAgain();
            }
        }
    } else {
        alert("User not found!");
        offerTryAgain()
    }
}

function offerTryAgain() {
    const tryAgain = confirm("Try again?");

    if (!tryAgain) {
        alert("Authorization was canceled!");
        tryAuthorize = false;
    }
}