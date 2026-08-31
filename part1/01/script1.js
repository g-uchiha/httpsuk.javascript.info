"use strict"

const age = prompt("How old are you?");
const validAge = Number(age);


if(age === null || age === "") {
    alert("Canceled");
} else if(isNaN(validAge)) {
    alert("Invalid value");
} else if(validAge < 0) {
    alert("Ти ще не народився");
} else if(validAge < 18) {
    alert("Доступ заборонено");
} else if(validAge < 61) {
    alert("Доступ дозволено");
} else {
    alert("Пенсійний DLC активовано");
}
