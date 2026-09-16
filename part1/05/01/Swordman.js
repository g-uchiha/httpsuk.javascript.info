"use strict";

function Swordman(name, swords, damage) {
    Character.call(this, name);

    this.swords = swords;
    this.damage = damage;
}

Swordman.prototype.__proto__ = Character.prototype;

Swordman.prototype.attack = function(person) {
    const message = Character.prototype.attack.call(this, person);
    if(!person.isAlive) return message;

    if(this.swords <= 0) return `You have no sword!`;
    person.getDamage(this.damage);
    return `${message} Мечем.`;
}