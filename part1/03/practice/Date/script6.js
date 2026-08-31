"use strict"

const goods = [
    {title: "iPhone", buyDate: new Date(2019, 6, 13), warrantyMonths: 12},
    {title: "Laptop", buyDate: new Date(2025, 6, 15), warrantyMonths: 12},
    {title: "McBook", buyDate: new Date(2026, 6, 11), warrantyMonths: 12},
];

function getWarrantyStatus(good) {
    const now = new Date();
    const warrantyEnd   = new Date(good.buyDate);
    warrantyEnd.setMonth(warrantyEnd.getMonth() + good.warrantyMonths);

    const daysToEnd = Math.floor(Math.abs(now - warrantyEnd) / 1000 / 60 / 60 / 24);

    return warrantyEnd <= now ?
           `Your warranty is done at: ${warrantyEnd.toLocaleDateString()}` :
           `To end of warranty is: ${daysToEnd} days`;
}

goods.forEach(good => console.log(getWarrantyStatus(good)));