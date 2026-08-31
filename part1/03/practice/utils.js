/**
 * @deprecated
 */
export function isDiapason(num, num1, num2) {
    return num >= num1 && num <= num2;
}

export function askANumber(param) {
    while(true) {
        const num1 = prompt(`Enter ${param}`);
        const parsedNumber = Number(num1);

        if(num1 === null) return;

        if(!isFinite(parsedNumber)) {
            alert("Incorrect value");
            continue;
        }

        return parsedNumber;
    }
}

export function randomLetter() {
    return Math.floor(Math.random() * (35 - 10  + 1) + 10).toString(36);
}

export const fmt = (num, fix) => +num.toFixed(fix);

export const cancelMsg = "is canceled";