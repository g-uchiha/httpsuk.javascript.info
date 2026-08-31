"use strict"

const employees = [
    {name: "John", age: 19, salary: 130.09},
    {name: "Robb", age: 25, salary: 101.90},
    {name: "Anna", age: 23, salary: 120.70},
];

//-----------------------------------------

function sortByNameInc(a, b) {
    return a.name.localeCompare(b.name);
}

function sortByNameDec(a, b) {
    return b.name.localeCompare(a.name);
}

console.log(employees.sort(sortByNameInc));
console.log(employees.sort(sortByNameDec));

//-----------------------------------------

function sortByAgeInc(a, b) {
    return a.age - b.age;
}

function sortByAgeDec(a, b) {
    return b.age - a.age;
}

console.log(employees.sort(sortByAgeInc));
console.log(employees.sort(sortByAgeDec));

//-----------------------------------------

function ageRange(a, b) {
    return function(x) {
        return x.age >= a && x.age <= b;
    }
}

console.log(employees.filter(ageRange(20, 30)));

//-----------------------------------------

function salaryRange(a, b) {
    return function(x) {
        return x.salary >= a && x.salary <= b;
    }
}

console.log(employees.filter(salaryRange(90, 110)));

//-----------------------------------------
