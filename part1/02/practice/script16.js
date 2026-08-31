"use strict"

function Car(mark, model, year) {
    this.mark  = mark;
    this.model = model;
    this.year  = year;

    this.showInfo = function(){
        return `- Mark: ${this.mark} \n - Model: ${this.model} \n - Year: ${this.year}`;
    };
}

function createCar(mark, model, year) {
    const parsedYear = Number(year);

    if(isNaN(parsedYear) || parsedYear < 1970 || parsedYear > 2026) {
        alert("Please enter a valid year");
        return;
    }

    return new Car(mark, model, parsedYear);
}

const car1 = createCar("Daewoo", "Lanos", 2002);
alert(car1.showInfo());