import { askANumber, isDiapason, cancelMsg } from "../utils.js";

function fuelCalculator() {
    const distance = askANumber("a distance in km");
    if(distance === undefined) return cancelMsg
    if(!isDiapason(distance, 1, 10000)) return "diapason is 1-1000 km";

    const fuelConsumption = askANumber("a fuel consumption per 100 km");
    if(fuelConsumption === undefined) return cancelMsg
    if(!isDiapason(fuelConsumption, 1, 100)) return "diapason is 1-100 km";

    const pricePerLiter = askANumber("price per liter of fuel");
    if(pricePerLiter === undefined) return cancelMsg
    if(!isDiapason(pricePerLiter, 1, 100)) return "diapason is 1-100 km";

    const litersNeeded = distance * fuelConsumption / 100;
    const tripCost = litersNeeded * pricePerLiter;

    return `
    - потрібно літрів: ${litersNeeded.toFixed(2)};
    - вартість поїздки: ${tripCost.toFixed(2)};
    `;
}

alert(fuelCalculator());