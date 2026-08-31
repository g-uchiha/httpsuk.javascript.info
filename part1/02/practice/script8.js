"use strict"

function Weapon(name, damage, weight) {
    this.name   = name;
    this.damage = damage;
    this.weight = weight;
}

function createWeapon(name, damage, weight) {
    const parsedName = String(name);
    const parsedDamage = Number(damage);
    const parsedWeight = Number(weight);

    if(name === undefined || name === null || parsedName.length < 1) return "Error: name is required";
    if(isNaN(parsedDamage)) return "Error: damage is required";
    if(isNaN(parsedWeight)) return "Error: weight is required";

    return new Weapon(parsedName, parsedDamage, parsedWeight);
}

const gun1 = createWeapon();
const gun2 = createWeapon("gun");
const gun3 = createWeapon("gun", 10);
const gun4 = createWeapon("gun", 10, 8);

console.log(gun1);
console.log(gun2);
console.log(gun3);
console.log(gun4);
