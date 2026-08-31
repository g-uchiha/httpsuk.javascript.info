"use strict";

const player = {
    name: "Geralt",
    level: 20,
    bonus: 1.5,

    calculateDamage(baseDamage, criticalMultiplier) {
        return baseDamage * this.level * this.bonus * criticalMultiplier;
    }
};

function callFunction(callback) {
    return function(...args) {
        // return callback.apply(this, args);
        return callback.call(this, ...args);
    };
}

player.calculateDamage = callFunction(player.calculateDamage);

const playerCalculateDamage = player.calculateDamage.bind(player);
console.log(playerCalculateDamage(10, 20));