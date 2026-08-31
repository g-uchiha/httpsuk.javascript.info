"use strict"

outer: while (true) {
    const goodsCount = prompt("Введіть кількість товару");
    const parsedGoodsCount = Number(goodsCount);

    if(goodsCount === null) break;

    if(parsedGoodsCount <= 0 || isNaN(parsedGoodsCount)) {
        alert("Некоректне значення");
        continue;
    }

    while (true) {
        const goodsPrice = prompt("Введіть ціну за 1 товар");
        const parsedGoodsPrice = Number(goodsPrice);

        if(goodsPrice === null) break outer;

        if(parsedGoodsPrice <= 0 || isNaN(parsedGoodsPrice)) {
            alert("Некоректне значення");
            continue;
        }

        const sum = parsedGoodsPrice * parsedGoodsCount;
        const discount = sum / 100 * 10;
        let result = 0;

        if(sum <= 5000) {
            result = sum;
            alert(`Сума за товари становить: ${sum}`);
            break outer;
        }

        result = sum - discount;
        alert(`Сума за товари становить: ${result}. Ви зекономили ${discount} грн!`);
        break outer;
    }
}