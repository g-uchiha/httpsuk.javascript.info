"use strict"

const CRM = {
    client: {
        name: "Viktor",
        phone: "+380931136853",
        balance: 1000,
    },

    menu: {
        1: "Переглянути клієнта",
        2: "Поповнити рахунок",
        3: "Зняти кошти",
        4: "Вийти",
    }
};

while (true) {
    const chooseAction = prompt(viewMainMenu());
    if (chooseAction === null || chooseAction === "4") break;

    switch (chooseAction) {
        case "1": alert(viewInfo());  break;
        case "2": pushMoney();        break;
        case "3": takeMoney();        break;
        default:
            alert("Invalid choice!");
            break;
    }
}

function viewMainMenu() {
    let menu = "Main menu:";

    for(let key in CRM.menu) {
        menu += `\n - ${key}: ${CRM.menu[key]}`;
    }

    return menu;
}

function pushMoney() {
    const sum = askForBalance("push");
    if(sum !== undefined) CRM.client.balance += sum;
}

function takeMoney() {
    const sum = askForBalance("take");
    if(sum === undefined) return;
    if(CRM.client.balance - sum >= 0) {
        CRM.client.balance -= sum;
    } else {
        alert("You don't have enough balance!");
    }
}

function viewInfo() {
    let clientInfo = `About you:`;

    for(let key in CRM.client) {
        clientInfo += `\n- ${key}: ${CRM.client[key]}`;
    }

    return clientInfo;
}

function askForBalance(target) {
    if(target !== "push" && target !== "take") {
        alert(`askForBalance() must be called with argument: push or take`);
        return;
    }

    while (true) {
        const sum = prompt(`What sum you'd like to ${target}?`);
        const parsedSum = Number(sum);

        if(sum === null) return;
        if(isNaN(parsedSum) || parsedSum <= 0) {
            alert("Please enter a valid number");
            continue;
        }

        return parsedSum;
    }
}