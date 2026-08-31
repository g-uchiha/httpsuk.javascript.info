const userNumber = prompt("Enter your number");
const parsedNumber = Number(userNumber);

if(userNumber === null) {
    console.log("Canceled");
} else if(isNaN(parsedNumber)) {
    console.log("Is not a number");
} else {
    let endLoop = 0;
    let newNumber = "";
    const stringedNumber = String(parsedNumber);

    if(parsedNumber < 0) {
        endLoop = 1;
        newNumber = "-";
    }

    for(let i = stringedNumber.length - 1; i >= endLoop; i--) {
        newNumber += stringedNumber[i];
    }

    console.log(Number(newNumber));
}