const hero = {
    hp: 100,
    level: 11,
};

const villain = {
    hp: 100,
    level: 10,
};

const heroPower    = hero.hp    + hero.level;
const villainPower = villain.hp + villain.level;

if(heroPower < villainPower) {
    alert("Лиходій пеермагає");
} else if(heroPower > villainPower) {
    alert("Герой перемагає");
} else {
    alert("Нічия");
}
