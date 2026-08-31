"use strict"

const pizzas = [
    {title: "chorizo",   price: 130.00, rating: 1.20},
    {title: "pepperoni", price: 150.00, rating: 1.25},
    {title: "chili",     price: 190.00, rating: 0.75},
    {title: "cheese",    price: 120.00, rating: 4.08},
    {title: "meat",      price: 200.00, rating: 3.33},
];

function sortPizzasBy(pizzas, prop) {
    const newArr = pizzas.slice();

    switch (prop) {
        case "price INC":    return newArr.sort((a, b) => a.price - b.price);
        case "price DEC":    return newArr.sort((a, b) => b.price - a.price);
        case "rating INC":   return newArr.sort((a, b) => a.rating - b.rating);
        case "rating DEC":   return newArr.sort((a, b) => b.rating - a.rating);
        case "alphabet INC": return newArr.sort((a, b) => compareLetters(a.title, b.title));
        case "alphabet DEC": return newArr.sort((a, b) => compareLetters(b.title, a.title));
        default:             return newArr;
    }
}

function compareLetters(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

console.log(sortPizzasBy(pizzas, "price INC"));
console.log(sortPizzasBy(pizzas, "price DEC"));

console.log(sortPizzasBy(pizzas, "rating INC"));
console.log(sortPizzasBy(pizzas, "rating DEC"));

console.log(sortPizzasBy(pizzas, "alphabet INC"));
console.log(sortPizzasBy(pizzas, "alphabet DEC"));
