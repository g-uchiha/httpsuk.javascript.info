"use strict"

const employees = [
    {name: "John", age: 19, salary: 130.09},
    {name: "Robb", age: 25, salary: 101.90},
    {name: "Anna", age: 23, salary: 120.70},
];

function sortBy(property) {
    return function (a, b) {
        if(typeof a[property] === "string") {
            return a[property].localeCompare(b[property]);
        }

        return a[property] - b[property];
    }
}

console.log(employees.sort(sortBy("salary")));