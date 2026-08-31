const user1 = {
    name: 'John',
};

const id = Symbol("id");

user1[id] = 0;

console.log(user1);