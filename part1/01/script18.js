"use strict"

const HOME = "вдома";
const SHOP = "в магазині";
const FOREST = "у лісі";

const CONTROLLER = "пульт від телевізора";
const MUSHROOMS = "гриби";
const POWERBANK = "павербанк";

const actions = `Оберіть дію
1 - Піти до лісу
2 - Піти в магазин
3 - Піти додому
4 - Знайти предмет
5 - Вийти з гри
`;

const things = `Оберіть предмет
1 - ${CONTROLLER}
2 - ${MUSHROOMS}
3 - ${POWERBANK}
4 - Вийти у попереднє меню
`;

let currentLocation = HOME;
let thingsArr = "";

while (true) {
    const chooseAction = prompt(actions);

    if(chooseAction === null || chooseAction === "5") break;

    switch (chooseAction) {
        case "1": goTo(FOREST);    break;
        case "2": goTo(SHOP);      break;
        case "3": goTo(HOME);      break;
        case "4": showThingMenu(); break;
        default:
            alert("Такої дії не існує");
            break;
    }
}

function goTo(location) {
    if(currentLocation === location) {
        alert(`Ви й так були ${location}`);
    } else {
        alert(`Тепер ви ${location}`);
        currentLocation = location;
    }
}

function showThingMenu() {
    while (true) {
        const chooseThing = prompt(things);

        if(chooseThing === null || chooseThing === "4") return;

        switch (chooseThing) {
            case "1": tryTakeThing(CONTROLLER); break;
            case "2": tryTakeThing(MUSHROOMS);  break;
            case "3": tryTakeThing(POWERBANK);  break;
            default:
                alert("Такого предмету не існує");
                break;
        }
    }
}

function tryTakeThing(thing) {
    switch(thing) {
        case CONTROLLER:
            canUserTakeIt(thing, HOME);
            break;
        case MUSHROOMS:
            canUserTakeIt(thing, FOREST);
            break;
        case POWERBANK:
            canUserTakeIt(thing, SHOP);
            break;
    }
}

function canUserTakeIt(thing, location) {
    if(thingsArr.includes(thing)) {
        alert(`Ви вже маєте ${thing}`);
        return;
    }

    if(currentLocation !== location) {
        alert(`Дія можлива лише ${location}`);
        return;
    }

    return addThing(thing);
}

function addThing(thing) {
    thingsArr += thing;
    alert(`Тепер ви маєте ${thing}`);
}