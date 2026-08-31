"use strict"

const inventory = new Map();

function addThing(inventory, thing) {
    const count = inventory.get(thing);
    inventory.set(thing, (count === undefined ? 1 : count + 1));

    return `Your ${thing} succefully added`;
}

function removeThing(inventory, thing) {
    if(!hasThing(inventory, thing)) return `You have no ${thing}`;

    let count = inventory.get(thing) - 1;

    if (count === 0) {
        inventory.delete(thing);
    } else {
        inventory.set(thing, count);
    }

    return `Your ${thing} succefully removed`;
}

function showInventory(inventory) {
    return new Map(inventory);
}

function hasThing(inventory, thing) {
    return inventory.has(thing);
}

console.log(addThing(inventory, "bread"));
console.log(addThing(inventory, "bread"));
console.log(addThing(inventory, "bread"));

console.log(showInventory(inventory));

console.log(addThing(inventory, "sword"));
console.log(addThing(inventory, "water"));

console.log(showInventory(inventory));

console.log(removeThing(inventory, "bread"));
console.log(showInventory(inventory));
console.log(removeThing(inventory, "bread"));
console.log(showInventory(inventory));
console.log(removeThing(inventory, "bread"));
console.log(showInventory(inventory));
console.log(removeThing(inventory, "bread"));
console.log(showInventory(inventory));