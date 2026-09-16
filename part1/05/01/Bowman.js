"use strict";

function Bowman(name, arrows, damage) {
    Character.call(this, name);

    this.arrows = arrows;
    this.damage = damage;
}

Bowman.prototype.__proto__ = Character.prototype;

Bowman.prototype.attack = function(person) {
    const message = Character.prototype.attack.call(this, person);
    if(!person.isAlive) return message;

    if(this.arrows <= 0) return `You have no arrows!`;
    this.arrows--;
    person.getDamage(this.damage);

    return `${message} З лука. Лишилося ${this.arrows} стріл.`;
}