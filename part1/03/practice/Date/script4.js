"use strict"

function startOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function endOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}

function isSameDay(date1, date2) {
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    const day1 = date1.getDate();
    const day2 = date2.getDate();

    return month1 === month2 && day1 === day2;
}

function daysBetween(date1, date2) {
    const time = Math.abs(date1 - date2);
    return Math.floor(time / (1000 * 60 * 60 * 24));
}

console.log(startOfDay(new Date()));
console.log(endOfDay(new Date()));

console.log(isSameDay(new Date(2024, 1, 28), new Date(2026, 1, 28)));
console.log(isSameDay(new Date(2024, 1, 28), new Date(2026, 1, 27)));

console.log(daysBetween(new Date(2001, 0, 18), new Date(2026, 6, 12)));
console.log(daysBetween(new Date(2026, 7, 12), new Date(2026, 6, 12)));
