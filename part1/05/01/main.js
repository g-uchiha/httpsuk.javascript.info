"use strict"

const legolas = new Bowman("Legolas", 30, 10);
console.log(legolas.getInfo());

const aragorn = new Swordman("Aragorn", 1, 15);
console.log(aragorn.getInfo());

console.log(aragorn.attack(legolas));
console.log(aragorn.attack(legolas));

console.log(legolas.attack(aragorn));
console.log(legolas.attack(aragorn));
console.log(legolas.attack(aragorn));

console.log(legolas.getInfo());
console.log(aragorn.getInfo());