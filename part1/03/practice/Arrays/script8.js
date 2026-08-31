"use strict"

const pizzas = [
    {title: "chorizo",   category: "vegetable", price: 130.00, rating: 1.20},
    {title: "pepperoni", category: "meat",      price: 150.00, rating: 1.25},
    {title: "chili",     category: "spicy",     price: 190.00, rating: 0.75},
    {title: "cheese",    category: "vegetable", price: 120.00, rating: 4.08},
    {title: "meats",     category: "meat",      price: 200.00, rating: 3.33},
];

const state = function (pizzas) {
    const categories = {};

    for(const item of pizzas) {
        if(!categories[item.category]) categories[item.category] = [];
        categories[item.category].push(item);
    }

    return categories;
};

console.log(state(pizzas));