import {askANumber, fmt} from "../utils.js";

function budgetCalculator(budget) {
    let costs = 0;

    while(true) {
        const cost = askANumber("cost of budget");
        if(cost === undefined) break;

        if(cost <= 0) {
            alert("Minimal value is 1");
            continue;
        }

        costs += cost;
    }

    const balance = budget - costs;
    const formatted = fmt(balance, 2);
    const message = balance < 0 ? "Budget deficit" : "Budget balance";

    return `${message}: ${formatted}`;
}

alert(budgetCalculator(5000));