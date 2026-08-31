"use strict"

while (true) {
    const pointsCount = prompt("Скільки у вас балів?");
    const parsedPointsCount = Number(pointsCount);

    if (pointsCount === null) break;

    if (parsedPointsCount < 0 || parsedPointsCount > 100 || isNaN(parsedPointsCount)) {
        alert("Некоректне значення");
        continue;
    }

    const grade = parsedPointsCount <= 20 ? "F" :
                         parsedPointsCount <= 40 ? "D" :
                         parsedPointsCount <= 60 ? "C" :
                         parsedPointsCount <= 80 ? "B" : "A";

    alert(`Your grade is: ${grade}`);
}