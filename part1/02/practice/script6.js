const spells = {
    spellsCount: 0,
    castSpell() {
        this.spellsCount += 1;
    }
};

console.log(spells);

spells.castSpell();
spells.castSpell();
spells.castSpell();

console.log(spells);