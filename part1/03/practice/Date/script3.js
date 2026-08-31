"use strict"

function daysUntilNewYear(now) {
    const calculateDays = 1000 * 60 * 60 * 24;
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = (nextYear - now) / calculateDays;

    return Math.floor(diff);
}

console.log(daysUntilNewYear(new Date(2026, 1, 28)));
console.log(daysUntilNewYear(new Date(2024, 1, 28)));
