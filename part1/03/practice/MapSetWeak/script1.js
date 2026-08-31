"use strict"

//---------------------------------------------------

const arrId = [12, 5, 12, 9, 5, 18, 12];
const setId = new Set(arrId);

//---------------------------------------------------

const logins = new Set();

function register(login) {
    if(logins.has(login)) return false;

    logins.add(login);
    return true;
}

//---------------------------------------------------

const goods = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

function parseList(list) {
    const parsedList = new Map();

    for(const item of list) {
        const count = parsedList.get(item);
        parsedList.set(item, (count === undefined ? 1 : count + 1));
    }

    return parsedList;
}

//---------------------------------------------------

const phoneBook = new Map();

function addContact(book, name, number) {
    if(book.has(name)) return `Contact ${name} already exists!`;

    book.set(name, number);
    return `Contact "${name}" successfully saved!`;
}

function getContact(book, name) {
    if(!book.has(name)) return `Contact ${name} not found`;

    return `Name: ${name}; Number: ${book.get(name)};`;
}

function removeContact(book, name) {
    if(!book.has(name)) return `Contact ${name} not found`;

    book.delete(name);
    return `Contact "${name}" successfully deleted!`;
}

//---------------------------------------------------

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

function searchIntersections(set1, set2) {
    const newArr = [];

    set1.forEach((item) => {
        if(set2.has(item)) newArr.push(item);
    });

    return newArr;

    // return set1.intersection(set2);
}

console.log(searchIntersections(setA, setB));






















