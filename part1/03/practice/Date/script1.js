"use strict"

const documents = [
    {date: new Date(2021, 6, 13)},
    {date: new Date(2023, 0, 20)},
    {date: new Date(2019, 8, 11)},
    {date: new Date(2024, 1, 29)},
    {date: new Date(2026, 6, 11)},
];

function getDocumentAge(date) {
    if(!(date instanceof Date) || isNaN(date.getTime())) return null;

    const now = new Date();
    const age = now.getFullYear() - date.getFullYear();

    return (
        now.getMonth() < date.getMonth() ||
        (
            now.getMonth() === date.getMonth() &&
            now.getDate() < date.getDate()
        )
    ) ? age - 1 : age;
}

documents.forEach(document => console.log(getDocumentAge(document.date)));
