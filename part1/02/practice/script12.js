"use strict"

const state = {
    student: {
        name: "Viktor",

        subjects: {
            math: 12,
            physics: 10,
            english: 9
        },
    },

    menu: {
        1: "Переглянути профіль",
        2: "Змінити оцінку",
        3: "Додати предмет",
        4: "Видалити предмет",
        5: "Порахувати середній бал",
        6: "Вийти",
    }
};

while(true) {
    const chooseMenu = prompt(viewMenu());
    if(chooseMenu === null || chooseMenu === "6") break;

    switch(chooseMenu) {
        case "1": viewProfile();   break;
        case "2": changeRating();  break;
        case "3": addSubject();    break;
        case "4": deleteSubject(); break;
        case "5": alert(`Your middle rating is: ${calculateMiddleRating()}`); break;
        default:  alert("Invalid choice!"); break;
    }
}

function viewMenu() {
    let message = `Main menu:`;

    for(const item in state.menu) {
        message += `\n${item} - ${state.menu[item]}`;
    }

    return message;
}

function viewProfile() {
    let message = `Name: ${state.student.name}\nSubjects:`;

    for(const key in state.student.subjects) {
        message += `\n    - ${key}: ${state.student.subjects[key]}`;
    }

    alert(message);
}

function changeRating() {
    const selectedSubject = askForSubject("changeRating");
    const selectedRating = askForRating();

    if(selectedSubject !== undefined && selectedRating !== undefined) {
        state.student.subjects[selectedSubject] = selectedRating;
    }
}

function addSubject() {
    const selectedSubject = askForSubject("addSubject");
    const selectedRating = askForRating();

    if(selectedSubject !== undefined && selectedRating !== undefined) {
        state.student.subjects[selectedSubject] = selectedRating;
    }
}

function deleteSubject() {
    const selectedSubject = askForSubject("changeRating");

    if(selectedSubject !== undefined) {
        delete state.student.subjects[selectedSubject];
    }
}

function calculateMiddleRating() {
    let count = 0;
    let sum = 0;

    for(const key in state.student.subjects) {
        count++;
        sum += state.student.subjects[key];
    }

    return count > 0 ? sum / count : 0;
}

function askForSubject(target) {
    switch(target) {
        case "changeRating":
            while (true) {
                const chooseSubject = prompt("What is your subject?");
                if(chooseSubject === null) return;

                if(state.student.subjects[chooseSubject] === undefined) {
                    alert("Please enter a valid subject name");
                    continue;
                }

                return chooseSubject;
            }
        case "addSubject":
            while (true) {
                const chooseSubject = prompt("What is your subject?");
                if(chooseSubject === null) return;

                if(chooseSubject in state.student.subjects) {
                    alert("This subject already exists");
                    continue;
                }

                return chooseSubject;
            }
        default:
            alert("Use this function only for changeRating or addSubject");
    }
}

function askForRating() {
    while (true) {
        const chooseRating = prompt("What is your rating?");
        const parsedRating = Number(chooseRating);
        if(chooseRating === null) return;

        if(isNaN(parsedRating) || parsedRating < 1 || parsedRating > 12) {
            alert("Please enter a valid rating");
            continue;
        }

        return parsedRating;
    }
}