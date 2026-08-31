"use strict"

const prices = [22.90, 19.20, 11.70, 50.00, 42.99];

function filteredPrices(arr, budget) {
    return arr.filter(price => price <= budget);
}

console.log(filteredPrices(prices, 30));

//---------------------------------------------

const things = [
    {title: "sword", count: 1, price: 90.70},
    {title: "bow",   count: 1, price: 30.50},
    {title: "bread", count: 3, price: 90.70},
];

function hasThing(items, title) {
    return items.some(thing => thing.title === title);
}

console.log(hasThing(things, "bread"));

//---------------------------------------------

const points = [8, 7, 9, 12, 6, 10];

function defineMiddlePoint(points) {
    return Math.ceil(points.reduce((acc, cur) => acc + cur, 0) / points.length);
}

console.log(defineMiddlePoint(points));

//---------------------------------------------

function topThree(arr) {
    return arr.slice().sort((a, b) => a - b).slice(-3);
}

console.log(topThree(points));

//---------------------------------------------

const logs = [
    "login",
    null,
    "open inventory",
    null,
    "take sword",
    undefined,
    "fight",
    undefined,
    "save",
    "exit"
];

function getLastLogs(logs, count) {
    return logs.slice(-count);
}

function clearLogs(logs) {
    return logs.filter(log => log !== null && log !== undefined);
}

console.log(getLastLogs(logs, 3));
console.log(clearLogs(logs));

//---------------------------------------------

const db = [
    {id: 0, name: "Alex", age: 21},
    {id: 1, name: "Bob",  age: 25},
    {id: 2, name: "Sam",  age: 25},
    {id: 2, name: "Sam",  age: 25},
    {id: 2, name: "Sam",  age: 25},
];

function findUserByUniqueProp(db, prop, val) {
    return db.find(user => user[prop] === val);
}

function findUserByUCommonProp(db, prop, val) {
    return db.filter(user => user[prop] === val);
}

console.log(findUserByUniqueProp(db, "id", 1));
console.log(findUserByUCommonProp(db, "age", 25));

//---------------------------------------------

const cart = [
    {title: "sword", price: 47.52},
    {title: "bread", price: 2.50},
    {title: "apple", price: 0.75},
];

function calculateCartSum(cart) {
    return cart.reduce((acc, cur) => acc + cur.price, 0);
}

console.log(calculateCartSum(cart));

//---------------------------------------------

function filterUniqueId(db) {
    return db.filter((user, index, arr) => arr[index].id === arr[index-1].id);
}

console.log(filterUniqueId(db));