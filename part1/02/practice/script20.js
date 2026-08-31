"use strict"

function Passport(fname, lname, age, citizenship, docNumber) {
    this.fname       = fname;
    this.lname       = lname;
    this.age         = age;
    this.citizenship = citizenship;
    this.docNumber   = docNumber;

    this.showPassport = function(){
        return `Passport info:
        Full name: ${this.fname} ${this.lname};
        Age: ${this.age}
        Citizenship: ${this.citizenship}
        Document №: ${this.docNumber}
        `;
    };
}

/////////////////////////////////////////

const citizen = createPassport();

if (citizen === undefined) {
    alert("Cannot make a citizen");
} else {
    alert(citizen.showPassport());
}

/////////////////////////////////////////

function createPassport() {
    const fname = askName("first");
    if (fname === undefined) return;

    const lname = askName("last");
    if (lname === undefined) return;

    const age = askAge();
    if (age === undefined) return;

    const citizenship = "Ukraine";
    const docNumber = generateDocNumber();

    return new Passport(fname, lname, age, citizenship, docNumber);
}

function askName(param) {
    if (param !== "first" && param !== "last") {
        alert("Call func with param 'first' or 'last'");
        return;
    }

    while (true) {
        const name = prompt(`Input your ${param} name`);
        if(name === null) return;

        if(name.length < 3) {
            alert("Too short");
            continue;
        }

        if(name.length > 15) {
            alert("Too long");
            continue;
        }

        return name;
    }
}

function askAge() {
    while (true) {
        const age = prompt("What is your age?");
        const parsedAge = Number(age);
        if (age === null) return;

        if(isNaN(parsedAge)) {
            alert("Age must be positive integer");
            continue;
        }

        if(parsedAge < 18) {
            alert("Age must be 18 or more");
            continue;
        }

        if(parsedAge > 120) {
            alert("This age is not real");
            continue;
        }

        if(String(parsedAge).includes(".")) {
            alert("Age must be integer");
            continue
        }

        return Math.floor(parsedAge);
    }
}

function generateDocNumber() {
    const min = 1;
    const max = 5000000;

    return Math.floor(Math.random() * ((max + 1) - min) + min);
}