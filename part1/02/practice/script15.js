"use strict"

const state = {
    catalog: {
        weapon: {},
        thing:  {},
    },
};

function Weapon(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
}

function Thing(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
}

function createSubject() {
    const title = askThingTitle();
    const price = askThingPrice();
    const count = askThingCount();

    if(
        title === undefined ||
        price === undefined ||
        count === undefined
    ) return;

    if(title === "sword" || title === "bow" || title === "ax") {
        const weapon = new Weapon(title, price, count);

        if(state.catalog.weapon[weapon.title] === undefined) {
            state.catalog.weapon[weapon.title] = weapon;
        } else {
            state.catalog.weapon[weapon.title].count += count;
        }
    }

    if(title === "bread" || title === "meat" || title === "aid kit") {
        const thing = new Thing(title, price, count);

        if(state.catalog.thing[thing.title] === undefined) {
            state.catalog.thing[thing.title] = thing;
        } else {
            state.catalog.thing[thing.title].count += count;
        }
    }

    state.catalog.inventoryCosts = calculateCost();
}

function askThingTitle() {
    const allowedThings = "sword | bow | ax | bread | meat | aid kit";

    while (true) {
        const title = prompt("Which thing you want to make?");
        if(title === null) return;

        switch(title) {
            case "sword":   return "sword";
            case "bow":     return "bow";
            case "ax":      return "ax";
            case "bread":   return "bread";
            case "meat":    return "meat";
            case "aid kit": return "aid kit";
            default:
                alert(`Error, allowed things is: ${allowedThings}`);
                break;
        }
    }
}

function askThingPrice() {
    while (true) {
        const price = prompt(`What a cost?`);
        const parsedPrice = Number(price);

        if(price === null) return;

        if(isNaN(parsedPrice)) {
            alert(`Input a number value pls...`);
            continue;
        }

        if(parsedPrice < 1) {
            alert(`Input correct price pls...`);
            continue;
        }

        return parsedPrice;
    }
}

function askThingCount() {
    while (true) {
        const count = prompt(`How many things?`);
        const parsedCount = Number(count);

        if(count === null) return;

        if(isNaN(parsedCount)) {
            alert(`Input a number value pls...`);
            continue;
        }

        if(parsedCount < 1) {
            alert(`Input correct count pls...`);
            continue;
        }

        return parsedCount;
    }
}

function calculateCost() {
    let weaponPrice = 0;
    let thingPrice = 0;

    if(state.catalog.weapon !== undefined) {
        for(const key in state.catalog.weapon) {
            weaponPrice += state.catalog.weapon[key].price * state.catalog.weapon[key].count;
        }
    }

    if(state.catalog.thing !== undefined) {
        for(const key in state.catalog.thing) {
            thingPrice += state.catalog.thing[key].price * state.catalog.thing[key].count;
        }
    }

    return weaponPrice + thingPrice;
}