"use strict"

function getNextMonday(date) {
    const theDate = new Date(date);
    const currentDayOfWeek = date.getDay();
    const dayUntilMonday = currentDayOfWeek === 0 ? 1 : 8 - currentDayOfWeek;

    theDate.setDate(theDate.getDate() + dayUntilMonday);
    return theDate;
}

function isLeapYear(date) {
    const year = date.getFullYear();
    const theDate = new Date(year, 1, 29);
    return theDate.getDate() === 29;
}

function addTime(date = new Date(), options = {}) {
    const newDate = new Date(date.getTime());

    newDate.setFullYear(newDate.getFullYear() + (options.years ?? 0));
    newDate.setMonth(newDate.getMonth() + (options.months ?? 0));
    newDate.setDate(newDate.getDate() + (options.days ?? 0));
    newDate.setHours(newDate.getHours() + (options.hours ?? 0));
    newDate.setMinutes(newDate.getMinutes() + (options.minutes ?? 0));
    newDate.setSeconds(newDate.getSeconds() + (options.seconds ?? 0));
    newDate.setMilliseconds(newDate.getMilliseconds() + (options.milliseconds ?? 0));

    return newDate;
}

// console.log(getNextMonday(new Date("2026-07-13")));
// console.log(getNextMonday(new Date("2026-07-14")));
// console.log(getNextMonday(new Date("2026-08-13")));

// console.log(isLeapYear(new Date("2026-07-13")));
// console.log(isLeapYear(new Date("2024-07-13")));

const options = {
    years: 3,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
}

console.log(addTime(new Date(), options));