"use strict"

const menu = `Меню
1 - Перевірити баланс
2 - Зняти гроші
3 - Поповнити рахунок
4 - Вийти
`;

let balance = 1000.00;

while (true) {
    let chooseOption = prompt(menu);

    if (chooseOption === null || chooseOption === "4") break;

    switch (chooseOption) {
        case "1": alert(checkBalance()); break;
        case "2": takeMoney(); break;
        case "3": putMoney(); break;
        default:
            alert("Такого пункту в меню не існує");
            break;
    }
}

function checkBalance() {
    return balance;
}

function takeMoney() {
    while (true) {
        const sum = prompt("Скільки бажаєте зняти?");
        const parsedSum = Number(sum);

        if(sum === null) return;

        if(isNaN(parsedSum) || parsedSum <= 0) {
            alert("Невалідне значення");
            continue;
        }

        if((balance - parsedSum) < 0) {
            alert("Недостатньо коштів на рахунку");
            continue;
        }

        balance = Number((balance - parsedSum).toFixed(2));
        break;
    }
}

function putMoney() {
    while (true) {
        const sum = prompt("Скільки бажаєте покласти?");
        const parsedSum = Number(sum);

        if(sum === null) return;

        if(isNaN(parsedSum) || parsedSum <= 0) {
            alert("Невалідне значення");
            continue;
        }

        balance = Number((balance + parsedSum).toFixed(2));
        break;
    }
}