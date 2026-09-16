"use strict";

function Character(name) {
    this.name    = name;
    this.hp      = 100;
    this.isAlive = true;
}

Character.prototype.attack = function(person) {
    if(person.isAlive) return `${this.name} атакує ${person.name}`;
    return `${person.name} has died yet...`;
}

Character.prototype.getDamage = function(points) {
    if(this.hp - points < 0) {
        this.hp = 0;
        this.isAlive = false;
    } else {
        this.hp -= points;
    }
};

Character.prototype.getMedicine = function(points) {
    if(this.hp + points > 100) {
        this.hp = 100;
    } else {
        this.hp += points;
    }
};

Character.prototype.getInfo = function() {
    return `Name: ${this.name};\nHP: ${this.hp};\n`;
};
