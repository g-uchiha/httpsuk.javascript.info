"use strict"

while (true) {
    const password = prompt("Enter your password");

    if(password === null) break;

    let hasSymbolCount = password.length >= 8;
    let hasNumber = false;
    let hasLargeChars = false;

    for(let i = 0; i < password.length; i++) {
        if(password[i] >= "0" && password[i] <= "9") hasNumber = true;

        if(
            (password[i] >= "Б" && password[i] <= "Я") ||
            password[i]  >= "A" && password[i] <= "Z"
        ) hasLargeChars = true;
    }

    if(hasSymbolCount && hasNumber && hasLargeChars) {
        alert("Your password is valid");
        break;
    }

    alert("Incorrect password, try again!");
}