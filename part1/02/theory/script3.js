function marry(man, woman) {
    woman.hasband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    };
}

const man = {name: "Ivan"};
const woman = {name: "Anna"};

console.log(man);
console.log(woman);

const child = marry(man, woman);

console.log(man);
console.log(woman);
console.log(child);
