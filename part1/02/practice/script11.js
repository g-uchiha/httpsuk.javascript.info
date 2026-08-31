"use strict"

function Profile(name, age) {
    this.name = name;
    this.age = age;

    this.changeName = function() {
        while (true) {
            const newName = prompt("What is your name?");
            if (newName === null) return;

            if(checkValidName(newName)) {
                this.name = newName;
                break;
            }

            alert("Incorrect name, try again!");
        }
    };

    this.changeAge = function() {
        while (true) {
            const newAge = prompt("What is your age?");
            const parsedAge = Number(newAge);

            if (newAge === null) return;

            if(checkValidAge(parsedAge)) {
                this.age = parsedAge;
                break;
            }

            alert("Incorrect age, try again!");
        }
    };

    this.viewProfile = function(){
        alert(`Name: ${this.name}, \nAge: ${this.age}`);
    };
}

function createProfile(name, age) {
    if(name === null || !checkValidName(name)) return "Error: name is required";
    if(age  === null || !checkValidAge(age))   return "Error: age is required";

    return new Profile(name, age);
}

function checkValidName(name) {
    return name !== undefined && typeof name === "string" && name.length >= 3 && name.length <= 15;
}

function checkValidAge(age) {
    return age >= 18 && age <= 120 && !isNaN(age) && typeof(age) === "number";
}

const user1 = createProfile("Viktor", 25);
user1.viewProfile();
user1.changeName();
user1.changeAge();
user1.viewProfile();