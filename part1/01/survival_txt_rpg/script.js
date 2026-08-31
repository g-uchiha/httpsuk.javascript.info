"use strict"

/**
 * State of the game
 */

// user info state
let username = "";
let hp = 100;
let currentLocation = "";
let exp = 0;
let level = 0;

// user pack
let haveMoney = 100;
let haveMeat = 0;
let haveBread = 0;
let haveAmmunition = 0;
let haveGun = 0;
let haveCoal = 0;
let haveAidKit = 0;

// shop assortment
const BREAD      = "батон";
const MEAT       = "м'ясо";
const GUN        = "рушниця";
const AMMUNITION = "патрони";
const AID_KIT    = "аптечка";
const COAL       = "вугілля";

// prices
const breadPrice      = 2;
const meatPrice       = 5;
const gunPrice        = 25;
const ammunitionPrice = 1;
const aidKitPrice     = 7;
const coalPrice       = 1;

const ASSORTMENT_MENU = `Оберіть товар
1 - ${BREAD}; ціна: ${breadPrice}
2 - ${MEAT}; ціна: ${meatPrice}
3 - ${GUN}; ціна: ${gunPrice}
4 - ${AMMUNITION}; ціна: ${ammunitionPrice}
5 - ${AID_KIT}; ціна: ${aidKitPrice}
6 - ${COAL}; ціна: ${coalPrice}
`;

// wolf mob state
const WOLF_MEAT       = 3;
const WOLF_EXP        = 10;
const WOLF_HP         = 20;
const WOLF_AMMUNITION = 2;

// bear mob state
const BEAR_MEAT       = 10;
const BEAR_EXP        = 30;
const BEAR_HP         = 60;
const BEAR_AMMUNITION = 8;

// thing to add hp
const MEAT_HP  = 15;
const BREAD_HP = 5;
const AID_KIT_HP = 100;

// locations list
const SHOP   = "магазин";
const CAMP   = "табір";
const MINE   = "шахта";
const FOREST = "ліс";

const MAIN_MENU = `Головне меню
1 - переглянути інформацію про себе
2 - переглянути свій інвентар
3 - переглянути меню вашої локації
4 - змінити локацію
5 - змінити ім'я
6 - застосувати аптечку
7 - поїсти
8 - вийти з гри
`;

const LOCATION_MENU = `Оберіть нову локацію
1 - табір
2 - магазин
3 - шахта
4 - ліс
5 - вийти у головне меню
`;

const SHOP_MENU = `
1 - купити
2 - продати
3 - вийти у головне меню
`;

const MINE_MENU = `
1 - добути вугілля
2 - вийти у головне меню
`;

const FOREST_MENU = `
1 - полювати на вовка
2 - полювати на ведмедя
3 - вийти у головне меню
`;

/**
 * Life-cycle of the game
 */
let runGame = true;

while (runGame) {
    currentLocation = CAMP;
    changeMyName();
    vewMainMenu();
}

/**
 * Mechanic of the game
 */

function vewMainMenu() {
    while (true) {
        const chooseAction = prompt(MAIN_MENU);
        
        if (chooseAction === null || chooseAction === "8") {
            runGame = false;
            return;
        }
        
        switch (chooseAction) {
            case "1": alert(vewAboutMyself());  break;
            case "2": alert(vewMyInventory());  break;
            case "3": vewMyLocationMenu();      break;
            case "4": changeLocation();         break;
            case "5": changeMyName();           break;
            case "6": applyAidKit();            break;
            case "7": eatSomething();           break;
            case "8": runGame = false;          break;
        }
    }
}

function vewAboutMyself() {
    return `Про мене
    Ім'я: ${username};
    Локація: ${currentLocation};
    Стан здоров'я: ${hp}%;
    Досвід: ${exp};
    Рівень: ${level};
    `;
}

function eatSomething() {
    if(haveMeat < 1 && haveBread < 1) {
        alert("Вам немає що їсти");
        return;
    }

    while (true) {
        const chooseFood = prompt("Що з'їсти?");
        if (chooseFood === null) return;
        let outCount = 0;

        if(chooseFood !== BREAD && chooseFood !== MEAT) {
            unknownValue();
            continue;
        }

        while (true) {
            const count = chooseThingCount();
            const parsedCount = Number(count);

            if(count === null) break;

            if(isNaN(parsedCount) || parsedCount < 1) {
                unknownValue();
                continue;
            }

            if(chooseFood === BREAD && parsedCount > haveBread) {
                alert("У вас недостатньо хліба");
                continue;
            }

            if(chooseFood === MEAT && parsedCount > haveMeat) {
                alert("У вас недостатньо м'яса");
                continue;
            }

            outCount = parsedCount;
            break;
        }

        toEat(chooseFood, outCount);
        return;
    }
}

function toEat(food, count) {
    if(food === BREAD) {
        hp = hp + (BREAD_HP * count) > 100 ? 100 : hp + (BREAD_HP * count);
        haveBread -= count;
    }

    if(food === MEAT) {
        hp = hp + (MEAT_HP * count) > 100 ? 100 : hp + (MEAT_HP * count);
        haveMeat -= count;
    }
}

function applyAidKit() {
    if(haveAidKit < 1) {
        alert("У вас немає жодної аптечки...");
        return;
    }

    haveAidKit -= 1;
    hp = AID_KIT_HP;
}

function changeMyName() {
    while (true) {
        const name = prompt("Як до вас звертатись?");
        if (name === null) return;

        if(name.length < 3) {
            alert("Ім'я занадто коротке");
            continue;
        }

        if(name.length > 15) {
            alert("Ім'я занадто довге");
            continue;
        }

        username = name;
        break;
    }
}

function vewMyInventory() {
    let inventoryList = "Мій інвентар";

    if(haveMoney > 0)      inventoryList += `\nГроші: ${haveMoney}`;
    if(haveMeat > 0)       inventoryList += `\nМ'ясо: ${haveMeat}`;
    if(haveBread > 0)      inventoryList += `\nБатон: ${haveBread}`;
    if(haveAmmunition > 0) inventoryList += `\nПатрони: ${haveAmmunition}`;
    if(haveGun > 0)        inventoryList += `\nРушниця: ${haveGun}`;
    if(haveCoal > 0)       inventoryList += `\nВугілля: ${haveCoal}`;
    if(haveAidKit > 0)     inventoryList += `\nАптечка: ${haveAidKit}`;
    
    return inventoryList;
}

function vewMyLocationMenu() {
    switch (currentLocation) {
        case CAMP:   alert("У таборі лише головне меню"); break;
        case SHOP:   shopMenu();                          break;
        case MINE:   mineMenu();                          break;
        case FOREST: forestMenu();                        break;
        default:     unknownValue();                      break;
    }
}

function changeLocation() {
    while (true) {
        const newLocation = prompt(LOCATION_MENU);
        if(newLocation === null || newLocation === "5") return;
        
        switch (newLocation) {
            case "1": 
                currentLocation = CAMP;
                welcomeOnLocation(CAMP);
                return;
            case "2":
                currentLocation = SHOP;
                welcomeOnLocation(SHOP);
                shopMenu();
                return;
            case "3":
                currentLocation = MINE;
                welcomeOnLocation(MINE);
                mineMenu();
                return;
            case "4":
                currentLocation = FOREST;
                welcomeOnLocation(FOREST);
                forestMenu();
                return;
            default:
                unknownValue();
                break;
        }
    }
}

function shopMenu() {
    while (true) {
        const chooseAction = prompt(SHOP_MENU);
        if (chooseAction === null || chooseAction === "3") return;
        
        switch (chooseAction) {
            case "1": vewAssortmentMenu();   break;
            case "2": vewMyAssortmentMenu(); break;
            default:  unknownValue();        break;
        }
    }
}

function vewAssortmentMenu() {
    while (true) {
        const chooseGood = prompt(ASSORTMENT_MENU);
        if(chooseGood === null) return;
        const count = chooseThingCount();

        switch (chooseGood) {
            case "1": toBuy(BREAD,      breadPrice,      count); break;
            case "2": toBuy(MEAT,       meatPrice,       count); break;
            case "3": toBuy(GUN,        gunPrice,        count); break;
            case "4": toBuy(AMMUNITION, ammunitionPrice, count); break;
            case "5": toBuy(AID_KIT,    aidKitPrice,     count); break;
            case "6": toBuy(COAL,       coalPrice,       count); break;
            default:  unknownValue();                            break;
        }
    }
}

function toBuy(thing, price, count) {
    if(haveMoney - price * count < 0) {
        alert("У вас недостатньо коштів");
        return;
    }

    haveMoney -= price * count;

    switch(thing) {
        case BREAD:      haveBread      += count;  break;
        case MEAT:       haveMeat       += count;  break;
        case GUN:        haveGun        += count;  break;
        case AMMUNITION: haveAmmunition += count;  break;
        case AID_KIT:    haveAidKit     += count;  break;
        case COAL:       haveCoal       += count;  break;
    }

    alert("Покупка успішна");
}

function vewMyAssortmentMenu() {
    while (true) {
        const menu = vewMyInventory();
        const chooseThing = prompt(menu);
        const message = "У вас недостатньо цього товару";

        if(chooseThing === null) return;
        if(!menu.includes(chooseThing)) {
            alert("У вас немає таких товарів");
            return;
        }

        const count = chooseThingCount();

        switch (chooseThing) {
            case BREAD:
                if(count > haveBread) {
                    alert(message); break;
                } else {
                    toSell(BREAD, breadPrice, count);
                    break;
                }
            case MEAT:
                if(count > haveMeat) {
                    alert(message); break;
                } else {
                    toSell(MEAT, meatPrice, count);
                    break;
                }
            case GUN:
                if(count > haveGun) {
                    alert(message); break;
                } else if(haveGun - count < 1) {
                    alert("Останню рушницю продавати неможна");
                    break;
                } else {
                    toSell(GUN, gunPrice, count);
                    break;
                }
            case AMMUNITION:
                if(count > haveAmmunition) {
                    alert(message); break;
                } else {
                    toSell(AMMUNITION, ammunitionPrice, count);
                    break;
                }
            case AID_KIT:
                if(count > haveAidKit) {
                    alert(message); break;
                } else {
                    toSell(AID_KIT, aidKitPrice, count);
                    break;
                }
            case COAL:
                if(count > haveCoal) {
                    alert(message); break;
                } else {
                    toSell(COAL, coalPrice, count);
                    break;
                }
            default: unknownValue();
        }
    }
}

function toSell(thing, price, count) {
    haveMoney += price * count;

    switch(thing) {
        case BREAD:      haveBread      -= count;  break;
        case MEAT:       haveMeat       -= count;  break;
        case GUN:        haveGun        -= count;  break;
        case AMMUNITION: haveAmmunition -= count;  break;
        case AID_KIT:    haveAidKit     -= count;  break;
        case COAL:       haveCoal       -= count;  break;
    }
}

function mineMenu() {
    while (true) {
        const chooseAction = prompt(MINE_MENU);

        if (chooseAction === null || chooseAction === "2") return;

        if(chooseAction === "1") {
            toMineCoal();
            continue;
        }

        unknownValue();
    }
}

function toMineCoal() {
    haveCoal += 5;
    alert("Ви щойно здобули +5 вугілля");
}

function forestMenu() {
    while (true) {
        const chooseAction = prompt(FOREST_MENU);

        if (chooseAction === null || chooseAction === "3") return;

        if(chooseAction !== "1" && chooseAction !== "2") {
            unknownValue();
            continue;
        }

        if(chooseAction === "1") {
            if(haveAmmunition < WOLF_AMMUNITION) {
                alert("У вас недостатньо патронів");
                continue;
            }

            if(haveGun < 1) {
                alert("У вас немає зброї");
                continue;
            }

            huntWolf();
        }

        if(chooseAction === "2") {
            if(haveAmmunition < BEAR_AMMUNITION) {
                alert("У вас недостатньо патронів");
                continue;
            }

            if(haveGun < 1) {
                alert("У вас немає зброї");
                continue;
            }

            huntBear();
        }
    }
}

function huntWolf() {
    hp -= WOLF_HP;

    if(hp <= 0) {
        alert("Ви мали необережність загинути...");
        runGame = false;
        return;
    }

    haveAmmunition -= WOLF_AMMUNITION;
    haveMeat += WOLF_MEAT;
    exp += WOLF_EXP;
    updateLevel();
}

function huntBear() {
    hp -= BEAR_HP;

    if(hp <= 0) {
        alert("Ви мали необережність загинути...");
        runGame = false;
        return;
    }

    haveAmmunition -= BEAR_AMMUNITION;
    haveMeat += BEAR_MEAT;
    exp += BEAR_EXP;
    updateLevel();
}

function updateLevel() {
    if(exp % 10 === 0) level++;
}

function chooseThingCount() {
    while (true) {
        const chooseCount  = prompt("Оберіть кількість");
        const parsedCount = Number(chooseCount);

        if (chooseCount === null) return;
        if(isNaN(parsedCount) || parsedCount < 1) {
            unknownValue();
            continue;
        }

        return parsedCount;
    }
}

function welcomeOnLocation(location) {
    alert(`Вітаємо на локації ${location}`);
}

function unknownValue() {
    alert("Невідоме значення, спробуйте ще раз...");
}